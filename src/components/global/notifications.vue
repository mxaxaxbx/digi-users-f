<template>
  <div class="fixed top-0 px-5 right-0 z-50 w-96">
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="mt-2 rounded-2xl px-3 py-1 border shadow mb-2 text-white"
      :class="{
        'border-[#FF2121] bg-[#FF2121]/20': notification.type === 'error',
        'border-[#00B44B] bg-[#00B44B]/20': notification.type === 'success',
        'border-[#009DFF] bg-[#009DFF]/20': notification.type === 'info',
        'border-[#FFA600] bg-[#FFA600]/20': notification.type === 'warning',
        'border-[#3d3d3d] bg-[#3d3d3d]/20': notification.type === 'default'
      }"
    >
      <div class="flex justify-between">
        <div class="flex items-center">
          <div class="mr-5">
            <img
              :src="getIcon(notification.type)"
              alt="notification icon"
              class="w-6"
            />
          </div>
          <div>
            <p class="font-semibold text-normal">{{ notification.title }}</p>
            <p class="font-light text-sm">{{ notification.message }}</p>
          </div>
        </div>
        <div>
          <button
            @click="removeNotification(notification.id)"
            class="text-white"
          >
            <i class="fas fa-times" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  computed,
} from 'vue';
import { useStore } from 'vuex';
import moment from 'moment';

import { NotificationI } from '@/store/notifications/state';

function getIcon(type: string) {
  switch (type) {
    case 'success':
      return '/icon/icon-success.svg';
    case 'error':
      return '/icon/icon-error.svg';
    case 'info':
      return '/icon/icon-info.svg';
    case 'warning':
      return '/icon/icon-warning.svg';
    default:
      return '/icon/icon-notification.svg';
  }
}

const store = useStore();

const notifications = computed<NotificationI[]>(() => store.state.notifications.notifications);
// get the current date unix timestamp
const now = ref(moment().format('X'));
const interval = ref(0);

function updateNow() {
  interval.value = setInterval(() => {
    now.value = moment().format('X');
  }, 1000);
}

function removeNotification(id: string) {
  store.commit('notifications/removeNotification', id);
}

onMounted(async () => {
  updateNow();
});

// watch each second
watch(now, (newVal) => {
  if (notifications.value.length === 0) {
    return;
  }

  const notificationsReverse = [...notifications.value].reverse();

  // get the last one
  const lastNotification = notificationsReverse[notificationsReverse.length - 1];
  if (lastNotification) {
    const diff = lastNotification.closeIn - Number(newVal);
    if (diff < 0) {
      removeNotification(lastNotification.id);
    }
  }
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});

</script>
