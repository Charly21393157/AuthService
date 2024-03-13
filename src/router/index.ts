import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import BlogView from '@/views/BlogView.vue'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    }
  ]
})

export default router
