<template>
  <div class="bg-white p-4 shadow-lg rounded-lg">
    <h1 class="text-2xl font-bold">Login with Google</h1>
    <!-- line -->
     <hr class="my-3 border-gray-300 w-full border-2" />
    <button
      @click="loginWithGoogle"
      class="
        bg-white
        px-4 py-4
        rounded-lg shadow-md border border-gray-300
        hover:border-gray-400
        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
        w-full
      "
    >
      <span class="flex items-center">
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="google"
          class="w-6 h-6"
        />
        <!-- <i class="fab fa-google text-2xl"></i> -->
        <span class="ml-2 font-bold">Login with Google</span>
      </span>
    </button>
    <a
      :href="`https://accounts.google.com/o/oauth2/v2/auth?${uriquery}`"
      class="
        block
        bg-white
        px-4 py-4
        rounded-lg shadow-md border border-gray-300
        hover:border-gray-400
        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
        w-full
      "
    >
      <span class="flex items-center">
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="google"
          class="w-6 h-6"
        />
        <!-- <i class="fab fa-google text-2xl"></i> -->
        <span class="ml-2 font-bold">Login with Google</span>
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { encode } from '@/utils/custom-enc-dec';

declare global {
  interface Window {
    tokenClient: any;
    google: any;
    gapi: any;
  }
}

const SCOPES = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/cloud-platform';

const route = useRoute();
const router = useRouter();
const token = ref<string>('');
const uriquery = ref<string>('');

function redirectToApp() {
  const { app, redirect } = route.query;
  switch (app) {
    case 'fireweb': {
      const uri = `auth/confirmsession?token=${token.value}&redirect=${redirect}`;
      const { VUE_APP_URL_DG_FIREWEB_APP } = process.env;
      const url = `${VUE_APP_URL_DG_FIREWEB_APP}/${uri}`;
      window.location.href = url;
      break;
    }
    default:
      console.error('Invalid app');
      router.push('/');
  }
}

function loginWithGoogle() {
  window.tokenClient.callback = async (resp: any) => {
    if (resp.error) {
      console.error(resp.error);
      return;
    }

    token.value = encode(resp.access_token);
    redirectToApp();
  };

  if (window.gapi.client.getToken() === null) {
    window.tokenClient.requestAccessToken({ prompt: 'consent' });
  } else {
    window.tokenClient.requestAccessToken({ prompt: '' });
  }
}

async function initializeGapiClient() {
  await window.gapi.client.init({
    apiKey: 'PI_KEY',
  });
}

function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function loadGapi() {
  window.gapi.load('client', initializeGapiClient);
}

function loadGis() {
  const { VUE_APP_GOOGLE_CLIENT_ID } = process.env;
  window.tokenClient = window.google.accounts.oauth2.initTokenClient({
    client_id: VUE_APP_GOOGLE_CLIENT_ID,
    scope: SCOPES,
    callback: '',
  });
}

function generateUri() {
  const queryObject: any = {
    response_type: 'code',
    client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
    redirect_uri: `${process.env.VUE_APP_DIGI_USERS_F}/auth/validategoogletoken`,
    scope: SCOPES,
    access_type: 'offline',
    prompt: 'consent',
  };

  uriquery.value = Object.keys(queryObject)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`)
    .join('&');
}

onMounted(async () => {
  try {
    generateUri();
    await loadScript('https://apis.google.com/js/api.js');
    loadGapi();
    await loadScript('https://accounts.google.com/gsi/client');
    loadGis();
  } catch (error) {
    console.error(error);
  }
});

</script>
