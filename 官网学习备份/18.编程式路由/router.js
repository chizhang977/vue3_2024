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
      name: 'user',
      children: [
        { path: '', component: UserHome, name: 'home' },
        { path: 'posts', component: UserPosts, name: 'post' },
        { path: 'profile', component: UserProfile, name: 'profile' }
      ]
    }
  ]
})
export default router
