<script setup lang="ts">
import { CONFIG } from '@/shared/configs/config.ts'
import { onMounted, ref } from 'vue'

const message = ref('')

onMounted(async () => {
  const data = await fetch(CONFIG.API_BASE_URL + '/message', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  message.value = await data.text()
  console.log(message.value)
})
</script>

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
