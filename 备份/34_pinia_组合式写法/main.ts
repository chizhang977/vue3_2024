import {createApp} from 'vue'
import App from './App.vue'

//引入pinia
import { createPinia  } from "pinia";
//创建pinia
const pinia = createPinia()
//使用插件

const app = createApp(App)

app.use(pinia)
app.mount('#app')