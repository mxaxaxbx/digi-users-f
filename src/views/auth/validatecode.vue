<template>
  <div
    class="
      flex justify-center items-center
      font-alexandria
      h-screen w-screen
      bg-[#1d1d1d]">
    <div class="
        -mt-5
        px-20 py-8
        border border-[#3d3d3d]
        rounded-lg
        mx-auto
        bg-[#252525]
        shadow-lg
      ">
      <form class="" action="" method="POST" @submit.prevent="validatecode()">
        <h1 class="w-full text-3xl text-left text-white font-bold my-8">
          Ready for Your<br>Verification Code?... &#58;&#41;</h1>
        <h3 class="w-full text-center text-[#A3A3A3] text-md font-light">
          A fresh code just landed in your inbox. Go take a look.
        </h3>
        <p class="font-semibold text-center text-white">{{ email }}</p>
        <div class="w-full my-10">
          <div class="flex space-x-2 justify-center">
            <!-- eslint-disable-next-line  vuejs-accessibility/form-control-has-label -->
            <input
              v-for="i in 6"
              :key="`code-${i}`"
              :id="`code-${i}`"
              :name="`code-${i}`"
              @input="setCode"
              @paste.prevent="pasteCode"
              @click="lockCaret"
              @focus="lockCaret"
              @keydown="handleKeydown"
              type="text"
              maxlength="1"
              :disabled="loading"
              class="w-10 p-2 rounded bg-[#1d1d1d]/50 border border-[#3d3d3d]
              text-white text-center codes"
            />
          </div>
        </div>

        <div class="w-full my-10">
          <button
            @click.prevent="validatecode()"
            type="submit"
            class="
              p-2 rounded-full shadow
              w-full
              --bg-gradient-to-tr
              --from-slate-600 --to-slate-400
              bg-white
              text-[#3d3d3d] font-semibold
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
      <div class="w-full my-10 flex justify-center text-white">
        <button
          v-if="availableIn === 0"
          @click="resendCode()"
          class="underline cursor-pointer">
          Reenviar código
        </button>
        <span v-else> Reenviar código en {{ formattedAvailableIn }} </span>
      </div>
      <!-- change email address -->
      <div class="w-full my-10 flex justify-center text-white">
        <router-link
          :to="`/auth/login?app=${app}&redirect=${redirect}`"
          class="underline cursor-pointer"
        >
          Cambiar correo
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  onUnmounted,
  computed,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import moment from 'moment';

const store = useStore();
const route = useRoute();
const router = useRouter();

const loading = ref(false);
const email = ref('');
const code = ref<number[]>([0, 0, 0, 0, 0]);
const availableIn = ref(0);
const app = ref('');
const redirect = ref('');

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
  email.value = typeof route.query.email === 'string'
    ? route.query.email
    : '';
  app.value = typeof route.query.app === 'string'
    ? route.query.app
    : '';
  redirect.value = typeof route.query.redirect === 'string'
    ? route.query.redirect
    : '';
  return () => clearInterval(timer);
});

onMounted(() => {
  const handleGlobalPaste = (ev: ClipboardEvent) => {
    const clipboardData = ev.clipboardData?.getData('text') || '';
    const digits = clipboardData.replace(/\D/g, '').slice(0, 6).split('');
    if (!digits.length) return;

    ev.preventDefault(); // evita que se pegue en el input actual

    const inputs = document.querySelectorAll<HTMLInputElement>('.codes');
    digits.forEach((digit, idx) => {
      const input = inputs[idx];
      if (input) {
        input.value = digit;
        code.value[idx] = Number(digit);
      }
    });

    // opcional: enfocar el último input pegado
    const lastInput = inputs[digits.length - 1];
    lastInput?.focus();
    // eslint-disable-next-line no-use-before-define
    validatecode();
  };

  document.addEventListener('paste', handleGlobalPaste);

  onUnmounted(() => {
    document.removeEventListener('paste', handleGlobalPaste);
  });
});

async function validatecode() {
  loading.value = true;
  try {
    await store.dispatch('auth/validatecode', {
      email: typeof route.query.email === 'string' ? route.query.email : '',
      code: code.value.join(''),
      app: typeof route.query.app === 'string' ? route.query.app : '',
      redirect: typeof route.query.redirect === 'string' ? route.query.redirect : '',
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
function lockCaret(e) {
  const el = e.target;
  if (el.selectionStart !== 1) {
    el.setSelectionRange(1, 1);
  }
}

function handleArrows(e) {
  const el = e.target;
  const index = Number(el.id.split('-')[1]);

  if (e.key === 'ArrowRight') {
    const nextInput = document.getElementById(`code-${index + 1}`);
    if (nextInput) {
      e.preventDefault();
      nextInput.focus();
    }
  }

  if (e.key === 'ArrowLeft') {
    const prevInput = document.getElementById(`code-${index - 1}`);
    if (prevInput) {
      e.preventDefault();
      prevInput.focus();
    }
  }
}

function handleKeydown(e) {
  lockCaret(e);
  handleArrows(e);
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
  if (!target || !target.name) return;
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
      {
        email: typeof route.query.email === 'string' ? route.query.email : '',
      },
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
<style scoped>
.codes {
  user-select: none;
  caret-color: transparent;
}
</style>
