import { createRouter, createWebHistory } from 'vue-router'
import SigninView from '@/views/SignIn.vue'

const routes = [
  { path: '/', component: SigninView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
