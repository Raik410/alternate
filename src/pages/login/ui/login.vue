<script setup lang="ts">
import { AuthForm } from '@/widgets'
import { menuList } from '../model'
</script>

<template>
  <div class="jopa">
    <div class="container">
      <AuthForm
        title="Войти"
        description="Введите логин и пароль"
        button-text="Войти"
        :menus="menuList"
      >
        <input type="text" placeholder="jopa" />
        <input type="text" />
      </AuthForm>
    </div>
  </div>
</template>

<style scoped>
.jopa {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  width: 100%;

  max-width: 512px;
}
</style>
