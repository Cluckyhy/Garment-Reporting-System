import Layout from '@layout'
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
      path: 'salesAnalysis',
      meta: {
        title: '商品综合分析',
        help_url: 'SALESHELP'
      }
    }
  ]
}

export default commodityRouter
