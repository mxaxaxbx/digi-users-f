<template>
  <div class="bg-gray-200">
    <!-- notifications -->
    <Notifications />
    <!-- TODO Dark overlay -->
    <!-- menu -->
    <div
      class="
        w-full fixed
        z-40
        -mt-2
        mb-8
      "
    >
      <NavBar/>
    </div>
    <!-- content -->
    <div
      class="pt-16"
      :class="{
      }"
    >
      <router-view />
    </div>
    <!-- footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 digi systems. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent(() => import('./components/global/navbar.vue'));
const Notifications = defineAsyncComponent(() => import('./components/global/notifications.vue'));
</script>
