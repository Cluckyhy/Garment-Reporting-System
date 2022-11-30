import Layout from '@/layout'
const commodityRouter = {
  path: '/commodity',
  name: 'commodityAnalysis',
  component: Layout,
  redirect: '/commodity/index',
  meta: {
    title: '商品分析',
    icon: 'bell-filled'
  },
  children: [
    {
      path: 'index',
      name: 'commodity',
      meta: {
        title: '滞热销分析',
        help_url: ''
      },
      component: () => import('@/views/commodity')
    },
    {
      path: 'attributeAnalysis',
      name: 'attributeAnalysis',
      meta: {
        title: '各属性汇总分析',
        help_url: 'INDEX'
      },
      component: () => import('@/views/commodity/attributeAnalysis')
	},
	{
      path: 'commodityDetailedAnalysis',
      name: 'commodityDetailedAnalysis',
      meta: {
        title: '商品详细分析'
      },
      component: () => import('@/views/commodity/commodityDetailedAnalysis')
    },
    {
      path: 'SmartTransfers',
      name: 'SmartTransfers',
      meta: {
        title: '智能调拨'
      },
      component: () => import('@/views/commodity/smartTransfers')
    }
  ]
}

export default commodityRouter
