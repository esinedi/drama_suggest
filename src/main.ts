import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import 'vant/es/toast/style'
// 虚拟数据
import './mock/index.ts'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia).use(router).mount('#app')