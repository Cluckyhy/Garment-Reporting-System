<template>
  <div :class="{ 'has-logo': showLogo }">
    <Logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :default-openeds="openeds"
        :collapse="isCollapse"
        :background-color="variablesObj.menuBg"
        :text-color="variablesObj.menuText"
        :unique-opened="false"
        :active-text-color="variablesObj.menuActiveText"
        :collapse-transition="true"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.pTableVO.id"
          :item="route"
          :base-path="route.pTableVO.url"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup>
import Logo from './Logo'
import SidebarItem from './SideBarItem'
import routerStore from '@/pinia/modules/router'
import variables from '@/styles/variables.scss'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const $route = useRoute()
const $routerStore = routerStore()
const { routes } = storeToRefs($routerStore)

const openeds = computed(() => {
  return routes.value
})

const activeMenu = computed(() => {
  const route = $route
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})

// const showLogo = computed(() => {
//   return sidebarLogo.value
// })

const variablesObj = computed(() => {
  return variables
})

// const isCollapse = computed(() => {
//   return !sidebar.value.opened
// })
</script>
<style>

</style>
