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
            path:'/',
            redirect:'/about'
        },
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
                    // 第一种写法:将所有收到的params参数作为props传给路由组件

                    // props:true


                    //第二种写法:返回对象中每一组key-value作为props传给Detail组件
                    props(route){
                        return route.params
                    }
                    
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