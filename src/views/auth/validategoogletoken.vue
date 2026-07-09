<template>
  <div
    class="
      flex flex-col justify-center items-center
      bg-[var(--bg)]
      w-full h-screen
      px-8
      text-[var(--text)]
    ">
    <!-- logo -->
    <img
      :src="isLight ? '/img/logo-digi-light.svg' : '/img/logo-digi.svg'"
      alt="Logo"
      class="h-7 mb-10" />

    <!-- validating state -->
    <template v-if="loading">
      <svg
        class="animate-spin mb-6"
        width="32" height="32" viewBox="0 0 86 86"
        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <!-- eslint-disable-next-line max-len -->
        <path d="M43 0C49.608 0 55.8671 1.49206 61.4609 4.15527C63.289 2.80154 65.5506 2 68 2C74.0751 2 79 6.92487 79 13C79 14.7395 78.5939 16.3835 77.875 17.8457C82.9856 24.9189 86 33.6068 86 43C86 66.7482 66.7482 86 43 86C19.2518 86 0 66.7482 0 43C0 19.2518 19.2518 0 43 0ZM43 8C23.67 8 8 23.67 8 43C8 62.33 23.67 78 43 78C62.33 78 78 62.33 78 43C78 35.685 75.7543 28.8952 71.917 23.2793C70.6999 23.7434 69.3801 24 68 24C61.9249 24 57 19.0751 57 13C57 12.3154 57.0659 11.6461 57.1855 10.9961C52.8493 9.07124 48.05 8 43 8ZM43 20C55.7025 20 66 30.2975 66 43C66 55.7025 55.7025 66 43 66C30.2975 66 20 55.7025 20 43C20 30.2975 30.2975 20 43 20Z"/>
      </svg>
      <p class="text-lg font-semibold">Validating your Google account…</p>
      <p class="text-sm text-[#7f7f7f] mt-1">This will only take a moment.</p>
    </template>

    <!-- error state (shown briefly before redirecting back to the provider) -->
    <template v-else>
      <img src="/icon/icon-alert.svg" alt="alert" class="w-8 h-8 mb-4" />
      <p class="text-lg font-semibold">We couldn't sign you in.</p>
      <p class="text-sm text-[#7f7f7f] mt-1">Redirecting you back to the sign in page…</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const route = useRoute();
const router = useRouter();

const loading = ref(true);

const isLight = computed(() => store.state.theme.theme === 'light');

// Send the user back to the provider page, preserving the context that
// provider.vue / loginwithgoogle.vue persisted in sessionStorage before
// handing off to Google.
function redirectToProvider() {
  const app = sessionStorage.getItem('app') ?? '';
  const redirect = sessionStorage.getItem('redirect') ?? '';

  router.replace({
    path: '/auth/provider',
    query: {
      ...(app ? { app } : {}),
      ...(redirect ? { redirect } : {}),
    },
  });
}

async function validateGoogleToken() {
  const code = typeof route.query.code === 'string' ? route.query.code : '';

  // No code in the callback URL (user denied access or a malformed redirect):
  // nothing to validate, send them back to pick a provider again.
  if (!code) {
    loading.value = false;
    redirectToProvider();
    return;
  }

  try {
    await store.dispatch('auth/validategoogletoken', code);
    // On success the action redirects via window.location, so we keep the
    // loading state visible until the browser navigates away.
  } catch (error: any) {
    console.error(error);
    const message = error.response?.data?.error || 'Failed to validate Google token';
    store.commit('notifications/addNotification', {
      type: 'error',
      message,
    });

    loading.value = false;
    redirectToProvider();
  }
}

onMounted(async () => {
  await validateGoogleToken();
});
</script>
