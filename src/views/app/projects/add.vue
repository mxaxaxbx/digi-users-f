<template>
  <div class="w-full bg-white">
    <div
      class="
        px-4 py-2
        text-lg font-semibold text-gray-700
        border-b border-gray-200
      "
    >
      New Project
    </div>
    <form @submit.prevent="submit" class="p-4">
      <label class="block mb-2 text-sm font-medium text-gray-700" for="projectName">
        Project Name
      </label>
      <dgInput v-model="projectName" name="projectName"/>
      <div class="flex items-center justify-end mt-4">
        <button
          type="submit"
          class="
            px-4 py-2
            text-sm font-medium text-white bg-pink-600
            rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500
          "
          :disabled="loading || !projectName"
        >
          <i v-if="loading" class="fa fa-spinner fa-spin mr-2"></i>
          Create Project
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {
  defineAsyncComponent,
  ref,
  onMounted,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const dgInput = defineAsyncComponent(() => import('@/components/global/dginput.vue'));

const router = useRouter();
const route = useRoute();
const store = useStore();

const projectName = ref('');
const loading = ref(false);

function generateRandomName() {
  const randomNumber = Math.floor(Math.random() * 10000);
  projectName.value = `My Project ${randomNumber}`;
}

async function submit() {
  loading.value = true;
  try {
    if (!projectName.value) {
      store.commit('notifications/addNotification', {
        message: 'Project name is required',
        type: 'error',
      });
      return;
    }
    await store.dispatch('projects/create', {
      name: projectName.value,
      app: route.query.app ? route.query.app : '',
    });

    store.commit('notifications/addNotification', {
      message: 'Creating project... Please wait a moment',
      type: 'warn',
    });

    router.push({
      path: '/app/redirect',
      query: {
        app: route.query.app ? route.query.app : '',
        redirect: route.query.redirect ? route.query.redirect : '',
      },
    });
  } catch (error: any) {
    const message = error?.response?.data?.message || 'An error occurred while creating the project';
    store.commit('notifications/addNotification', {
      message,
      type: 'error',
    });
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  generateRandomName();
});

</script>
