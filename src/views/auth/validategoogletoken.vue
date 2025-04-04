<template>
  validate google token
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const loading = ref(false);

async function validateGoogleToken() {
  const { code } = route.query;
  loading.value = true;

  try {
    await store.dispatch('auth/validategoogletoken', code as string);
  } catch (error: any) {
    console.error(error);
    const message = error.response?.data?.error || 'Failed to validate Google token';
    store.commit('notifications/addNotification', {
      type: 'error',
      message,
    });
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  await validateGoogleToken();
});
</script>
