import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'
import commodityRouter from './modules/commodity'

export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    meta: {
      title: 'Home',
      icon: 'location'
    },
    children: [
      {
        path: 'home',
        name: 'Home1',
        meta: {
          title: 'Home1',
          icon: 'location'
        },
        component: () => import('@/views/Home')
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/about',
    name: 'About',
    component: Layout,
    redirect: '/about/index',
    meta: {
      title: 'About',
      icon: 'location'
    },
    children: [
      {
        path: 'index',
        meta: {
          title: 'About1',
          icon: 'location'
        },
        name: 'About1',
        component: () => import('@/views/About')
      },
      {
        path: 'home',
        name: 'Home2',
        meta: {
          title: 'Home2',
          icon: 'apple'
        },
        component: () => import('@/views/Home')
      }
    ]
  },
  commodityRouter
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
