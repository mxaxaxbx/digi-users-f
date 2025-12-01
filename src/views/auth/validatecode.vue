<template>
  <div
    class="
      flex justify-center items-center
      font-alexandria
      h-screen w-screen
      bg-[var(--bg)]">
    <div class="
        -mt-5 mx-auto
        px-20 py-8
        rounded-lg
        border border-[var(--border)]
        bg-[var(--bg)]
        shadow-sm
      ">
      <form class="" action="" method="POST" @submit.prevent="validatecode()">
        <h1 class="w-full text-3xl text-left text-[var(--text)] font-bold my-8">
          Ready for Your<br>Verification Code?... &#58;&#41;</h1>
        <h3 class="w-full text-center text-[var(--text-secondary)] text-md font-light">
          A fresh code just landed in your inbox. Go take a look.
        </h3>
        <div class="flex w-full justify-center items-center my-2">
        <p class="font-semibold text-center text-[var(--text)]">{{ email }}</p>
        <!-- change email address -->
        <router-link
          :to="`/auth/loginwithgoogle?app=${app}&redirect=${redirect}`"
          class="
            underline underline-offset-2 cursor-pointer
            ml-2
            text-xs text-[var(--text-secondary)] font-light
            hover:text-[var(--text)] hover:font-normal
            transition-all duration-200
            ">
          Change
        </router-link>
        </div>
        <div class="w-full my-10 ">
          <div class="flex space-x-3 justify-center">
            <!-- eslint-disable-next-line  vuejs-accessibility/form-control-has-label -->
            <input
              v-for="i in 6"
              :key="`code-${i}`"
              :id="`code-${i}`"
              :name="`code-${i}`"
              @input="setCode"
              @paste.prevent="pasteCode"
              @focus="lockCaret"
              @keydown="handleKeydown"
              type="text"
              maxlength="1"
              :disabled="loading"
              :class="[
              'w-10 p-2 rounded text-[var(--text)] text-center codes',
              loading
                ? 'bg-[var(--bg-secundary)] border border-[var(--border)] opacity-30'
                : wrongCode
                  ? 'bg-[#ffa600]/5 border border-[#ffa600] text-[var(--text)]'
                  : 'bg-[var(--bg-secondary)] border border-[var(--border)]'
            ]"
            />
          </div>
        </div>

        <div class="w-full mt-2">
          <button
            @click.prevent="validatecode()"
            type="submit"
            class="
              p-2 rounded-full
              w-full
              bg-[var(--bg)]
              text-[var(--text)] font-semibold
            "
            :class="[
              loading
                ? 'cursor-not-allowed'
                : wrongCode
                ? 'cursor-pointer bg-[#ffa600]/5 text-[var(--text)] border border-[#ffa600]'
                : allFilled
                  ? 'cursor-pointer'
                  : 'cursor-not-allowed text-[var(--text-terceary) bg-[var(--bg)]',
                    'border border-[var(--border)]'
              ]"
              :disabled="loading || !allFilled"
            >
            <span v-if="loading">
              <i class="fas fa-spinner animate-spin mr-2 font-bold"></i>
              One sec… checking code!
            </span>
            <span
              v-else-if="wrongCode"
              class="font-semibold text-[var(--text)]">
              Nice try, but nope. Try again!
          </span>
            <span v-else class="font-semibold">
              <span v-if="missingDigits > 0" class="ml-2 text-md text-[var(--text)] opacity-50">
                {{ missingDigits }} digits left!
              </span>
            </span>
          </button>
        </div>

      </form>
      <div class="w-full mt-8 flex justify-center">
        <button
          v-if="availableIn === 0"
          @click="resendCode()"
          class="
            underline underline-offset-2 cursor-pointer
            py-1
            text-sm text-[var(--text-secondary)] font-light
            hover:text-[var(--text)] hover:font-normal
            transition-all duration-200
            ">
          Resend Code?
        </button>
        <div
          v-else
          class="text-[var(--text-secondary)]">
          <span class="text-sm font-light py-1 mr-2">
            This code won’t stick around for long. It expires in…</span>
          <span class="text-lg font-semibold">{{ formattedAvailableIn }} </span>
          </div>
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
const code = ref<(number | null)[]>([null, null, null, null, null, null]);
const availableIn = ref(0);
const app = ref('');
const redirect = ref('');
const wrongCode = ref(false);

const allFilled = computed(() => (
  code.value.every((val) => val !== null && val !== undefined)
));

// Computed que dice cuántos dígitos faltan
const missingDigits = computed(() => (
  code.value.filter((val) => val === null || val === undefined).length
));

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

    ev.preventDefault();

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
  wrongCode.value = false;

  try {
    await store.dispatch('auth/validatecode', {
      email: typeof route.query.email === 'string' ? route.query.email : '',
      code: code.value.join(''),
      app: typeof route.query.app === 'string' ? route.query.app : '',
      redirect: typeof route.query.redirect === 'string' ? route.query.redirect : '',
    });
  } catch (err: any) {
    wrongCode.value = true;
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
  const el = e.target as HTMLInputElement;
  if (el.value.length === 1) {
    el.setSelectionRange(0, 1);
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
  const target = ev.target as HTMLInputElement;
  if (!target || !target.name) return;

  const codeId = Number(target.name.split('-')[1]) - 1;

  const digit = target.value.slice(-1);

  // validar número
  const isNumber = Number(digit);
  if (Number.isNaN(isNumber)) {
    target.value = '';
    code.value[codeId] = null;
    store.dispatch('toast/showToast', {
      message: 'El código debe ser numérico',
      type: 'error',
    });
    return;
  }

  target.value = digit;
  code.value[codeId] = Number(digit);

  if (codeId < 5) {
    const nextInput = document.getElementById(`code-${codeId + 2}`);
    nextInput?.focus();
  } else {
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
.codes::selection {
  background: transparent;
  color: inherit;
}
</style>
