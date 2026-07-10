<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Device Management</h1>

    <div v-if="loading" class="text-gray-500">
      Loading devices...
    </div>

    <div v-else>
      <div v-if="devices.length === 0" class="text-gray-500 mb-4">
        No devices found.
      </div>

      <div v-for="device in devices" :key="device.id" class="bg-white p-4 rounded shadow mb-4 border">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-lg font-semibold flex items-center">
            <span v-if="device.name">{{ device.name }}</span>
            <span v-else class="text-gray-400 italic">Unnamed Device</span>

            <span v-if="device.isTrusted" class="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Trusted</span>
            <span v-if="device.isRevoked" class="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Revoked</span>
          </h2>
          <div class="text-sm text-gray-500">
            Last active: {{ formatDate(device.lastActive) }}
          </div>
        </div>

        <div class="text-sm text-gray-600 mb-4">
          <p>Browser: {{ device.browser }}</p>
          <p>OS: {{ device.os }}</p>
        </div>

        <div class="flex space-x-2">
          <button
            @click="renameDevice(device)"
            class="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm">
            Rename
          </button>

          <button
            v-if="!device.isTrusted"
            @click="trustDevice(device.id)"
            class="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm">
            Trust
          </button>

          <button
            v-if="!device.isRevoked"
            @click="revokeDevice(device.id)"
            class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 text-sm">
            Revoke
          </button>

          <button
            @click="removeDevice(device.id)"
            class="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'DevicesView',
  setup() {
    const store = useStore();
    const loading = ref(true);
    const devices = ref<any[]>([]);

    const fetchDevices = async () => {
      loading.value = true;
      try {
        const fetched = await store.dispatch('getDevices');
        devices.value = fetched || [];
      } catch (e) {
        console.error('Failed to fetch devices', e);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchDevices();
    });

    const formatDate = (dateString: string) => {
      if (!dateString) return 'Unknown';
      return new Date(dateString).toLocaleString();
    };

    const trustDevice = async (id: string) => {
      try {
        await store.dispatch('trustDevice', id);
        await fetchDevices();
      } catch (e) {
        console.error('Failed to trust device', e);
      }
    };

    const revokeDevice = async (id: string) => {
      try {
        await store.dispatch('revokeDevice', id);
        await fetchDevices();
      } catch (e) {
        console.error('Failed to revoke device', e);
      }
    };

    // local confirmation modal to avoid using global `confirm`
    const confirming = ref(false);
    const confirmMessage = ref('');
    let confirmResolver: ((value: boolean) => void) | null = null;

    const showConfirm = (message: string) => {
      confirmMessage.value = message;
      confirming.value = true;
      return new Promise<boolean>((resolve) => {
        confirmResolver = resolve;
      });
    };

    const handleConfirm = (result: boolean) => {
      confirming.value = false;
      if (confirmResolver) {
        confirmResolver(result);
        confirmResolver = null;
      }
    };

    const removeDevice = async (id: string) => {
      const ok = await showConfirm('Are you sure you want to remove this device?');
      if (!ok) return;
      try {
        await store.dispatch('removeDevice', id);
        await fetchDevices();
      } catch (e) {
        console.error('Failed to remove device', e);
      }
    };

    const renameDevice = async (device: any) => {
      const newName = prompt('Enter new name for device:', device.name || '');
      if (newName === null || newName === device.name) return;

      try {
        await store.dispatch('renameDevice', { id: device.id, name: newName });
        await fetchDevices();
      } catch (e) {
        console.error('Failed to rename device', e);
      }
    };

    return {
      loading,
      devices,
      formatDate,
      trustDevice,
      revokeDevice,
      removeDevice,
      renameDevice,
    };
  },
});
</script>
