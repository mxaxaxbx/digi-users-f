<template>
  <nav
    class="
      font-alexandria font-sans
      bg-[var(--bg)] mt-2
      border-b border-[var(--border)]
      w-full h-10 items-end
      px-2

      sm:px-4
    ">
    <div class="flex items-center justify-between h-full">
      <div class="flex space-x-8">
        <router-link
          :to="isAuth ? '/app' : '/'"
          class="text-red-600"
          @click="scrollTop"
        >
          <img
            :src="isLight
            ? '/img/logo-digi-light.svg'
            : '/img/logo-digi.svg'"
            alt="Logo"
            class="h-5 courser-pointer"
          />
        </router-link>
      </div>

      <div class="flex items-center gap-4 ml-auto">
      <a v-if="!isAuthenticated"
        href="/auth/provider?app=digi-users"
        class="
          flex items-center justify-center
          bg-[var(--bg-secondary)]
          border border-[var(--color-primary)]
          text-[var(--color-primary)] text-sm font-regular
          pl-3 pr-2
          rounded-full

          hover:bg-[var(--hover-bg)]
          hover:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]
          focus:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]
          transition-all duration-300 ease-in-out
        ">
          Sign In
        <img src="/icon/icon-signIn-color.svg"
          alt="icon"
          class="ml-1 h-4"/>
      </a>
        <!--dropdown-->
        <Dropdown v-if="isAuthenticated">
          <template #trigger="{ toggle }">
            <button
              @click="toggle"
                class="
                  relative flex items-center justify-center
                  bg-[var(--color-primary)]
                  h-6 w-6
                  mr-0
                  rounded-full
                  text-white

                  hover:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]
                  focus:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]
                  transition-all duration-300 ease-in-out
                ">
              <!-- User initials -->
              <span
                v-if="user.firstName && user.lastName"
                class="font-light text-sm uppercase"
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
                <span class="
                  absolute
                  bottom-[-1.5px] right-[-3.5px]
                  block
                  h-[10px] w-[10px]
                  rounded-full
                  bg-green-500
                  border-2 border-[var(--bg)]
                "></span>
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
                        object-cover border
                    "/>
                  </div>

                  <h2 class="mt-4 text-lg font-semibold text-[var(--text)]">¡Hi,
                    {{ user.firstName }} {{ user.lastName }}!
                  </h2>

                  <!-- Email -->
                  <div class="text-center mt-0">
                    <p class="text-[#a3a3a3] text-xs font-light">
                      {{ user.email }}
                    </p>
                  </div>

              <!-- Manage Account Button -->
              <a href="/app/users/edit-profile"
                class="
                  bg-[var(--bg-secondary)]
                  border border-[var(--color-primary)]
                  rounded-full
                  w-48 px-auto py-1 mt-6
                  text-[var(--color-primary)] text-xs text-center font-medium

                  hover:bg-[var(--hover-bg)]
                  hover:text-[var(--text)]
                  hover:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]
                  focus:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]
                  transition-all duration-300 ease-in-out"
                target="_blank">
                Manage your digi Account
                  </a>
                </div>

                <div class="flex flex-col items-center mx-8 mb-6">
                  <!-- community -->
                  <h1 class="text-xs font-regular ml-5 sm:ml-8 text-[#3d3d3d] mb-2 self-start
                      ">Community
                  </h1>

                  <a
                    href="https://discord.com/invite/UsGXbTkJSE"
                    target="_blank"
                    class="
                      flex items-center justify-between
                      w-72 px-2 py-2
                      bg-[var(--bg-secondary)]
                      border border-[var(--border)]
                      rounded-full
                      text-[#868686] font-regular text-sm

                      sm:w-52 sm:text-xs sm:py-1

                      hover:bg-[var(--hover-bg)] hover:border-[var(--hover-border)]
                      hover:shadow-[0_0_2px_1px_rgba(248,59,102,0.5)]
                      focus:shadow-[0_0_2px_1px_rgba(248,59,102,0.5)]
                      transition-colors duration-300
                    ">
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
                      class="h-4"
                    />
                  </a>
                </div>
                <div class="flex flex-col items-center mx-8 mb-6">
                  <!-- Support -->
                  <h1 class="text-xs font-regular ml-5 sm:ml-8 text-[#3d3d3d] mb-2 self-start
                      ">Support
                  </h1>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=support@digiapps.com.co"
                    target="_blank"
                    class="
                      flex items-center justify-between
                      w-72 px-2 py-2
                      bg-[var(--bg-secondary)]
                      border border-[var(--border)]
                      rounded-full
                      text-[#868686] font-regular text-sm

                      sm:w-52 sm:text-xs sm:py-1

                      hover:bg-[var(--hover-bg)] hover:border-[var(--hover-border)]
                      hover:shadow-[0_0_2px_1px_rgba(248,59,102,0.5)]
                      focus:shadow-[0_0_2px_1px_rgba(248,59,102,0.5)]
                      transition-colors duration-300
                    ">
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
                      bg-[var(--color-primary)]
                      w-36
                      rounded-full
                      py-1
                      text-sm text-white font-regular

                      hover:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]
                      focus:shadow-[0_0_3px_3px_rgba(248,59,102,0.5)]
                      transition-all duration-300 ease-in-out
                    ">
                    <span class="flex items-center space-x-2">
                      <span>Sign out</span>
                      <img src="/icon/icon-logOut.svg"
                      alt="icon"
                      class="ml-2 h-4"/>
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
    </div>
  </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
import { UserI } from '@/store/auth/state';

const loading = ref(false);

const Dropdown = defineAsyncComponent(() => import('@/components/global/dropdown.vue'));

const store = useStore();

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const isAuthenticated = computed<boolean>(() => store.getters['auth/isAuthenticated']);
const user = computed<UserI>(() => store.getters['auth/user']);
const isLight = computed(() => store.state.theme.theme === 'light');

const toggleTheme = () => {
  store.dispatch('theme/toggleTheme');
  const newTheme = store.state.theme.theme;

  document.documentElement.classList.toggle('light', newTheme === 'light');
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

function toggleSidebar() {
  store.commit('toggleSidebar');
}
</script>
