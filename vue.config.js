// 错误：TypeError: defineConfig is not a function
// 原因：由于用vue-cli直接创建了vue 3的项目，而里面的生态并非都是最新版，vue.config.js中的代码如下，使用了vue 3的语法：
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const ElementPlus = require('unplugin-element-plus/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // 下面这句代码有待研究
  // publicPath: process.env.NODE_ENV === 'production' ? '/garment-reporting-system' : '/garment-reporting-system',
  chainWebpack: config => {
    // 测试环境不压缩代码
    process.env.NODE_ENV !== 'production' && config.optimization.minimize(false)
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      ElementPlus({})
    ]
  }
}
