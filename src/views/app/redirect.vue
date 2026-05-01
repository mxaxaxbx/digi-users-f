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

function switchApp() {
  const { app } = route.query;
  let { redirect } = route.query;

  redirect = redirect && redirect.includes('/auth/confirmsession') ? '' : redirect;

  const token = localStorage.getItem('token');

  switch (app) {
    case 'edu': {
      const eduApp = process.env.VUE_APP_URL_DG_EDU_APP;
      window.location.href = `${eduApp}/auth/confirmsession?token=${token}&redirect=${redirect}`;
      break;
    }
    case 'care': {
      const careApp = process.env.VUE_APP_URL_DG_CARE_APP;
      window.location.href = `${careApp}/auth/confirmsession?token=${token}&redirect=${redirect}`;
      break;
    }
    case 'sky': {
      const storageApp = process.env.VUE_APP_SKY_URL;
      window.location.href = `${storageApp}/auth/confirmsession?token=${token}&redirect=${redirect}`;
      break;
    }
    case 'atlas': {
      const atlasApp = process.env.VUE_APP_URL_DG_ATLAS_APP;
      window.location.href = `${atlasApp}/auth/confirmsession?token=${token}&redirect=${redirect}`;
      break;
    }
    case 'fireweb': {
      const uri = `auth/confirmsession?token=${token}&redirect=${redirect}`;
      const { VUE_APP_URL_DG_FIREWEB_APP } = process.env;
      const url = `${VUE_APP_URL_DG_FIREWEB_APP}/${uri}`;
      window.location.href = url;
      break;
    }
    case 'subscriptions': {
      const uri = `auth/confirmsession?token=${token}&redirect=${redirect}`;
      const { VUE_APP_DG_APP_SUBS } = process.env;
      const url = `${VUE_APP_DG_APP_SUBS}/${uri}`;
      window.location.href = url;
      break;
    }
    case 'inventory': {
      const uri = `auth/confirmsession?token=${token}&redirect=${redirect}`;
      const { VUE_APP_DG_APP_INVENTORY } = process.env;
      const url = `${VUE_APP_DG_APP_INVENTORY}/${uri}`;
      window.location.href = url;
      break;
    }
    case 'utils': {
      const uri = `auth/confirmsession?token=${token}&redirect=${redirect}`;
      const { VUE_APP_UTILS_URL } = process.env;
      const url = `${VUE_APP_UTILS_URL}/${uri}`;
      window.location.href = url;
      break;
    }
    case 'calendar': {
      const uri = `auth/confirmsession?token=${token}&redirect=${redirect}`;
      const { VUE_APP_CALENDAR_URL } = process.env;
      const url = `${VUE_APP_CALENDAR_URL}/${uri}`;
      window.location.href = url;
      break;
    }
    case 'contextify': {
      const uri = `auth/confirmsession?token=${token}&redirect=${redirect}`;
      const { VUE_APP_CONTEXTIFY_URL } = process.env;
      const url = `${VUE_APP_CONTEXTIFY_URL}/${uri}`;
      window.location.href = url;
      break;
    }
    default:
      console.log(`Invalid app specified in query: ${app}`);
      loading.value = false;
      router.push({ name: 'home' });
      break;
  }
}

onMounted(() => {
  switchApp();
});
</script>
