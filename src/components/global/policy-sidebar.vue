<template>
  <aside class="w-80 flex-shrink-0 sticky fixed top-0 h-screen border-r border-[var(--border)] overflow-y-auto custom-scrollbar pt-8">
    <div class="sticky pt-4 pb-20 space-y-8 divide-y divide-[var(--border)]">
      <div v-for="group in groups" :key="group.title" class="">
        <h2 class="px-8 my-4 text-md font-light text-[var(--text-secondary)] opacity-40">
          {{ group.title }}
        </h2>
        <div class="space-y-2 ">
          <button
            v-for="section in group.sections"
            :key="section.id"
            @click="$emit('scroll', section.id)"
            class="w-full text-left px-8 py-2.5 text-sm transition-all duration-200"
            :class="[
              activeSection === section.id
                ? 'text-[var(--color-primary)] font-medium bg-[var(--color-primary-low)]'
                : 'text-[var(--text-secondary)] font-light hover:text-[var(--text)] hover:bg-white/5'
            ]"
          >
            {{ section.title }}
          </button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  groups: Array<{
    title: string;
    sections: Array<{ id: string; title: string }>;
  }>;
  activeSection: string;
}>();

defineEmits(['scroll']);
</script>
