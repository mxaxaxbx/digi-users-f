<template>
  <div class="flex flex-row h-screen font-sans">
    <div
      class="
        flex flex-col justify-center items-start
        bg-[var(--bg-secondary)]
        border-r border-[var(--border)]
        w-[750px] h-full
        my-auto py-4 px-8
        shadow-md
      ">

      <!-- logo and theme toggle -->
      <div class="flex justify-between w-full mb-4  sm:mb-24">

        <!-- Logos -->
        <div class="">
          <!-- logo fireweb -->
          <img
            v-if="app === 'fireweb'"
            :src="isLight
            ? '/img/logo-fireweb-light.svg'
            : '/img/logo-fireweb.svg'"
            alt="Logo"
            class="h-6 mt-1" />

          <!-- logo sky -->
          <img
            v-else-if="app === 'sky'"
            :src="isLight
              ? '/img/logo-sky.svg'
              : '/img/logo-sky-light.svg'"
            alt="sky Logo"
            class="h-6 mt-1"
          />
          <!-- logo Utils -->
          <img
            v-else-if="app === 'utils'"
            :src="isLight
              ? '/img/logo-utils-light.svg'
              : '/img/logo-utils.svg'"
            alt="utils Logo"
            class="h-6 mt-1"
          />
          <!-- logo inventory -->
          <img
            v-else-if="app === 'inventory'"
            :src="isLight
              ? '/img/logo-inventory-light.svg'
              : '/img/logo-inventory.svg'"
            alt="inventory Logo"
            class="h-6 mt-1"
          />
          <!-- logo digi -->
          <img
            v-else
            :src="isLight
              ? '/img/logo-digi-light.svg'
              : '/img/logo-digi.svg'"
            alt="utils Logo"
            class="h-6 mt-1"
          />
        </div>
        <button @click="toggleTheme"
          class="rounded-full px-1.5
          ">
          <img :src="isLight ? '/icon/icon-light.svg' : '/icon/icon-dark.svg'"
            alt="theme toggle"
            class="w-4 h-4 opacity-50 hover:opacity-100 transition" />
        </button>
      </div>

      <div class="
        flex flex-col justify-left items-left
        mx-auto my-auto
        ">
        <h1 class=" text-[var(--text)] px-4 text-3xl sm:text-[2.5rem] font-bold mb-2">
          It all starts here... &#58;&#41;</h1>
        <div class="
          flex items-left justify-left
          font-base text-md text-[#7f7f7f]
          mb-8 mx-auto px-4

          sm:text-[1.1rem]
          sm:mb-12
          ">
          <span>Sign in easily and securely with your Google account.</span>
        </div>
        <div class="flex justify-center w-full mx-auto px-4 mb-8  sm:mb-12">
          <a :href="`https://accounts.google.com/o/oauth2/v2/auth?${uriquery}`"
            class="
              flex items-center justify-center
              bg-[var(--bg-secondary)]
              border border-[var(--border)]
              w-full py-2
              rounded-full

              hover:border-[var(--hover-border-gray)] hover:bg-[var(--hover-bg-gray)]
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
            ">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="google"
              class="w-6 h-6"/>
            <span class="ml-2 text-[var(--text)] font-semibold">Sign with Google</span>
          </a>
        </div>
        <div v-show="app !== 'fireweb'">
          <div class="flex items-center w-full px-4">
            <span class="flex-grow h-px bg-[var(--border)]"></span>
            <span class="px-4 text-[var(--text)] text-sm font-regular">or</span>
            <span class="flex-grow h-px bg-[var(--border)]"></span>
          </div>
          <!-- Email input -->
          <form @submit.prevent="submitEmail" class="" novalidate>
            <div ref="emailInput"
              class="
              relative
              flex flex-col justify-center
              w-full
              px-4 py-4 mb-4
              rounded-lg
              border
              " :class="isEmailInvalid ?
                'bg-[#ffa600]/10 border-[#FFA600] text-[#FFA600]'
                : 'bg-transparent border-transparent'">
              <div v-if="showAlert"
                class="
                  alert-text
                  flex items-center
                  whitespace-pre-line
                  w-full mb-4 mx-0
                  text-xs font-regular text-[#FFA600]
                  transition-all duration-400

                  sm:mx-4 sm:whitespace-normal
                ">
                <img src="/icon/icon-alert.svg" alt="alert" class="w-5 h-5 mr-2" />
                {{ alertMessage }}
              </div>
              <label for="email"
                class="text-[var(--text)] text-base font-regular px-4 pb-1.5">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                :placeholder="dynamicPlaceholder"
                @keydown="handleKey"
                @keyup="handleKey"
                class="
                  flex items-center justify-center
                  bg-[var(--bg)]
                  w-full
                  py-2 px-4
                  font-light text-sm
                  rounded-full border

                  placeholder:text-[var(--text)]
                  placeholder:opacity-30
                  placeholder:font-light

                  focus:outline-none focus:ring-2
                  focus:ring-gray-500 focus:ring-opacity-50
                  focus:bg-[var(--hover-bg-gray)]
                "
                  :class="isEmailInvalid
                    ? [
                      'bg-[#FFA600]/5 border-[#FFA600]',
                      'placeholder:text-[var(--text)]',
                      'hover:bg-[#ffa600]/10'
                    ]
                    : [
                      'bg-[#252525] border-[var(--border)] text-[var(--text)]',
                      'hover:border-[var(--hover-border-gray)] hover:bg-[var(--hover-bg-gray)]'
                    ]
                  "
                />
            </div>

            <div class="flex justify-center w-full px-4 mb-2  sm:mb-6">
              <button
                type="submit"
                :class="[
                  'flex items-center justify-center w-full',
                  'py-2 rounded-full transition-all duration-300 ease-in-out',

                  app === 'digi'
                    ? 'bg-[#F83B66]'
                    : app === 'fireweb'
                      ? 'bg-[#ED1C24]'
                      : app === 'utils'
                        ? 'bg-[#FFC506]'
                        : app === 'sky'
                          ? 'bg-[#0B77F3]'
                          : 'bg-[#F83B66]',

                  // hover ring
                  app === 'digi'
                    ? 'hover:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]'
                    : app === 'fireweb'
                      ? 'hover:ring-4 hover:ring-[#ED1C24]/50'
                      : app === 'utils'
                        ? 'hover:shadow-[0_0_3px_3px_rgba(255,197,6,0.5)]'
                        : app === 'sky'
                          ? 'hover:shadow-[0_0_3px_3px_rgba(10,119,243,0.5)]'
                          : 'hover:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]',

                  // focus ring
                  app === 'digi'
                    ? 'focus:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]'
                    : app === 'fireweb'
                      ? 'focus:ring-4 focus:ring-[#ED1C24]/50'
                      : app === 'utils'
                        ? 'hover:shadow-[0_0_3px_3px_rgba(255,197,6,0.5)]'
                        : app === 'sky'
                          ? 'focus:shadow-[0_0_3px_3px_rgba(10,119,243,0.5)]'
                          : 'focus:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]'
                ]">
                <span class="text-white font-semibold">Sign In</span>
                <img
                  v-if="!loading"
                  src="/icon/icon-signIn.svg"
                  alt="singIn"
                  class="w-6 h-6 ml-2" />
                <svg v-else class="animate-spin color-spin ml-4" width="20" height="20" viewBox="0 0 86 86" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <!-- eslint-disable-next-line max-len -->
                    <path d="M43 0C49.608 0 55.8671 1.49206 61.4609 4.15527C63.289 2.80154 65.5506 2 68 2C74.0751 2 79 6.92487 79 13C79 14.7395 78.5939 16.3835 77.875 17.8457C82.9856 24.9189 86 33.6068 86 43C86 66.7482 66.7482 86 43 86C19.2518 86 0 66.7482 0 43C0 19.2518 19.2518 0 43 0ZM43 8C23.67 8 8 23.67 8 43C8 62.33 23.67 78 43 78C62.33 78 78 62.33 78 43C78 35.685 75.7543 28.8952 71.917 23.2793C70.6999 23.7434 69.3801 24 68 24C61.9249 24 57 19.0751 57 13C57 12.3154 57.0659 11.6461 57.1855 10.9961C52.8493 9.07124 48.05 8 43 8ZM43 20C55.7025 20 66 30.2975 66 43C66 55.7025 55.7025 66 43 66C30.2975 66 20 55.7025 20 43C20 30.2975 30.2975 20 43 20Z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <span
          class="
            text-[#7f7f7f]/80 text-xs font-light
            text-center block
            mt-6 mb-0 sm:mb-2
          ">By continuing, you agree to our
          <span class="block sm:hidden"></span>
          <a href="/privacy-policy"
            target="_blank"
            class="text-[#7f7f7f] hover:text-[var(--text)] underline underline-offset-2 transition">
            Terms of Service
          </a>
          and
          <a href="/privacy-policy"
            target="_blank"
            class="text-[#7f7f7f]hover:text-[var(--text)] underline underline-offset-2 transition">
            Privacy Policy
          </a>.
        </span>
      </div>
      <div class="flex justify-center w-full mt-0 mb-0 sm:mt-16 sm:mb-4">
        <img
          :src="isLight
            ? '/img/logo-digi-light.svg'
            : '/img/logo-digi.svg'"
          alt="sky Logo"
          class="
            h-6 mt-1 mb-2
            opacity-10 hover:opacity-100
            transition-all duration-300 ease-in-out
          "/>
      </div>
    </div>
    <div
      class="
        flex flex-col flex-1
        justify-center items-center
        bg-[var(--bg)]
        h-full my-auto
        hidden

        sm:flex
      ">
      <div
        class="relative w-[500px] mx-auto px-12"
        @mouseenter="pauseRotation"
        @mouseleave="resumeRotation"
        @focusin="pauseRotation"
        @focusout="resumeRotation"
        tabindex="0"
        >
        <!-- Icono de fondo -->
        <img
          src="/icon/icon-comillas.svg"
          alt="Background"
          class="
            absolute h-16 -top-12
            opacity-30

          sm:-left-[-20px] lg:-left-16"
        />

        <!-- Commentaries -->
        <transition name="fade" mode="out-in">
          <p :key="currentIndex"
            class="
              relative z-10
              text-[var(--text)] text-2xl font-regular
              mb-10

              transition-all duration-500
              ">
            {{ testimonials[currentIndex].text }}
          </p>
        </transition>

        <!-- Avatar + name -->
        <div class="text-[#a3a3a3] text-center text-lg font-regular flex items-center mb-30">
          <img :src="testimonials[currentIndex].avatar" :alt="testimonials[currentIndex].handle"
            class="w-16 h-16 mr-4 rounded-full object-cover" />
          <span>@{{ testimonials[currentIndex].handle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
} from 'vue';

import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const route = useRoute();
const store = useStore();
const loading = ref(false);

/* Dynamic placeholder for email input */
/* eslint-disable */
const isCapOn = ref(false);
const normalPlaceholder = 'what’s-your@email.com';

const app = computed(() => typeof route.query.app === 'string' ? route.query.app : '');

function handleKey(e: KeyboardEvent) {
  if (
    e.getModifierState &&
    e.getModifierState('CapsLock') !== isCapOn.value
  ) {
    isCapOn.value = e.getModifierState('CapsLock');
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey);
  window.addEventListener('keyup', handleKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey);
  window.removeEventListener('keyup', handleKey);
});

const dynamicPlaceholder = computed(() => {
  if (isCapOn.value) {
    return normalPlaceholder.toUpperCase();
  } else {
    return normalPlaceholder.toLowerCase();
  }
});
/* eslint-enable */
/* Email valid */
const email = ref('');
const showAlert = ref(false);
const alertMessage = ref('');
const isEmailInvalid = ref(false);

const isLight = computed(() => store.state.theme.theme === 'light');

const toggleTheme = () => {
  store.dispatch('theme/toggleTheme');
  const newTheme = store.state.theme.theme;

  document.documentElement.classList.toggle('light', newTheme === 'light');
};

function showCustomAlert(message) {
  alertMessage.value = message;
  showAlert.value = true;

  setTimeout(() => {
    showAlert.value = false;
  }, 6000);
}

async function submitEmail() {
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    isEmailInvalid.value = true;
    showCustomAlert('WTF was that? Try a real email.\nCome on! You know; with an @ and stuff.');

    setTimeout(() => {
      isEmailInvalid.value = false;
    }, 6000);

    return;
  }

  isEmailInvalid.value = false;

  try {
    loading.value = true;

    await store.dispatch('auth/sendcode', {
      email: emailValue,
    });

    router.push({
      path: '/auth/check-code',
      query: {
        email: emailValue,
        app: route.query.app,
      },
    });
  } catch (error: any) {
    console.error(error);
    showCustomAlert('Something went wrong while sending your code.');
  } finally {
    loading.value = false;
  }
}

const SCOPES = ref(['openid', 'email', 'profile', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']);

const uriquery = ref<string>('');

function generateUri() {
  const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '';
  sessionStorage.setItem('app', app.value); // Default to empty string if app is not provided
  sessionStorage.setItem('redirect', redirect); // Default to empty string if redirect is not provided

  // scopes to string
  const scopes = SCOPES.value.join(' ');

  const queryObject: any = {
    response_type: 'code',
    client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
    redirect_uri: `${process.env.VUE_APP_DIGI_USERS_F}/auth/validategoogletoken`,
    scope: scopes,
    access_type: 'offline',
    prompt: 'consent',
  };

  uriquery.value = Object.keys(queryObject)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`)
    .join('&');
}

function addNecessaryScopes() {
  switch (app.value) {
    case 'fireweb': {
      SCOPES.value.push('https://www.googleapis.com/auth/cloud-platform.read-only');
      SCOPES.value.push('https://www.googleapis.com/auth/datastore');
      return;
    }

    default: {
      console.error('App not supported');
    }
  }
}

onMounted(async () => {
  try {
    addNecessaryScopes();
    generateUri();
  } catch (error) {
    console.error(error);
  }
});
const testimonials = [
  {
    text:
      'Honestly, this app makes things so much easier. Everything feels smooth, simple, and actually helpful. It’s rare to find something that works this well and still feels effortless.',
    avatar: '/img/photo.png',
    handle: 'saldefrutitas',
  },
  {
    text:
      'I love how intuitive the interface is — saves me time and stress every day. Highly recommended!',
    avatar: '/img/photo2.png',
    handle: 'jimjim',
  },
  {
    text:
      'Small details, big impact. Managing content used to be such a headache constantly switching tabs, editing raw JSON in Firestore, and praying I didn’t break anything. Now everything feels smooth and human. What used to take ten minutes of copy-paste and double-checking takes seconds. It’s honestly a relief.',
    avatar: '/img/photo3.png',
    handle: 'codelover',
  },
];

const currentIndex = ref(0);
const intervalMs = 10000;
let timer: number | null = 0;
let paused = false;

/* Avanza al siguiente testimonio. */
function next() {
  if (paused) {
    return;
  }

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return;
  }

  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
}

/** Inicia el intervalo de rotación */
function startRotation() {
  // Limpia cualquier timer previo por seguridad
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }

  timer = setInterval(next, intervalMs);
}

/** Pausa la rotación (usado en mouseenter / focusin) */
function pauseRotation() {
  paused = true;
}
/** Reanuda la rotación (usado en mouseleave / focusout) */
function resumeRotation() {
  paused = false;
}

onMounted(() => {
  startRotation();
});

onUnmounted(() => {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
});

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease, transform 500ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
