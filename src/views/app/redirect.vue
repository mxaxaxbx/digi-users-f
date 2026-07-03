<template>
  <div>
    <p v-if="loading">Loading...</p>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const loading = ref(false);

// Maps each supported app to the env var holding its base URL.
const APP_BASE_URLS: Record<string, string | undefined> = {
  edu: process.env.VUE_APP_URL_DG_EDU_APP,
  care: process.env.VUE_APP_URL_DG_CARE_APP,
  sky: process.env.VUE_APP_SKY_URL,
  atlas: process.env.VUE_APP_URL_DG_ATLAS_APP,
  fireweb: process.env.VUE_APP_URL_DG_FIREWEB_APP,
  subscriptions: process.env.VUE_APP_DG_APP_SUBS,
  inventory: process.env.VUE_APP_DG_APP_INVENTORY,
  utils: process.env.VUE_APP_UTILS_URL,
  calendar: process.env.VUE_APP_CALENDAR_URL,
  contextify: process.env.VUE_APP_CONTEXTIFY_URL,
  connect: process.env.VUE_APP_CONNECT_URL,
};

function switchApp() {
  const app = String(route.query.app ?? '');
  const rawRedirect = String(route.query.redirect ?? '');
  const redirect = rawRedirect.includes('/auth/confirmsession') ? '' : rawRedirect;

  const baseUrl = APP_BASE_URLS[app];

  if (!baseUrl) {
    console.log(`Invalid app specified in query: ${app}`);
    loading.value = false;
    router.push({ name: 'home' });
    return;
  }

  const token = localStorage.getItem('token');
  const params = new URLSearchParams({ token: token ?? '', redirect: String(redirect) });
  window.location.href = `${baseUrl}/auth/confirmsession?${params}`;
}

onMounted(() => {
  switchApp();
});
</script>
