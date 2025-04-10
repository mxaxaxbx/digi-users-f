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

const SCOPES = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/cloud-platform';

const route = useRoute();
const uriquery = ref<string>('');

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

  const { app, redirect } = route.query;
  sessionStorage.setItem('app', app as string);
  sessionStorage.setItem('redirect', redirect as string);
}

onMounted(async () => {
  try {
    generateUri();
  } catch (error) {
    console.error(error);
  }
});

</script>
