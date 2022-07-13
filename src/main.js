import { createApp } from 'vue'
import App from './App.vue'
//全局挂载element-plus
import ElementPlus from 'element-plus'
//全局挂载echarts
import * as echarts from 'echarts';
import 'element-plus/dist/index.css'

import './assets/css/reset.scss'

const app = createApp(App)
// vue3 给原型上挂载属性 
app.config.globalProperties.$echarts = echarts;
app.use(ElementPlus)
app.mount('#app')