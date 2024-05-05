import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About.vue')
    }
  ]
})
export default router
