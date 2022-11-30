<template>
  <div :class="{'has-logo':showLogo}">
    <Logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variablesObj.menuBg"
        :text-color="variablesObj.menuText"
        :unique-opened="false"
        :active-text-color="variablesObj.menuActiveText"
        :collapse-transition="true"
        mode="vertical"
      >
        嘿嘿嘿
        <SideBarItem v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import Logo from './Logo'
import SideBarItem from './SideBarItem'
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import variables from '@/styles/variables.scss'
import routerStore from '@/pinia/modules/router'
import settingsStore from '@/pinia/modules/settings'

const $route = useRoute()
const $routerStore = routerStore()
const $settingsStore = settingsStore()
const { sidebar, sidebarLogo } = storeToRefs($settingsStore)
const { routes } = storeToRefs($routerStore)

onMounted(() => {
  $routerStore.generateRoutes()
  console.log(routes)
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

const showLogo = computed(() => {
  return sidebarLogo.value
})

const variablesObj = computed(() => {
  return variables
})

const isCollapse = computed(() => {
  return !sidebar.value.opened
})
</script>
