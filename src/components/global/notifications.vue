<template>
  <div
    class="
      fixed
      top-0
      px-5
      right-0
      z-50
      w-96
      bg-white bg-opacity-90
    "
  >
    <component :is="MyComponent" />
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="
        mt-2
        p-2
        border-l-4
        shadow
        mb-2
      "
      :class="`border-${notification.color}-500 bg-${notification.color}-100`"
    >
      <div class="flex justify-between">
        <div class="flex items-center">
          <div class="mr-2">
            <i class="fas fa-bell" />
          </div>
          <div>
            <p class="font-semibold">{{ notification.title }}</p>
            <p>{{ notification.message }}</p>
          </div>
        </div>
        <div>
          <button
            @click="removeNotification(notification.id)"
            class="
              p-1
              rounded
              text-white
            "
            :class="`bg-${notification.color}-500 hover:bg-${notification.color}-600`"
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
  defineAsyncComponent,
  onBeforeUnmount,
  watch,
  computed,
} from 'vue';
import { useStore } from 'vuex';
import moment from 'moment';

import { NotificationI } from '@/store/notifications/state';

const store = useStore();

const notifications = computed<NotificationI[]>(() => store.state.notifications.notifications);
// get the current date unix timestamp
const now = ref(moment().format('X'));
const MyComponent = ref<any>(null);
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
  try {
    updateNow();
    const response = await fetch('https://us-east1-digi-io.cloudfunctions.net/mf-test');
    const componentCode = await response.text();
  } catch (error) {
    console.error(error);
  }
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
    console.log('diff', diff);
    if (diff < 0) {
      removeNotification(lastNotification.id);
    }
  }
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});

</script>
