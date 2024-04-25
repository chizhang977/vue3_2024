import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import  Detail  from "@/pages/Detail.vue";

const router = createRouter({
    history:createWebHistory(),
    // history:createWebHashHistory(),
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home
        },
        {
            name:'news',
            path:'/news',
            component:News,
            children:[
                {
                    name:'detail',
                    path:'detail/:id/:title/:content',
                    // path:'detial',
                    component:Detail,
                    
                }
            ]
        },
        {
            name:'about',
            path:'/about',
            component:About
        }
    ]
    
})
export default router