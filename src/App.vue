<template>
  <div class="bg-[#1d1d1d]">
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
      <router-view />
    </div>
    <!-- footer
    <footer class="bg-gray-800 text-white py-8 h-0">
      <div class="container mx-auto text-center">
        <p>&copy; {{ currentYear }} digi systems. All rights reserved.</p>
      </div>
      <router-link
        to="/privacy-policy"
        class="block text-center text-gray-400 hover:text-white"
      >
        Política de privacidad
      </router-link>
    </footer>-->
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

const currentYear = ref(new Date().getFullYear());

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
</style>
