<template>
  <nav
    class="
      w-100
      bg-gray-300
      p-4
      flex items-center space-x-4
    "
  >
    <button>
      <i class="fas fa-bars"></i>
    </button>
    <router-link to="/" class="text-2xl font-bold text-pink-600">
      digi
    </router-link>
    <div class="shrink w-5/6"></div>

    <Dropdown
      v-if="isAuthenticated"
      :content="dropdownContent"
      :options="dropdownOptions"
      :loading="loading"
      @action="handleAction"
    />
    <router-link v-else to="/auth/login" class="text-gray-800">
      <i class="fas fa-user" aria-hidden="true"></i>
      <span class="sr-only">User Profile</span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';

import { UserI } from '@/store/auth/state';

interface Options {
  content: string;
  action: string;
}

const Dropdown = defineAsyncComponent(() => import('@/components/global/dropdown.vue'));

const store = useStore();

const isAuthenticated = computed<boolean>(() => store.getters['auth/isAuthenticated']);
const user = computed<UserI>(() => store.getters['auth/user']);

const showUserMenu = ref(false);
const loading = ref(false);
const dropdownOptions: Options[] = [
  { content: 'cerrar sesión', action: 'logout' },
];
const dropdownContent = ref<string>(user.value ? `
  <span>
    ${user.value.firstName.charAt(0)}
    ${user.value.lastName.charAt(0)}
  </span>
` : `
  <i class="fas fa-user" aria-hidden="true"></i>
  <span class="sr-only">User Profile</span>
`);

const closeOnClickOutside = () => {
  showUserMenu.value = false;
};

function logout() {
  store.dispatch('auth/logout');
}

function handleAction(action: string) {
  switch (action) {
    case 'logout':
      logout();
      break;
    default:
      break;
  }
}
</script>
