<template>
  <div class="relative w-full">
    <div
      ref="editableDiv"
      class="min-h-[40px] p-2 border border-gray-300 rounded-md cursor-text"
      :contenteditable="!props.readonly"
      @input="handleInput"
    ></div>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  defineProps,
  ref,
  watch,
  defineEmits,
} from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    defualt: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  maxLength: {
    type: Number,
    default: -1,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  sanitize: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  sanitize: {
    type: Function,
    default: (text: string) => text,
  },
});

const emit = defineEmits([
  'update:modelValue',
  'input',
  'focus',
  'blur',
  'keydown',
  'keyup',
  'enter',
]);

const editableDiv = ref<HTMLDivElement | null>(null);
const content = ref(props.modelValue);

function handleInput(event: Event) {
  if (editableDiv.value) {
    let text = editableDiv.value.innerText;

    if (props.maxLength > 0 && text.length > props.maxLength) {
      text = text.substring(0, props.maxLength);
      editableDiv.value.innerText = text;

      const selection = window.getSelection();
      if (selection) {
        const range = document.createRange();
        range.selectNodeContents(editableDiv.value);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }

    const sanitizedText = props.sanitize(text);
    if (sanitizedText !== text) {
      editableDiv.value.innerText = sanitizedText;
      text = sanitizedText;
    }

    content.value = text;
  }
}

onMounted(() => {
  if (props.autofocus && editableDiv.value) {
    editableDiv.value.focus();
  }
});

watch(() => props.modelValue, (newValue) => {
  if (newValue !== content.value) {
    content.value = newValue;
  }
});

watch(content, (newValue) => {
  emit('update:modelValue', newValue);
});

</script>
