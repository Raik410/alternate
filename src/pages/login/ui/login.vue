<script setup lang="ts">
import { AuthForm } from '@/widgets'
import { type LoginSchema, loginSchema, menuList } from '../model'
import { ControlledInput } from '@/shared'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

const schema = toTypedSchema(loginSchema)

const { values } = useForm<LoginSchema>({
  validationSchema: schema,
})

const handleSubmit = () => {
  console.log('Submitted:', values)
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
        <ControlledInput name="email" placeholder="E-mail" />
        <ControlledInput name="password" placeholder="Password" />
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
