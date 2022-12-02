import { defineStore } from 'pinia'

const userStroe = defineStore('user', {
  state: () => {
    return {
      userLoginInfo: null, // 账户信息
      roles: true, // 权限校验，默认为true（开启[联盟版, 连锁版, DMS白名单]）
      companyInfo: null,
      companyConfigList: null,
      userConfig: {},
      actionAccessRuleList: null, // 独立增值服务权限列表
      certificationInfo: null
    }
  },
  getters: {},
  actions: {}
})

export default userStroe
