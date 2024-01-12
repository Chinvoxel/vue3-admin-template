import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 枚举管理
import EnumPlugin from '@/enums'
// 状态管理器
import pinia from '@/store'
// 路由
import router from '@/router'
import '@/router/interceptor'
// 错误日志
import errorHandler from '@/error'
// 全局scss
import './styles/index.scss'
// 国际化
import i18n from './i18n'
import App from './App.vue'

const app = createApp(App)

// element icon 引入
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.config.performance = true // 性能分析

app.use(errorHandler)
app.use(EnumPlugin)
app.use(router)
app.use(i18n)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
