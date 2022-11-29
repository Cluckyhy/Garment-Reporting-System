import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    // redirect: '/commodity/salesAnalysis',
    children: [
      {
        name: 'salesAnalysis',
        path: 'salesAnalysis',
        meta: {
          title: '商品综合分析',
          help_url: 'SALESHELP'
        },
        component: () => import('@/view/commodity/salesAnalysis/index')
      },
      {
        name: 'attributeAnalysis',
        path: 'attributeAnalysis',
        meta: {
          title: '各属性汇总分析',
          help_url: 'ATTRIBUTE'
        },
        component: () => import('@/view/commodity/attributeAnalysis/index')
      }
    ]
  }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

export default router
