import Layout from '@/layout/index.vue'
import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'

/**
 *  hidden : false  // 是否隐藏路由
 *  meta: {
 *    title: 'home', // 国际化title
 *    icon: 'house' // icon
 *  },
 */

// 无需权限的页面
const constantRoutes = [
  {
    path: '/',
    redirect: '/home/index',
    component: Layout,
    children: [
      {
        path: 'home/index',
        name: 'Home',
        meta: {
          title: 'route.home',
          icon: 'house'
        },
        component: Home
      }
    ]
  },
  {
    path: '/login/:redirect',
    name: 'Login',
    props: true,
    hidden: true,
    meta: {
      title: 'route.login'
    },
    component: Login
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    meta: {
      title: '404',
      keepAlive: true
    },
    component: () => import('@/views/error-pages/404.vue')
  },
  {
    path: '/test',
    component: Layout,
    redirect: '/test/index',
    children: [
      {
        path: 'index',
        name: 'test',
        meta: {
          title: 'route.test',
          icon: 'guide',
          noCache: true
        },
        component: () => import('@/views/test/index.vue')
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/profile',
    meta: {
      title: 'route.user',
      icon: 'user'
    },
    children: [
      {
        path: 'profile',
        name: 'Profile',
        meta: {
          title: 'route.profile'
        },
        component: () => import('@/views/test/index.vue')
      },
      {
        path: 'settings',
        name: 'Settings',
        meta: {
          title: 'route.accountSetting'
        },
        component: () => import('@/views/test/index.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    hidden: true
  }
]

const asyncRoutes = []

const routes = [...constantRoutes, ...asyncRoutes]

export default routes
