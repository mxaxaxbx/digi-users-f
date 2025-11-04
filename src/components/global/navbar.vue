<template>
  <nav
    class="
      flex items-center space-x-4
      font-alexandria
      bg-[#1d1d1d] text-white
      w-full h-20
      px-8
      border-b border-[#3a3a3a]
    "
  >
    <button @click="toggleSidebar">
      <i class="fas fa-bars"></i>
    </button>
    <router-link to="/" class="text-2xl font-bold text-pink-600">
      <img
        src="https:///assets.digiapps.com.co/logo.png"
        alt="Logo"
        class="w-20 h-8"
      />
    </router-link>
    <div class="shrink w-5/6"></div>

    <Dropdown v-if="isAuthenticated">
      <template #trigger="{ toggle }">
        <button
          @click="toggle"
          class="
            relative
            flex items-center justify-center
            rounded-full
            bg-gray-600 text-gray-700
            hover:bg-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition-all duration-150 h-10 w-10
          "
        >
          <!-- User initials -->
          <span
            v-if="user.firstName && user.lastName"
            class="font-semibold text-sm uppercase"
          >
            {{ user.firstName.charAt(0) }}{{ user.lastName.charAt(0) }}
          </span>

          <!-- Fallback icon -->
          <i
            v-else
            class="fas fa-user text-[#7f7f7f] text-lg"
            aria-hidden="true"
          ></i>

          <!-- Optional status indicator -->
          <span
            class="
              absolute
              bottom-0 right-0
              block
              h-2.5 w-2.5
              rounded-full
              bg-green-500
              border-2 border-white
            "
          ></span>
        </button>
      </template>

      <template #content="{}">
        <!-- Avatar, email, user name -->
        <div class="flex flex-col items-center">
          <div class="relative --w-16 --h-16">
            <!-- <img
              src="https://via.placeholder.com/64"
              alt="Avatar"
              class="rounded-full w-full h-full object-cover border"
            /> -->
            <div
              class="absolute bottom-0 right-0 bg-gray-100 p-1 rounded-full border"
            >
            </div>
          </div>

          <h2 class="mt-2 text-lg font-bold text-gray-800">
            {{ user.firstName }} {{ user.lastName }}
          </h2>

          <!-- Email -->
          <div class="text-center mt-2">
            <p class="text-gray-500 text-sm mb-2">
              {{ user.email }}
            </p>
          </div>

          <!-- Manage Account Button -->
          <router-link
            to="/app/users/edit-profile"
            class="
              mt-2 text-[#3a3a3a]
              border border-gray-300 rounded-full
              px-4 py-1
              text-sm
              hover:bg-gray-50 transition
            "
          >
            Manage your digi Account
          </router-link>
        </div>

        <!-- Divider -->
        <hr class="my-4" />

        <!-- Actions -->
        <div class="flex flex-col space-y-2">
          <button
            @click="handleAction('logout')"
            class="
              flex items-center justify-around
              w-full
              rounded-lg
              px-4 py-2
              hover:bg-gray-100 transition
              text-sm
            "
          >
            <span class="flex items-center space-x-2">
              <i class="fas fa-sign-out-alt"></i>
              <span>Sign out</span>
            </span>
          </button>
        </div>

        <!-- Footer -->
        <div
          class="flex justify-around mt-4 text-xs text-gray-500 px-20"
        >
          <router-link to="/privacy-policy" class="hover:underline">Privacy Policy</router-link>
          <span> | </span>
          <a href="#" class="hover:underline">Terms of Service</a>
        </div>
      </template>
    </Dropdown>
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

const Dropdown = defineAsyncComponent(() => import('@/components/global/dropdown.vue'));

const store = useStore();

const isAuthenticated = computed<boolean>(() => store.getters['auth/isAuthenticated']);
const user = computed<UserI>(() => store.getters['auth/user']);

const loading = ref(false);

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

function toggleSidebar() {
  store.commit('toggleSidebar');
}
</script>
