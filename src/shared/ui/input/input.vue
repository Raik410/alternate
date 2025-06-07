<script setup lang="ts">
interface InputProps {
  modelValue?: string
}

const { modelValue } = defineProps<InputProps>()

const emit = defineEmits<{
  'update:modelValue': (value: string) => void
  blur: () => void
}>()
</script>

<template>
  <input
    :model-value="modelValue"
    :class="$style.input"
    @input="(e) => emit('update:modelValue', e.target.value)"
    @blur="() => emit('blur')"
  />
</template>

<style module>
.input {
  padding: 16px 12px;

  color: white;

  ::placeholder {
    color: var(--bg-grey-100);
  }

  background-color: var(--bg-dark-300);

  border-radius: 8px;
}
</style>
