import Layout from '@/layout'
const commodityRouter = {
  path: '/commodity',
  name: 'commodityAnalysis',
  component: Layout,
  redirect: '/commodity/salesAnalysis',
  meta: {
    title: '商品分析',
    icon: 'bell-filled'
  },
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

export default commodityRouter
