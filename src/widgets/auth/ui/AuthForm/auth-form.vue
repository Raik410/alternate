<script setup lang="ts">
import { type Menus } from './types.ts'
import { Button } from '@/shared'

interface AuthFormProps {
  title: string
  description: string
  buttonText: string
  menus: Menus[]
}

const { buttonText, menus, title, description } = defineProps<AuthFormProps>()

const emit = defineEmits<{
  submit: []
}>()
</script>

<template>
  <div :class="$style.root">
    <form :class="$style.form" @submit.prevent="emit('submit')">
      <div :class="$style['text-container']">
        <h1 :class="$style.title">{{ title }}</h1>
        <p :class="$style.description">{{ description }}</p>
      </div>

      <div :class="$style.container">
        <div :class="$style.fields">
          <slot />
        </div>

        <div :class="$style['button-container']">
          <Button type="submit" :class="$style['submit-button']">{{ buttonText }}</Button>

          <nav :class="$style.menu">
            <a
              :class="$style.menu__link"
              v-for="menu in menus"
              :key="menu.text"
              :href="menu.href"
              >{{ menu.text }}</a
            >
          </nav>
        </div>
      </div>
    </form>
  </div>
</template>

<style module>
.root {
  padding: 48px 56px;

  border-radius: 16px;

  background-color: var(--bg-dark-400);
}

.form {
  display: flex;
  flex-direction: column;

  gap: 40px;
}

.text-container {
  display: flex;
  flex-direction: column;

  gap: 12px;
}

.button-container {
  display: flex;
  flex-direction: column;

  gap: 20px;
}

.container {
  display: flex;
  flex-direction: column;

  gap: 32px;
}

.fields {
  display: flex;
  flex-direction: column;

  gap: 20px;
}

.menu {
  display: flex;
  justify-content: center;

  gap: 24px;
}

.menu__link {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: var(--bg-purple);
}

.title {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  text-align: center;
}

.description {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
}
</style>
