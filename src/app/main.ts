import '@/shared/assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/app/router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { CONFIG } from '@/shared/configs/config.ts'

async function enableMocking() {
  if (CONFIG.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('../shared/api/mocks/browser.ts')

  return worker.start()
}

enableMocking().then(() => {
  const app = createApp(App)
  app.use(VueQueryPlugin)
  app.use(router)

  app.mount('#app')
})
