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
      @update="update"
      @submit="submit"
    />
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
    label: 'Nombres',
    required: false,
    rules: 'min:3,max:50',
    error: '',
  },
  {
    name: 'lastName',
    value: '',
    type: 'text',
    label: 'Apellidos',
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
  switch (app) {
    case 'fireweb': {
      const { VUE_APP_URL_DG_FIREWEB_APP } = process.env;
      const url = `${VUE_APP_URL_DG_FIREWEB_APP}/auth/confirmsession?token=${token.value}&redirect=${redirect}`;
      window.location.href = url;
      break;
    }
    case 'edu': {
      const eduApp = process.env.VUE_APP_URL_DG_EDU_APP;
      window.location.href = `${eduApp}/auth/confirmsession?token=${token.value}&redirect=${redirect}`;
      break;
    }
    case 'care': {
      const careApp = process.env.VUE_APP_URL_DG_CARE_APP;
      window.location.href = `${careApp}/auth/confirmsession?token=${token.value}&redirect=${redirect}`;
      break;
    }
    case 'storage': {
      const storageApp = process.env.VUE_APP_URL_DG_STORAGE_APP;
      window.location.href = `${storageApp}/auth/confirmsession?token=${token.value}&redirect=${redirect}`;
      break;
    }
    case 'atlas': {
      const atlasApp = process.env.VUE_APP_URL_DG_ATLAS_APP;
      window.location.href = `${atlasApp}/auth/confirmsession?token=${token.value}&redirect=${redirect}`;
      break;
    }
    default:
      console.error('Invalid app');
      router.push('/');
  }
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
