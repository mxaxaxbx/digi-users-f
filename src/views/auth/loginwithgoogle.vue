<template>
  <div
    class="
      flex flex-col
      justify-start items-start
      font-alexandria
      bg-[#252525]
      w-[700px]
      h-full
      border border-[#3a3a3a]
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
  <div class="flex flex-col justify-left items-left">
    <h1 class=" text-white text-4xl font-semibold mb-4">"It all starts here..."</h1>
    <div class="flex items-left justify-left text-[#7f7f7f] mb-6">
      <img src="/icon/icon-lock.svg" alt="icono" class="w-4 mr-2" />
      <span>Sign in easily and securely with your Google account.</span>
    </div>
    <a
      :href="`https://accounts.google.com/o/oauth2/v2/auth?${uriquery}`"
      class="
        block
        bg-white
        px-8
        py-2
        rounded-full shadow-md border border-gray-300
        hover:border-gray-400
        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
        w-64
      "
    >
      <span class="flex items-left">
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="google"
          class="w-6 h-6"
        />
        <!-- <i class="fab fa-google text-2xl"></i> -->
        <span class="ml-2 font-bold">Sign with Google</span>
      </span>
    </a>
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
