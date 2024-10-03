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
              focus:outline-none focus:ring-blue-500 focus:border-blue-500
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
              bg-blue-600
              hover:bg-blue-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            "
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');

function toCheckCode() {
  if (!email.value) {
    return;
  }
  router.push({
    path: '/auth/check-code',
    query: { email: email.value },
  });
}
</script>
