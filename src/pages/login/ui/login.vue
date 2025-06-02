<script setup lang="ts">
import { AuthForm } from '@/widgets'
import { menuList } from '../model'
import { Input } from '@/shared'
import { ref } from 'vue'

const fields = ref({
  email: '',
  password: '',
})

const handleSubmit = () => {
  console.log('Submitted:', fields.value)
}
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.container">
      <AuthForm
        title="Войти"
        description="Введите логин и пароль"
        button-text="Войти"
        :menus="menuList"
        @submit="handleSubmit"
      >
        <Input placeholder="E-mail" v-model="fields.email" />
        <Input placeholder="Password" v-model="fields.password" />
      </AuthForm>
    </div>
  </div>
</template>

<style module>
.root {
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
