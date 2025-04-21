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
  const { app, redirect } = route.query;
  if (!app) {
    return;
  }

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
    case 'storage': {
      const storageApp = process.env.VUE_APP_URL_DG_STORAGE_APP;
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
