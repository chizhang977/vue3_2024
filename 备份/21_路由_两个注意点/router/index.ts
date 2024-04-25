import {createRouter,createWebHistory} from 'vue-router'
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/news',
            component:News
        },
        {
            path:'/about',
            component:About
        }
    ]
    
})
export default router