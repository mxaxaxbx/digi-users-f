<template>
  <div class="bg-[var(--bg)] font-sans w-full">
    <!-- notifications -->
    <Notifications />
    <!-- Dark overlay -->
    <div
      v-if="showSidebar"
      class="fixed inset-0 bg-black opacity-50 z-30"
      @click="toggleSidebar"
      @keydown="toggleSidebar"
    ></div>
    <!-- menu -->
    <div
      v-if="shouldShowNavbar"
      v-click-outside="clickOutside"
      class="
        w-full fixed
        z-40
        -mt-2
        mb-8
      "
    >
      <NavBar/>
      <Sidebar/>
    </div>
    <!-- content -->
    <div
      class="min-h-[calc(100vh-4rem)]"
      :class="{
        'pt-16': shouldShowNavbar
      }"
    >
      <router-view :key="$route.fullPath" />
    </div>
    <!-- footer -->
    <footer
      v-if="shouldShowFooter"
      class="bg-[var(--bg)] group mt-20">
        <div class="w-full h-px bg-line"></div>
        <div
          class="
            container
            mx-auto px-12
            text-center

            sm:px-24
          ">
          <div
            class="
              flex flex-col
              justify-between
              w-full
              py-16 mb-8

              sm:flex-row sm:items-start
            ">
            <router-link
              :to="isAuth ? '/app' : '/'"
              class="mb-10 sm:mb-0
              ">
              <img
                :src="isLight
                ? '/img/logo-digi-light.svg'
                : '/img/logo-digi.svg'"
                alt="Logo"
                class="
                  h-6 opacity-30
                  group-hover:opacity-100
                  courser-pointer
                "/>
            </router-link>
            <div
              class="
                flex space-x-12
                mr-0
                opacity-30
                group-hover:opacity-100
                transition-all duration-500 ease-in-out

                sm:mr-20 sm:mx-0
                sm:space-x-20
              ">
              <div class="text-left">
                <h3 class="text-sm text-[var(--text)] font-regular mb-4">Products</h3>
                <ul
                  class="
                    space-y-2
                    text-xs text-[var(--text)] font-light
                    pl-1
                  ">
                  <li><a
                    href="#"
                    class="
                      opacity-50 hover:opacity-100
                      transition-all duration-300 ease-in-out
                    ">Sky
                  </a></li>
                  <li><a
                    href="https://fireweb.digiapps.com.co/"
                    class="
                      opacity-50 hover:opacity-100
                      transition-all duration-300 ease-in-out
                    ">Fireweb
                  </a></li>
                  <li><a
                    href="#"
                    class="
                      opacity-50 hover:opacity-100
                      transition-all duration-300 ease-in-out
                    ">DigiCare
                  </a></li>
                </ul>
              </div>
              <div class="text-left">
                <h3 class="text-sm text-[var(--text)] font-regular mb-4">Contact Us</h3>
                <ul
                  class="
                    space-y-2
                    text-xs text-[var(--text)] font-light
                    pl-1
                  ">
                  <li><a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=support@digiapps.com.co"
                    target="_blank"
                    class="
                      opacity-50 hover:opacity-100
                      transition-all duration-300 ease-in-out
                    ">Help Center
                  </a></li>
                  <li><a
                    href="https://discord.gg/UsGXbTkJSE"
                    target="_blank"
                    class="
                      opacity-50 hover:opacity-100
                      transition-all duration-300 ease-in-out
                    ">Discord
                  </a></li>
                </ul>
              </div>
              <div class="text-left">
                <h3 class="text-sm text-[var(--text)] font-regular mb-4">Legal</h3>
                <ul
                  class="
                    space-y-2
                    text-xs text-[var(--text)] font-light
                    pl-1
                  ">
                  <li><a
                    href="/privacy-policy"
                    class="
                      opacity-50 hover:opacity-100
                      transition-all duration-300 ease-in-out
                    ">Privacy Policy
                  </a></li>
                </ul>
              </div>
            </div>
            </div>
            <div
              class="
                flex justify-between items-center
                border-t border-[var(--border)]
                pt-8
                pb-20
              ">
            <p class="text-xs text-[var(--text-secondary)] font-light">&copy;
              {{ currentYear }} digi systems All rights reserved.</p>
              <button
              @click="toggleTheme"
              class="
              rounded-full">
              <img
                :src="isLight
                ? '/icon/icon-light.svg'
                : '/icon/icon-dark.svg'"
                alt="theme toggle"
                class="w-5 h-5 opacity-70 hover:opacity-100 transition" />
            </button>
            </div>
          </div>
        </footer>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const Notifications = defineAsyncComponent(() => import('./components/global/notifications.vue'));
const NavBar = defineAsyncComponent(() => import('./components/global/navbar.vue'));
const Sidebar = defineAsyncComponent(() => import('./components/global/sidebar.vue'));

const store = useStore();
const route = useRoute();

const showSidebar = computed(() => store.state.sidebar);
const shouldShowNavbar = computed(() => !route.path.startsWith('/auth'));
const shouldShowFooter = computed(() => !route.path.startsWith('/auth'));
const isLight = computed(() => store.state.theme.theme === 'light');

const currentYear = ref(new Date().getFullYear());

const toggleTheme = () => {
  store.dispatch('theme/toggleTheme');
  const newTheme = store.state.theme.theme;

  document.documentElement.classList.toggle('light', newTheme === 'light');
};

function toggleSidebar() {
  store.commit('toggleSidebar');
}

function clickOutside() {
  if (showSidebar.value) store.commit('toggleSidebar');
}

</script>

<style scoped>
.blocker {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.9); /* Change the alpha value for darkness */
  z-index: 20; /* Ensure it's above the sidebar */
}
#app {
  font-family: 'Alexandria', sans-serif;
}
</style>
