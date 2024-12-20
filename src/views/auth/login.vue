<template>
  <div class="bg-white p-4">
    <h3 class="text-3xl font-bold text-center mt-8"> Iniciar sesión </h3>
    <!-- form -->
    <div class="container mx-auto max-w-md">
      <form class="mt-8" @submit.prevent="toCheckCode">
        <div class="mb-4">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700"
          >
            Correo electrónico
          </label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="
              mt-1 px-3 py-2
              block
              w-full
              border border-gray-300
              rounded-md shadow-sm
              focus:outline-none focus:ring-pink-500 focus:border-pink-500
              sm:text-sm
            "
          />
        </div>
        <div class="mb-4">
          <button
            type="submit"
            class="
              w-full
              flex justify-center
              py-2 px-4
              border border-transparent
              rounded-md shadow-sm
              text-sm font-medium text-white
              bg-pink-600
              hover:bg-pink-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
            "
            :disabled="loading"
          >
            <i v-if="loading" class="fas fa-spinner animate-spin mr-2"></i>
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const store = useStore();

const email = ref('');
const loading = ref(false);

async function toCheckCode() {
  try {
    if (!email.value) {
      return;
    }

    loading.value = true;

    await store.dispatch('auth/sendcode', {
      email: email.value,
    });

    router.push({
      path: '/auth/check-code',
      query: {
        email: email.value,
        app: route.query.app,
      },
    });
  } catch (error: any) {
    console.error(error);
    const message = error?.response?.data?.error || 'Ocurrió un error al enviar el código';
    store.commit('notifications/addNotification', {
      type: 'error',
      message,
    });
  } finally {
    loading.value = false;
  }
}

</script>
