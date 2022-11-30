<template>
  <template v-if="!props.item.hidden">
    <template v-if="hasOneShowingChild(props.item.children,props.item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!props.item.alwaysShow">
      <AppLink v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!props.isNest}">
          <Item :icon="'icon-baobiao'" />
          <!-- <Item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" /> -->
          <template #title>
            <span>{{ onlyOneChild.meta.title }}</span>
          </template>
        </el-menu-item>
      </AppLink>
    </template>

    <el-sub-menu v-else ref="subMenu" :index="resolvePath(props.item.path)" popper-append-to-body>
      <template #title>
        <Item :icon="'icon-baobiao'" />
        <span>{{ props.item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in props.item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </template>
</template>
<script setup>
import { ref } from 'vue'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import path from 'path'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    default: ''
  }
})

const onlyOneChild = ref(null)
function hasOneShowingChild (children = [], parent) {
  const showingChildren = children.filter(item => {
    if (item.hidden) {
      return false
    } else {
      onlyOneChild.value = item
      return true
    }
  })

  if (showingChildren.length === 1) {
    return true
  }

  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
}

function resolvePath (routePath) {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  return path.resolve(props.basePath, routePath)
}

</script>
<style>

</style>
