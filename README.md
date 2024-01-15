## TODO

2. svg-icon 引入svg,element-plus组件库icon太少 （vite-plugin-purge-icons）
3. unocss 考虑引入

## 技术栈

vue3 + vite4 + element-plus + pinia + js + node(v18.18.2) + pnpm

## 推荐安装的vscode插件

1. vue-vscode-snippets : 页面输入vb,生成vue页面模板
2. Volar : 提升vue3开发体验

## 国际化(i18n)

1. 在template模板中使用

```js
$t('route.dashboard')
```

2. 在 setup 中使用

```js
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // 解构出t方法
const xxx = t('route.dashboard')
```

3. js文件中使用

```js
import i18n from '@/i18n' // 引入i8n实例
i18n.global.t('route.dashboard')
```

## 项目架构

- src
  - api 接口统一定义管理
  - assets 静态资源
  - components 公共组件
  - config 项目配置文件
  - enums 枚举统一定义管理
  - hooks 全局hooks管理
  - i18n 国际化
  - language 语言包
  - layout 页面公共布局
  - plugins vue自定义封装插件
  - request 封装axios请求
  - router 路由定义管理
  - store 全局状态管理
  - styles 全局样式管理
  - utils 公共工具方法库
  - views 页面文件管理
