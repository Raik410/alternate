<script setup lang="ts">
import { AuthForm } from '@/widgets'
import { type LoginSchema, registerSchema, menuList } from '../model'
import { ControlledInput } from '@/shared'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

const schema = toTypedSchema(registerSchema)

const { handleSubmit } = useForm<LoginSchema>({
  validationSchema: schema,
  initialValues: {
    email: '',
    password: '',
  },
})

const onSubmit = handleSubmit(
  (values: LoginSchema) => {
    console.log('Submit: ', values)
  },
  (errors) => {
    console.log('Error: ', errors)
  },
)
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.container">
      <AuthForm
        title="Зарегистрироваться"
        description="Введите логин и пароль"
        button-text="Зарегистрироваться"
        :menus="menuList"
        @submit="onSubmit"
      >
        <ControlledInput name="email" placeholder="E-mail" />
        <ControlledInput type="password" name="password" placeholder="Пароль" />
        <ControlledInput type="password" name="verify-password" placeholder="Повторите пароль" />
      </AuthForm>
    </div>
  </div>
</template>

<style module>
.root {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  width: 100%;
  max-width: 512px;
}
</style>
