<template>
  <div class="
        container px-4 py-16 sm:w-[50%] flex flex-col justify-between
        mx-auto font-sans
      ">
      <div class="flex items-center">
        <button
          type="button"
          @click="$router.back()"
          class="
            text-[var(--text)] opacity-30
            hover:opacity-80
            focus:outline-none focus:text-gray-400
          ">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h1 class="text:xl sm:text-2xl font-semibold text-[var(--text)] ml-4">Preferences</h1>
      </div>

      <!--form-->
      <div
        class="
          my-4 sm:my-10
          bg-[var(--bg-secondary)]
          border border-[var(--border)] rounded-lg
        ">
        <h3 class="font-semibold text-[var(--text)] text-lg border-b border-[var(--border)] px-4 py-2 sm:px-8 sm:py-4">Perfil Information</h3>
        <Form
          :fields="fields"
          :loading="loading"
          @update="update"
          @submit="submit"
          class=""
        />
        </div>
      </div>
</template>

<script setup lang="ts">
import {
  defineAsyncComponent,
  ref,
  computed,
  onMounted,
} from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

import { CustomFormStateI } from '@/store/custom-form/state';
import { UserI } from '@/store/auth/state';

const Form = defineAsyncComponent(() => import('@/components/global/customform.vue'));

const store = useStore();
const route = useRoute();
const router = useRouter();

const user = computed<UserI>(() => store.getters['auth/user']);
const token = computed<string>(() => store.getters['auth/token']);

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
    label: 'Fisrt name',
    required: false,
    rules: 'min:3,max:50',
    error: '',
  },
  {
    name: 'lastName',
    value: '',
    type: 'text',
    label: 'Last name',
    required: true,
    rules: 'min:3,max:50',
    error: '',
  },
]);

async function getUser() {
  try {
    loading.value = true;
    await store.dispatch('auth/getUser');

    fields.value.forEach((field: CustomFormStateI) => {
      // eslint-disable-next-line no-param-reassign
      field.value = (user.value as any)[field.name];
    });
  } catch (error: any) {
    console.log(error);
    const message = error.response?.data?.error || 'Failed to get user';
    store.commit('notifications/addNotification', {
      type: 'error',
      message,
    });
  } finally {
    loading.value = false;
  }
}

function update(updatedField: CustomFormStateI) {
  const field = fields.value.find((f) => f.name === updatedField.name);
  if (!field) return;

  field.value = updatedField.value;
  field.error = updatedField.error;
}

function redirectToApp() {
  const { app, redirect } = route.query;
  router.push({
    path: '/app/redirect',
    query: {
      app,
      redirect,
    },
  });
}

async function submit() {
  // check if there are errors
  const hasErrors = fields.value.some((field) => field.error);
  if (hasErrors) return;

  try {
    loading.value = true;
    const data = fields.value.reduce((acc, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {} as Record<string, any>);

    await store.dispatch('auth/updateuserdata', data);
    store.commit('notifications/addNotification', {
      type: 'success',
      message: 'Profile updated successfully',
    });

    const { app } = route.query;
    if (app) {
      redirectToApp();
      return;
    }

    router.push('/app');
  } catch (error: any) {
    console.log(error);
    const message = error.response?.data?.error || 'Failed to update profile';
    store.commit('notifications/addNotification', {
      type: 'error',
      message,
    });
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  getUser();
});

</script>
