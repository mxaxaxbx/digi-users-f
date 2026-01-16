<template>
  <div
    class="
      flex justify-center items-center
      font-alexandria font-sans
      h-screen w-full
      bg-[var(--bg)]">
    <div class="
        -mt-5 mx-auto
        px-auto pb-24 pt-16 sm:px-8
        rounded-lg
        bg-[var(--bg)]
        shadow-sm

        sm:border border-[var(--border)]
      ">
      <img
        :src="isLight
        ? '/img/logo-digi-light.svg'
        : '/img/logo-digi.svg'"
        alt="utils Logo"
        class="h-[25px] ml-6 mb-20"
        />
      <form class="px-6 h-full" action="" method="POST" @submit.prevent="validatecode()">
        <h1
          class="
            w-full
            my-8
            text-2xl text-left text-[var(--text)]
            font-bold
            sm:text-3xl
          ">
          Ready for Your<br>Verification Code?... &#58;&#41;</h1>
        <h3 class="w-full text-center text-[var(--text-secondary)] text-md sm:text-md font-light">
          A fresh code just landed in your inbox. Go take a look.
        </h3>
        <div class="flex w-full justify-center items-center my-2">
        <p class="font-semibold text-center text-sm sm:text-md text-[var(--text)]">{{ email }}</p>
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
            <span v-if="loading"
              class="flex justify-center items-center font-regular
              ">
               <svg class="animate-spin color-spin mr-4" width="20" height="20" viewBox="0 0 86 86" fill="var(--text-secondary)" xmlns="http://www.w3.org/2000/svg">
                <!-- eslint-disable-next-line max-len -->
                <path d="M43 0C49.608 0 55.8671 1.49206 61.4609 4.15527C63.289 2.80154 65.5506 2 68 2C74.0751 2 79 6.92487 79 13C79 14.7395 78.5939 16.3835 77.875 17.8457C82.9856 24.9189 86 33.6068 86 43C86 66.7482 66.7482 86 43 86C19.2518 86 0 66.7482 0 43C0 19.2518 19.2518 0 43 0ZM43 8C23.67 8 8 23.67 8 43C8 62.33 23.67 78 43 78C62.33 78 78 62.33 78 43C78 35.685 75.7543 28.8952 71.917 23.2793C70.6999 23.7434 69.3801 24 68 24C61.9249 24 57 19.0751 57 13C57 12.3154 57.0659 11.6461 57.1855 10.9961C52.8493 9.07124 48.05 8 43 8ZM43 20C55.7025 20 66 30.2975 66 43C66 55.7025 55.7025 66 43 66C30.2975 66 20 55.7025 20 43C20 30.2975 30.2975 20 43 20Z"/>
              </svg>
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
          class="text-[var(--text-secondary)] mx-6 text-center">
          <span class="text-xs sm:text-sm font-light py-1 mr-2">
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
.color-spin {
  animation:
    spin 1s linear infinite,
    colorSpin 1s ease-in-out infinite;
}

</style>
