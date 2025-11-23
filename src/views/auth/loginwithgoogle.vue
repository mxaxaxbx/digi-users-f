<template>
  <div class="flex h-screen flex-row">
    <div class="
        flex flex-col
        justify-start items-start
        font-alexandria
        bg-[#252525]
        w-[758px]
        h-full
        border-r border-[#3a3a3a]
        shadow-md
        my-auto
        py-4
        px-8
      ">
      <router-link :to="isAuth ? '/app' : '/'" class="text-white
              ">
        <img src="/img/logo-fireweb.svg" alt="Logo" class="h-[25px] mt-1 mb-24" />
      </router-link>
      <div class="
        flex flex-col justify-left
        mx-auto
        px-auto
        my-auto
        items-left
        ">
        <h1 class=" text-white mx-8 text-[2rem] font-bold mb-2">
          It all starts here... &#58;&#41;</h1>
        <div class="
          flex items-left justify-left
          text-[1.1rem] text-[#7f7f7f]
          mb-12 mx-8
          font-light
          ">
          <span>Sign in easily and securely with your Google account.</span>
        </div>
        <div class="flex justify-center w-ful mx-8 mb-12">
          <a :href="`https://accounts.google.com/o/oauth2/v2/auth?${uriquery}`" class="
            flex items-center justify-center
            bg-[#252525]
            py-2
            rounded-full border border-[#3d3d3d]
            hover:border-[#9CA3AF] hover:bg-[#2a2a2a]
            focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
            w-full
          ">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" class="w-6 h-6" />
            <span class="ml-2 text-white font-semibold">Sign with Google</span>
          </a>
        </div>
        <div class="flex items-center w-full px-8">
          <span class="flex-grow h-px bg-[#3d3d3d]"></span>
          <span class="px-4 text-white text-sm font-regular">or</span>
          <span class="flex-grow h-px bg-[#3d3d3d]"></span>
        </div>
        <div
          ref="emailInput"
          class="
            relative
            flex flex-col justify-center
            w-full
            mb-4 px-8 pt-10 pb-6
            rounded-lg
            border
            "
            :class="isEmailInvalid ?
            'bg-[#FFA600]/10 border-[#FFA600]' : 'bg-transparent border-transparent'"
            >
          <div
          v-if="showAlert"
          class="
            absolute top-3 -mx-0
            w-full
            flex items-center
            text-white text-xs font-regular
            transition-all duration-300"
          >
        <img
          src="/icon/icon-alert.svg"
          alt="alert"
          class="w-5 h-5 mr-2 "
        />
          {{ alertMessage }}
        </div>
          <span class="text-white text-base font-medium px-4 pb-1.5">
            Email</span>
          <input
            Type:="email"
            v-model="email"
            :placeholder="dynamicPlaceholder"
            @keydown="handleKey"
            @keyup="handleKey"
            class="
            flex items-center justify-center
            bg-[#252525]
            w-full
            py-2 px-4
            font-regular text-sm
            placeholder:text-white/20 placeholder:font-light
            rounded-full border
            focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
          "
          :class="isEmailInvalid
          ? [
            'bg-[#FFA600]/5 border-[#FFA600]',
            'placeholder:text-white/50 text-white',
            'hover:border-white hover:bg-[#ffa600]/10'
          ]
          : [
            'bg-[#252525] border-[#3d3d3d] text-white',
            'hover:border-[#9CA3AF] hover:bg-[#2a2a2a]'
          ]"
          />
        </div>
        <div class="flex justify-center w-full mb-6 px-8">
          <button
            @click="submitEmail"
            class="
            flex items-center justify-center
            w-full
            bg-[#ED1C24]
            py-2
            rounded-full
            hover:ring-4 hover:ring-[#ED1C24]/50
              focus:ring-4 focus:ring-[#ED1C24]/50
              transition-all duration-300 ease-in-out
          ">
            <span class="text-white font-semibold">Sign In</span>
            <img
              src="/icon/icon-signIn.svg"
              alt="singIn"
              class="w-6 h-6 ml-2" />
        </button>
        </div>
        <span class="text-[#7f7f7f]/80 text-xs font-light mt-6 mb-2 text-center block">
          By continuing, you agree to our
          <a href="/privacy-policy" target="_blank" class="text-[#7f7f7f]
          hover:text-white underline underline-offset-2 transition">
            Terms of Service
          </a>
          and
          <a href="/privacy-policy" target="_blank" class="text-[#7f7f7f]
      hover:text-white underline underline-offset-2 transition">
            Privacy Policy
          </a>.
        </span>
      </div>
      <div class="flex justify-center w-full mt-16 mb-4">
        <img src="/img/logo-digi.svg" alt="digi-apps-logo" class="
          h-10 mt-1 mb-2
          opacity-10 hover:opacity-100
          transition-all duration-300 ease-in-out
          ">
      </div>
    </div>
    <div class="
      flex flex-col
      justify-center items-center
      font-alexandria
      flex-1
      h-full
      my-auto
    ">
      <div
        class="relative w-[500px]"
        @mouseenter="pauseRotation"
        @mouseleave="resumeRotation"
        @focusin="pauseRotation"
        @focusout="resumeRotation"
        tabindex="0">
        <!-- Icono de fondo -->
        <img
          src="/icon/icon-comillas.svg"
          alt="Background"
          class="absolute h-16 -top-12 -left-14 z-0 opacity-30" />

        <!-- Commentaries -->
        <transition
          name="fade"
          mode="out-in">
          <p
            :key="currentIndex"
            class="
              text-white text-2xl font-regular
              mb-10 relative z-10 transition-all duration-500
              ">
            {{ testimonials[currentIndex].text }}
          </p>
        </transition>

        <!-- Avatar + name -->
        <div class="text-[#a3a3a3] text-center text-lg font-semibold flex items-center mb-30">
          <img
            :src="testimonials[currentIndex].avatar"
            :alt="testimonials[currentIndex].handle"
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
import { useRoute } from 'vue-router';

/* Dynamic placeholder for email input */
/* eslint-disable */
const isCapOn = ref(false);
const normalPlaceholder = 'what’s-your@email.com';

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

function showCustomAlert(message) {
  alertMessage.value = message;
  showAlert.value = true;

  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
}

function submitEmail() {
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    isEmailInvalid.value = true;
    showCustomAlert('WTF was that? Try a real email. You know; with an @ and stuff.');

    setTimeout(() => {
      isEmailInvalid.value = false;
    }, 3000);

    return;
  }

  isEmailInvalid.value = false;
  showCustomAlert('Email looks good!');
}

const SCOPES = ref(['openid', 'email', 'profile', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']);

const route = useRoute();
const uriquery = ref<string>('');

function generateUri() {
  const app = typeof route.query.app === 'string' ? route.query.app : '';
  const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '';
  sessionStorage.setItem('app', app); // Default to empty string if app is not provided
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
  const app = typeof route.query.app === 'string' ? route.query.app : '';

  switch (app) {
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
let timer = null;
let paused = false;

/**
 * Avanza al siguiente testimonio.
 * Protegemos contra arrays vacíos por si acaso.
 */
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
