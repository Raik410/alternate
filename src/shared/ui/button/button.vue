<script setup lang="ts"></script>

<template>
  <button :class="$style.button" v-bind="$attrs">
    <slot />
  </button>
</template>

<style module>
.button {
  width: 100%;

  background-color: var(--bg-purple);
  color: white;

  border-radius: 8px;

  padding: 16px 12px;
}
</style>
