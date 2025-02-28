<template>
  <div>
    <p v-if="loading">Loading...</p>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const loading = ref(false);

function switchApp() {
  const { app, redirect } = route.query;
  if (!app) {
    return;
  }

  const token = localStorage.getItem('token');

  loading.value = true;
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
    default:
      break;
  }
}

onMounted(() => {
  switchApp();
});
</script>
