<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <!-- Loading State -->
        <div v-if="loading" class="animate__animated animate__fadeIn">
          <i class="fas fa-spinner fa-spin text-4xl text-blue-600 mb-4"></i>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Validating Session</h2>
          <p class="text-gray-600">Please wait while we verify your credentials...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="hasError" class="animate__animated animate__fadeIn">
          <i class="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Validation Failed</h2>
          <p class="text-gray-600 mb-6">{{ errorMessage }}</p>

          <!-- Retry Button -->
          <button
            @click="retryValidation"
            class="
              group
              relative
              w-full
              flex justify-center
              py-3 px-4
              border border-transparent
              text-sm font-medium
              rounded-md text-white
              bg-blue-600
              hover:bg-blue-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              transition-colors duration-200 animate__animated animate__pulse animate__infinite
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <i
                class="
                  fas fa-redo-alt
                  text-blue-500
                  group-hover:text-blue-400
                  transition-colors duration-200
                "
              ></i>
            </span>
            Retry Validation
          </button>

          <!-- Alternative actions -->
          <div class="mt-4 space-y-2">
            <button
              @click="goHome"
              class="
                w-full
                flex justify-center
                py-2 px-4
                border border-gray-300
                text-sm font-medium
                rounded-md
                text-gray-700
                bg-white
                hover:bg-gray-50
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                transition-colors duration-200
              "
            >
              <i class="fas fa-home mr-2"></i>
              Go to Home
            </button>
          </div>
        </div>

        <!-- Success State (brief display before redirect) -->
        <div v-else class="animate__animated animate__fadeIn">
          <i class="fas fa-check-circle text-4xl text-green-500 mb-4"></i>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Session Validated</h2>
          <p class="text-gray-600">Redirecting you now...</p>
        </div>
      </div>

      <!-- Progress indicator -->
      <div v-if="loading" class="w-full bg-gray-200 rounded-full h-2">
        <div
          class="
            bg-blue-600
            h-2
            rounded-full
            animate__animated animate__pulse animate__infinite
          "
          style="width: 60%"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const route = useRoute();
const router = useRouter();
const loading = ref(false);
const hasError = ref(false);
const errorMessage = ref('');

async function validateSession() {
  loading.value = true;
  hasError.value = false;
  errorMessage.value = '';

  const token = typeof route.query.token === 'string' ? route.query.token : 'null';
  const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '';
  const app = typeof route.query.app === 'string' ? route.query.app : '';

  try {
    await store.dispatch('auth/loginWithToken', {
      token,
      app,
      redirect,
    });

    // Brief success display before redirect
    setTimeout(() => {
      // Handle redirect logic here based on your app's routing
    }, 1500);
  } catch (error: any) {
    console.log('error confirm session', error);
    hasError.value = true;
    errorMessage.value = error?.response?.data?.error || 'An error occurred trying to load session';

    store.commit('notifications/addNotification', {
      message: errorMessage.value,
    });
  } finally {
    loading.value = false;
  }
}

function retryValidation() {
  validateSession();
}

function goHome() {
  router.push('/');
}

onMounted(() => {
  validateSession();
});
</script>
