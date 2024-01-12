import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ElMessage } from 'element-plus'
import website from '@/config/website'
import { getToken } from '@/utils/token'
import router from '.'

router.beforeEach((to, from) => {
  NProgress.start()
  const hasToken = !!getToken()
  const isLogin = to.name === 'Login'

  if (hasToken) {
    // 如果已经登录且访问登录页面，则跳转到首页
    if (isLogin) {
      return { name: 'Home' }
    }
    return true
  }

  // 如果尚未登录，且访问页面非登录页
  if (!isLogin) {
    if (from.name !== 'Login') {
      ElMessage.warning('当前登陆已过期，请重新登录!')
    }
    return { name: 'Login', params: { redirect: to.path } }
  }

  return true
})

router.afterEach(() => {
  NProgress.done()
  const currentRoute = router.currentRoute.value
  const { title } = currentRoute.meta
  document.title = title === '404' ? title : `${website.title}-${title}`
})

// 路由错误捕获
router.onError(err => {
  NProgress.done()
  console.warn('err: ', err)
})
