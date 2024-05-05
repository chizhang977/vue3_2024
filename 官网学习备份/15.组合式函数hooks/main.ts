// import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

const app = createApp(App)
// app.component(
//   'GrandChild',
//   defineAsyncComponent(() => import('@/components/GrandChild.vue'))
// )
app.mount('#app')
