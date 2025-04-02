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
    </form>
  </div>
</template>

<script setup lang="ts">
import {
  defineAsyncComponent,
  ref,
  onMounted,
} from 'vue';

const dgInput = defineAsyncComponent(() => import('@/components/global/dginput.vue'));

const projectName = ref('');

function generateRandomName() {
  const randomNumber = Math.floor(Math.random() * 10000);
  projectName.value = `My Project ${randomNumber}`;
}

onMounted(() => {
  generateRandomName();
});

</script>
