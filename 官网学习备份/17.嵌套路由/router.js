import { createRouter, createWebHistory } from 'vue-router'

import User from './pages/User.vue'
import UserHome from './pages/UserHome.vue'
import UserPosts from './pages/UserPosts.vue'
import UserProfile from './pages/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users/:username',
      component: User,
      children: [
        { path: '', component: UserHome },
        { path: 'posts', component: UserPosts },
        { path: 'profile', component: UserProfile }
      ]
    }
  ]
})
export default router
