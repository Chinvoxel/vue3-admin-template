import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  base: '/',
  routes,
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 })
})

export default router
