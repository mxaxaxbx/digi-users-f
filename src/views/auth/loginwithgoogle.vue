<template>
  <div class="flex h-screen flex-row">
  <div
    class="
      flex flex-col
      justify-start items-start
      font-alexandria
      bg-[#252525]
      w-[650px]
      h-full
      border-r border-[#3a3a3a]
      shadow-md
      my-auto
      py-4
      px-8
    "
  >
    <img
      src="/img/logo-fireweb.svg"
      alt="Logo"
      class="h-[25px] mt-1 mb-24"
    />
  <div class="
    flex flex-col justify-left
    mx-auto
    my-auto
    items-left
    ">
    <h1 class=" text-white text-[2rem] font-bold mb-2">It all starts here...  &#58;&#41;</h1>
    <div class="flex items-left justify-left
      text-[1.1rem] text-[#7f7f7f]
      mb-12
      font-light
      ">
      <span>Sign in easily and securely with your Google account.</span>
    </div>
    <div class="flex justify-center w-full mb-20">
      <a
        :href="`https://accounts.google.com/o/oauth2/v2/auth?${uriquery}`"
        class="
          flex items-center justify-center
          bg-[#252525]
          py-2
          rounded-full border border-[#3d3d3d]
          hover:border-[#9CA3AF] hover:bg-[#2a2a2a]
          focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
          w-full
        "
      >
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="google"
          class="w-6 h-6"
        />
        <span class="ml-2 text-white font-semibold">Sign with Google</span>
      </a>
    </div>
    <span class="text-[#7f7f7f]/80 text-sm font-light mt-6 mb-2 text-center block">
      By continuing, you agree to our
      <a href="/terms"
        class="text-[#7f7f7f]
          hover:text-white underline underline-offset-2 transition">
        Terms of Service
      </a>
      and
      <a href="/privacy"
      class="text-[#7f7f7f]
      hover:text-white underline underline-offset-2 transition">
        Privacy Policy
      </a>.
    </span>
  </div>
  <div class="flex justify-center w-full mt-16 mb-4">
    <img
        src="/img/logo-digi.svg"
        alt="digi-apps-logo"
        class="
          h-10 mt-1 mb-2
          opacity-10 hover:opacity-100
          transition-all duration-300 ease-in-out
          ">
  </div>
  </div>
  <div
    class="
      flex flex-col
      justify-center items-center
      font-alexandria
      flex-1
      h-full
      my-auto
    ">
    <div class="
      relative
      w-[500px]
      ">
      <img
        src="/icon/icon-comillas.svg"
        alt="Background"
        class="
          absolute
          h-16
          top-[-50px] left-[-55px]
          z-0
      ">
      <p class=" text-white text-2xl font-regular mb-10 relative z-10">
        Honestly, this app makes things so much easier.
        Everything feels smooth, simple, and actually helpful.
        It’s rare to find something that works this well and still feels effortless. 😊
      </p>
      <div class="text-[#a3a3a3] text-center text-lg font-semibold flex items-center mb-30 ">
      <img
        src="/img/photo.png"
        alt="Fer"
        class="w-16 h-16 mr-4 rounded-full object-cover"
      />
      <spam>@saldefrutitas</spam>
    </div>
  </div>
  </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

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

</script>
