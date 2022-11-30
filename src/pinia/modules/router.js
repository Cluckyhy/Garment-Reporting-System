import { defineStore } from 'pinia'
import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes (routes, roles) {
  const res = []

  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const routerStore = defineStore('router', {
  state: () => {
    return {
      isLoading: false, // 页面loading
      routes: [],
      addRoutes: []
    }
  },
  // getters 类似于 computed，可对 state 的值进行二次计算, 数据没有改变的情况下之后会读取缓存
  getters: {},
  // actions 用来修改 state, 支持同步和异步
  actions: {
    changeLoadType (type) {
        this.isLoading = type
    },
    generateRoutes (roles) {
      return new Promise(resolve => {
        // let accessedRoutes
        // if (roles.includes('admin')) {
        //   accessedRoutes = asyncRoutes || []
        // } else {
        //   accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        // }
        // this.addRoutes = accessedRoutes
        // this.routes = constantRoutes.concat(accessedRoutes)
        // resolve(accessedRoutes)
        this.routes = constantRoutes.concat(asyncRoutes)
        resolve(asyncRoutes)
      })
    }
  }
})

export default routerStore
