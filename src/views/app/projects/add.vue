<template>
  holis {{ projectName }}
  <dgInput v-model="projectName"/>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

const dgInput = defineAsyncComponent(() => import('@/components/global/dginput.vue'));

const projectName = ref('');

</script>
