<script setup lang="ts"></script>

<template>
  <RouterView />
  <div :class="$style.root">
    <RouterLink :class="$style.link" to="/login">Login</RouterLink>
    <RouterLink :class="$style.link" to="/register">Register</RouterLink>
  </div>
</template>

<style module>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;
  height: 100vh;

  text-decoration: none;
}

.link {
  color: var(--bg-purple);
}
</style>
