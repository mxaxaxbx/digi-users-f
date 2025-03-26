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
