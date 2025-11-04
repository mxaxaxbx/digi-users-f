<template>
  <div class="flex flex-row h-screen">
  <div
    class="
      flex flex-col
      justify-start items-start
      font-alexandria
      bg-[#252525]
      w-[750px]
      h-full
      border-r border-[#3a3a3a]
      shadow-md
      my-auto
      py-4
      px-8
    "
  >
    <!-- form -->
    <div
      class="
      flex flex-col justify-left items-left
      mx-auto
      my-auto
      w-[400px]
      ">
      <h1 class=" text-white text-[2rem] font-bold mb-2"> Iniciar sesión </h1>
      <form class="" @submit.prevent="toCheckCode">
        <div>
          <label
            for="email"
            class="
              flex items-left justify-left
              text-sm text-[#7f7f7f]
              mb-1 ml-4
              font-semibold
              "
          >
            Email
          </label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="
              w-[400px]
              bg-[#252525]
              py-2 px-4 mb-6
              text-white
              rounded-full border border-[#3d3d3d]
              hover:border-[#9CA3AF] hover:bg-[#2a2a2a]
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
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
              text-sm font-medium text-white
              bg-pink-500
              rounded-full
              hover:ring-2 hover:ring-pink-400 hover:border-pink-500 hover:text-white
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
