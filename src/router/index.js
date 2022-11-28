import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'
import commodityRouter from './modules/commodity.js'
import routerStore from '@/pinia/modules/router'

const $routerStore = routerStore()

/**
 * 初始化路由信息
 */
 export const initRouter = async () => {
  // // 获取路由菜单
  // await $routerStore.GetUserMenuList()
  // 动态添加路由
  const accessRoutes = await $routerStore.generateRoutes()
  accessRoutes.forEach(item => router.addRoute(item))
}

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/commodity'
  }
]

export const asyncRoutes = [
  commodityRouter
  // shopAnalysisRoutes,
  // memberAnalysisRouter
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
