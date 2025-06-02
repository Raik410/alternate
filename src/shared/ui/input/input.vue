<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input v-bind="$attrs" :class="$style.input" v-model="model" />
</template>

<style module>
.input {
  padding: 16px 12px;

  background-color: var(--bg-dark-300);
  color: var(--bg-grey-100);

  border-radius: 8px;
}
</style>
