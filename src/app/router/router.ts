import { createWebHistory, createRouter } from 'vue-router'
import { Login, Register } from '@/pages'

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
