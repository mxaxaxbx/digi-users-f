<template>
  <div
    class="
      fixed
      top-0
      right-0
      z-50
      p-4
      w-96
      bg-white bg-opacity-90
    "
  >
    <component :is="MyComponent" />
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="
        p-2
        bg-blue-100
        border-l-4 border-blue-500
        shadow
        mb-2
      "
    >
      <p class="text-sm text-blue-800">{{ notification }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue';

const notifications = ref(['hola', 'hola', 'hola']);
const MyComponent = ref<any>(null);

onMounted(async () => {
  try {
    const response = await fetch('https://us-east1-digi-io.cloudfunctions.net/mf-test');
    const componentCode = await response.text();

    // dynamically load the component
    // eslint-disable-next-line arrow-body-style
    MyComponent.value = defineAsyncComponent(() => {
      return new Promise((resolve) => {
        // eslint-disable-next-line no-eval
        const component = eval(componentCode);
        resolve(component);
      });
    });
  } catch (error) {
    console.error(error);
  }
});
</script>
