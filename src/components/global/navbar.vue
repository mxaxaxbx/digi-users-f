<template>
  <nav
    class="
      w-100
      bg-gray-300
      p-4
      flex items-center space-x-2
    "
  >
    <button>
      <i class="fas fa-bars"></i>
    </button>
    <router-link to="/" class="text-2xl font-bold text-gray-800">
      digi
    </router-link>
    <div class="shrink w-5/6"></div>
    <router-link to="/auth/login" class="text-gray-800">
      <i class="fas fa-user" aria-hidden="true"></i>
      <span class="sr-only">User Profile</span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { VUE_APP_ENV } = process.env;
const VUE_APP_DIGI_USERS_F = process.env[`VUE_APP_DIGI_USERS_F_${VUE_APP_ENV}`];

const usersLink = ref(`${VUE_APP_DIGI_USERS_F}/auth/login?app=edu`);
</script>
