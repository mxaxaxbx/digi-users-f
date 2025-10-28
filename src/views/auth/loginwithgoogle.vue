<template>
  <div class="bg-white p-4 shadow-lg rounded-lg">
    <h1 class="text-2xl font-bold">Login with Google</h1>
    <!-- line -->
    <hr class="my-3 border-gray-300 w-full border-2" />
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
