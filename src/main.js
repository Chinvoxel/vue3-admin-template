import { createApp } from 'vue'
// 全局scss
import './styles/index.scss'
// 枚举管理
import EnumPlugin from '@/enums'
// 错误日志
import errorHandler from '@/error'

import App from './App.vue'

const app = createApp(App)

app.config.performance = true // 性能分析

app.use(errorHandler)
app.use(EnumPlugin)
app.mount('#app')
