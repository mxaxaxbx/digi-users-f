<template>
  <div class="h-screen flex justify-center items-center">
    <div class="
        -mt-5
        h-screen
        text-white
        px-7 py-16
        w-full sm:w-full md:w-1/2 lg:w-1/3
        --shadow-lg --rounded
        bg-gradient-to-br from-pink-900 to-pink-700
      ">
      <form class="" action="" method="POST" @submit.prevent="validatecode()">
        <h1 class="w-full text-4xl text-center my-6"> Verificación de email </h1>
        <h3 class="w-full text-center my-6 text-gray-200">
          Ingrese el código que ha sido enviado a al correo {{ email }}
        </h3>
        <div class="w-full my-10">
          <div class="flex space-x-2 justify-center">
            <!-- eslint-disable-next-line  vuejs-accessibility/form-control-has-label -->
            <input
              v-for="i in 6"
              :key="`code-${i}`"
              :id="`code-${i}`"
              :name="`code-${i}`"
              @keyup.exact="setCode"
              @keydown.prevent.ctrl.v="pasteCode"
              type="text"
              maxlength="1"
              :disabled="loading"
              class="w-10 p-2 rounded shadow text-black text-center codes"
            />
          </div>
        </div>

        <div class="w-full my-10">
          <button @click.prevent="validatecode()" type="submit" class="
              p-2 rounded shadow
              w-full
              --bg-gradient-to-tr
              --from-slate-600 --to-slate-400
              bg-white
              text-black font-semibold
            " :class="loading ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer'"
            :disabled="loading">
            <span v-if="loading">
              <i class="fas fa-spinner animate-spin mr-2"></i>
              Enviando código...
            </span>
            <span v-else>
              Enviar código
            </span>
          </button>
        </div>

      </form>
      <div class="w-full my-10 flex justify-center">
        <button v-if="availableIn === 0" @click="resendCode()" class="underline cursor-pointer">
          Reenviar código
        </button>
        <span v-else> Reenviar código en {{ formattedAvailableIn }} </span>
      </div>
      <!-- change email address -->
      <div class="w-full my-10 flex justify-center">
        <router-link to="/auth/login" class="underline cursor-pointer">
          Cambiar correo
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import moment from 'moment';

const store = useStore();
const route = useRoute();
const router = useRouter();

const loading = ref(false);
const email = ref('');
const code = ref<number[]>([0, 0, 0, 0, 0]);
const availableIn = ref(0);

const formattedAvailableIn = computed(() => {
  const minutes = Math.floor(availableIn.value / 60);
  const seconds = availableIn.value % 60;
  // add leading zero if seconds or minutes is less than 10
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
});

let next = moment().add(2, 'minute').unix();
const newInterval = (interval: number) => {
  const now = moment().unix();
  if (next < now) {
    clearInterval(interval);
    return;
  }
  availableIn.value = next - now;
};

const timer = setInterval(() => {
  newInterval(timer);
}, 1000);

onMounted(() => {
  if (!route.query.email) {
    router.push({ path: '/auth/sendcode' });
  }
  email.value = route.query.email as string;
  return () => clearInterval(timer);
});

async function validatecode() {
  loading.value = true;
  try {
    await store.dispatch('auth/validatecode', {
      email: route.query.email as string,
      code: code.value.join(''),
    });
  } catch (err: any) {
    const message = err?.response?.data?.error || 'Ocurrió un error al validar el código';
    console.error('auth/validatecode validatecode', err);
    store.commit('notifications/addNotification', {
      message,
      type: 'error',
    });
  } finally {
    loading.value = false;
  }
}

const pasteCode = async () => {
  try {
    // Access clipboard data from the event object
    const clipboardData = await navigator.clipboard.readText();

    if (clipboardData.length !== 6) {
      store.dispatch('toast/showToast', {
        message: 'El código debe tener 6 dígitos',
        type: 'error',
      });
      return;
    }

    const isaNumber = Number(clipboardData);
    if (Number.isNaN(isaNumber)) {
      store.dispatch('toast/showToast', {
        message: 'El código debe ser numérico',
        type: 'error',
      });
      return;
    }

    // eslint-disable-next-line no-undef
    const inputs = document.querySelectorAll('.codes') as NodeListOf<HTMLInputElement>;
    inputs.forEach((input: HTMLInputElement, index: number) => {
      const inputValue = clipboardData[index];
      // eslint-disable-next-line no-param-reassign
      input.value = inputValue;
      code.value[index] = Number(clipboardData[index]);
    });

    validatecode();
  } catch (err) {
    console.error('auth/validatecode pasteCode', err);
    store.dispatch('toast/showToast', {
      message: 'No se pudo pegar el código',
      type: 'error',
    });
  }
};

const setCode = (ev: Event) => {
  ev.preventDefault();
  const target = ev.target as HTMLInputElement;

  const codeId = Number(target.name.split('-')[1]) - 1;

  const isNumber = Number(target.value);
  if (Number.isNaN(isNumber)) {
    store.dispatch('toast/showToast', {
      message: 'El código debe ser numérico',
      type: 'error',
    });
    target.value = '';
    return;
  }

  code.value[codeId] = Number(target.value[0]);

  if (!target.value) {
    if (codeId > 0) {
      const backInput = document.getElementById(`code-${codeId}`);
      if (backInput) {
        backInput.focus();
      }
    }
    return;
  }

  if (codeId < 5) {
    const nextInput = document.getElementById(`code-${codeId + 2}`);
    if (nextInput) {
      nextInput.focus();
    }
  }

  if (codeId === 5) {
    validatecode();
  }
};

async function resendCode() {
  loading.value = true;
  try {
    await store.dispatch(
      'auth/sendcode',
      { email: route.query.email as string },
    );
  } catch (err: any) {
    const message = err?.response?.data?.error || 'Ocurrió un error al enviar el código';
    console.error('auth/validatecode resendCode', err);
    store.commit('notifications/addNotification', {
      message,
      type: 'error',
    });
  } finally {
    loading.value = false;
    next = moment().add(2, 'minute').unix();
    const t = setInterval(() => {
      newInterval(t);
    }, 1000);
  }
}

</script>
