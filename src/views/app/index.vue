<template>
  <div>
    <h1>App</h1>
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
  const app = route.query.app as string;
  if (!app) {
    return;
  }

  const token = localStorage.getItem('token');

  loading.value = true;
  switch (app) {
    case 'edu': {
      const eduApp = process.env.VUE_APP_URL_DG_EDU_APP;
      window.location.href = `${eduApp}/auth/confirmsession?token=${token}`;
      break;
    }
    case 'care': {
      const careApp = process.env.VUE_APP_URL_DG_CARE_APP;
      window.location.href = `${careApp}/auth/confirmsession?token=${token}`;
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
