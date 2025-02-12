<template>
  <div class="bg-white p-5 rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold mb-5">Edit Profile</h1>
    <!-- line -->
    <div class="mb-5">
      <hr />
    </div>
    <Form
      :fields="fields"
      :loading="loading"
    />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

import { CustomFormStateI } from '@/store/custom-form/state';

const Form = defineAsyncComponent(() => import('@/components/global/customform.vue'));

const loading = ref(false);
const fields = ref<CustomFormStateI[]>([
  {
    name: 'username',
    value: '',
    type: 'text',
    label: 'Username',
    required: true,
    rules: 'min:3,max:50',
  },
  {
    name: 'firstName',
    value: '',
    type: 'text',
    label: 'First Name',
    required: true,
    rules: 'min:3,max:50',
  },
]);

</script>
