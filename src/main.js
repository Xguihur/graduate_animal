import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.css'
import axios from './utils/axios'

// 解决 浏览器的被动事件监听器bug
import 'default-passive-events'

// 引入 echarts
import * as echarts from 'echarts'
const app = createApp(App)
// 全局挂载 echarts
app.config.globalProperties.$echarts = echarts

app.use(router)
app.mount('#app')
app.config.globalProperties.$axios = axios
