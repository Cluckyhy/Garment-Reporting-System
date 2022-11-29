import { defineStore } from 'pinia'
import { asyncRoutes } from '@/router'

const routerStore = defineStore('router', {
  state: () => {
    return {
      routes: [],
      addRoutes: []
    }
  },
  // getters 类似于 computed，可对 state 的值进行二次计算, 数据没有改变的情况下之后会读取缓存
  getters: {},
  // actions 用来修改 state, 支持同步和异步
  actions: {
    // 获取用户菜单
    GetUserMenuList () {
      this.routes = asyncRoutes
      // return new Promise((resolve, reject) => {
      //   getUserAccMenu()
      //     .then((response) => {
      //       this.routes = response
      //       resolve(response)
      //     })
      //     .catch((error) => {
      //       reject(error)
      //     })
      // })
    },
    generateRoutes () {
      return new Promise((resolve) => {
        const accessedRoutes = asyncRoutes || []
        this.addRoutes = accessedRoutes
        resolve(accessedRoutes)
      })
    }
  }
})

export default routerStore
