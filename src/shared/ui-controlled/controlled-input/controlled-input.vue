<script setup lang="ts">
import { useField } from 'vee-validate'
import { Input } from '@/shared'

const { name } = defineProps<{
  name: string
}>()

const { value, errorMessage } = useField<string>(() => name)
</script>

<template>
  <div :class="$style.root">
    <Input v-bind="$attrs" v-model="value" />
    <p :class="$style['error-message']">{{ errorMessage }}</p>
  </div>
</template>

<style module>
.root {
  display: flex;
  flex-direction: column;

  gap: 6px;
}

.error-message {
  color: var(--bg-negative);
}
</style>
