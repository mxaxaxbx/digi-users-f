<template>
  <nav
    class="
      font-alexandria
      bg-[#1d1d1d] text-white
      w-full h-16
      px-8 pt-1
      border-b border-[#3d3d3d]
    "
  >
  <!--
    <button @click="toggleSidebar">
      <i class="fas fa-bars"></i>
    </button> -->

    <div class="flex items-center justify-between h-full">
      <div class="flex space-x-8">
        <router-link
          :to="isAuth ? '/app' : '/'"
          class="text-red-600"
        >
          <img
            src="https:///assets.digiapps.com.co/logo.png"
            alt="Logo"
            class="
            h-[25px]
            courser-pointer"
          />
        </router-link>
      </div>
<div class="flex items-center space-x-6">
        <!--dropdown-->
    <Dropdown v-if="isAuthenticated">
      <template #trigger="{ toggle }">
        <button
          @click="toggle"
          class="
                relative
                flex items-center justify-center
                bg-[#FF3374]
                rounded-full
                text-white
                h-8
                w-8
                hover:ring-4 hover:ring-[#FF3374]/50
                focus:ring-4 focus:ring-[#FF3374]/50
                transition-all duration-300 ease-in-out
              "
            >
          <!-- User initials -->
          <span
            v-if="user.firstName && user.lastName"
            class="font-thin text-sm uppercase"
          >
            {{ user.firstName.charAt(0) }}{{ user.lastName.charAt(0) }}
          </span>

          <img
              v-else-if="user.profilePhoto"
              :src="user.profilePhoto"
              alt="User profile photo"
              class="h-8 rounded-full object-cover"
            />

            <!-- Fallback icon -->
            <i
              v-else
              class="fas fa-user text-white text-sm"
              aria-hidden="true"
            ></i>

              <!-- Optional status indicator -->
              <span
                class="
                  absolute
                  bottom-0 right-[-2px]
                  block
                  h-[12px] w-[12px]
                  rounded-full
                  bg-green-500
                  border-2 border-[#1d1d1d]
                "
              ></span>
            </button>
          </template>

      <template #content="{}">
        <!-- Avatar, email, user name -->
        <div class="flex flex-col items-center mb-10">
              <div class="relative --w-16 --h-16">
                <img
                  :src="user.profilePhoto || '/img/user.svg'"
                  alt="Avatar"
                  class="
                    rounded-full
                    w-20 h-20
                    border-2 border-white
                    object-cover border"
                />
              </div>

              <h2 class="mt-4 text-lg font-semibold text-white">¡Hi,
                {{ user.firstName }} {{ user.lastName }}!
              </h2>

              <!-- Email -->
              <div class="text-center mt-0">
                <p class="text-[#7f7f7f] text-xs font-thin">
                  {{ user.email }}
                </p>
              </div>

          <!-- Manage Account Button -->
          <a
                :href="`${usersLink}/app/users/edit-profile`"
                class="
                bg-[#1d1d1d]
                  text-white text-xs font-thin text-center
                  border border-[#FF3374] rounded-full
                  px-auto py-[10px] mt-6
                  w-60
                  hover:bg-[#FF3374]
                  transition ease-in duration-150
                "
              >
                Manage your digi Account
              </a>
            </div>

            <div class="flex flex-col items-start mx-8 mb-6">
              <!-- community -->
              <h1 class="text-xs font-regular ml-4 text-[#3d3d3d] mb-2">Community</h1>

              <a
                href="https://discord.com/invite/UsGXbTkJSE"
                target="_blank"
                class="
                  flex items-center justify-between
                  w-60 px-4 py-2
                  rounded-full border border-[#3d3d3d]
                  bg-[#252525] text-white
                  font-medium text-sm
                  transition-all duration-300
                  hover:border-[#BEBEBE] hover:bg-[#2a2a2a]
                "
              >
                <div class="flex items-center gap-2">
                  <img
                    src="/icon/icon-discordd.svg"
                    alt="Discord"
                    class="h-4 mx-1"
                  />
                  <span>Discord</span>
                </div>
                <img
                  src="/icon/icon-outPage.svg"
                  alt="External link"
                  class="w-[20px]"
                />
              </a>
            </div>
            <div class="flex flex-col items-start mx-8 mb-6">
              <!-- Support -->
              <h1 class="text-xs font-regular ml-4 text-[#3d3d3d] mb-2">Support</h1>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@digiapps.com.co"
                target="_blank"
                class="
                  flex items-center justify-between
                  w-60 px-4 py-2
                  rounded-full border border-[#3d3d3d]
                  bg-[#252525] text-white
                  font-medium text-[13px]
                  transition-all duration-300
                  hover:border-[#BEBEBE] hover:bg-[#2a2a2a]
                "
              >
                <div class="flex items-center gap-2">
                  <img
                    src="/icon/icon-mail.svg"
                    alt="mail"
                    class="h-4 mx-1"
                  />
                  <span>support@digiapps.com.co</span>
                </div>
              </a>
            </div>

            <!-- Actions -->
            <div class="flex flex-col items-center space-y-2 mt-12">
              <button
                @click="logout"
                class="
                  flex items-center justify-around
                  bg-[#FF3374]
                  w-44
                  rounded-full
                  px-4 py-2
                  text-sm font-regular
                  hover:ring-4 hover:ring-[#FF3374]/50
                  transition-all duration-300 ease-in-out

                "
              >
                <span class="flex items-center space-x-2">
                  <span>Sign out</span>
                  <img src="/icon/icon-logOut.svg"
                  alt="icon"
                  class="ml-2 w-[20px]"/>
                </span>
              </button>
            </div>

            <!-- Footer -->
            <div
              class="flex justify-around mt-8 text-[10px] text-[#3d3d3d] px-16"
            >
              <a
              :href="`${usersLink}/privacy-policy`"
              target="_blank"
              class="hover:underline hover:text-[#bebebe]"
              >
                Terms of Service</a>
                <span>•</span>
              <a
                :href="`${usersLink}/privacy-policy`"
                target="_blank"
                class="hover:underline hover:text-[#bebebe]"
              >
                Privacy Policy
              </a>
            </div>
          </template>
        </Dropdown>
    <router-link v-else to="/auth/login" class="
            flex items-center
            bg-[#2a2a2a]
            border border-[#3d3d3d]
            rounded-full
            py-4 px-6
            h-8
            text-white text-sm font-regular
            hover:border-[#FF3374] hover:bg-[#FF3374]
            hover:ring-4 hover:ring-[#FF3374]/50
            transition ease-in duration-150
            ">
            Sign In
            <img src="/icon/icon-signIn.svg"
                  alt="icon"
                  class="ml-2 w-[20px]"/>
    </router-link>
     <!--Login-->
    </div>
  </div>
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
