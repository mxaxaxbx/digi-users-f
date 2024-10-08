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
import { ref } from 'vue';

const notifications = ref(['hola', 'hola', 'hola']);
</script>
