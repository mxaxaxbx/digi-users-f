<template>
  <div class="relative w-full">
    <div
      ref="editableDiv"
      class="min-h-[40px] p-2 border border-gray-300 rounded-md cursor-text"
      :class="{
        'bg-gray-100': props.readonly,
        'bg-white': !props.readonly,
        'border-gray-300': !isFocused,
        'border-blue-500': isFocused,
      }"
      :contenteditable="!props.readonly"
      @input="handleInput"
      @keydown="handleKeyDown"
      @keyup="handleKeyUp"
      @focus="handleFocus"
      @blur="handleBlur"
      @paste="handlePaste"
    ></div>

    <div
      v-if="placeholderVisble"
      class="absolute top-2 left-2 text-gray-400"
      @click="editableDiv?.focus()"
      @keydown.enter="editableDiv?.focus()"
    >
      {{ props.placeholder }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  defineProps,
  ref,
  watch,
  defineEmits,
  computed,
  nextTick,
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
const isFocused = ref(false);

const placeholderVisble = computed(() => !content.value && !isFocused.value);

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

function handleKeyDown(event: KeyboardEvent) {
  emit('keydown', event);

  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    emit('enter', content.value);
  }
}

function handleKeyUp(event: KeyboardEvent) {
  emit('keyup', event);
}

function handleFocus(event: FocusEvent) {
  isFocused.value = true;
  emit('focus', event);
}

function handleBlur(event: FocusEvent) {
  isFocused.value = false;
  emit('blur', event);
}

function handlePaste(event: ClipboardEvent) {
  event.preventDefault();

  const text = event.clipboardData?.getData('text/plain') || '';
  const sanitizedText = props.sanitize(text);

  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(sanitizedText));
    range.collapse(false);

    if (editableDiv.value) {
      content.value = editableDiv.value.innerText;
    }
  }
}

function updateContent() {
  if (editableDiv.value) {
    editableDiv.value.innerText = content.value || '';
  }
}

onMounted(() => {
  nextTick(() => {
    updateContent();
    if (props.autofocus && editableDiv.value) {
      editableDiv.value.focus();
    }
  });
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
