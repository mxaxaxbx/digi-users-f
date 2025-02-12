<template>
  <div class="bg-white p-5 rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold mb-5">Edit Profile</h1>
    <!-- line -->
    <div class="mb-5">
      <hr />
    </div>
    {{ user }}
    <Form
      :fields="fields"
      :loading="loading"
    />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';

import { CustomFormStateI } from '@/store/custom-form/state';
import { UserI } from '@/store/auth/state';

const Form = defineAsyncComponent(() => import('@/components/global/customform.vue'));

const store = useStore();

const user = computed<UserI>(() => store.getters['auth/user']);

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
  {
    name: 'lastName',
    value: '',
    type: 'text',
    label: 'Last Name',
    required: true,
    rules: 'min:3,max:50',
  },
]);

</script>
