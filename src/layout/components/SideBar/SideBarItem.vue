<template>
  <template v-if="!props.item.hidden">
    <!-- 此部分只展示单独的一层路由 -->
    <template v-if="hasOneShowingChild(props.item.children,props.item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren) && !props.item.alwaysShow">
      <AppLink v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!props.isNest}">
          <Item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" />
          <template #title>
            <span>{{ onlyOneChild.meta.title }}</span>
          </template>
        </el-menu-item>
      </AppLink>
    </template>

    <el-sub-menu v-else ref="subMenu" :index="resolvePath(props.item.path)" popper-append-to-body>
      <template #title>
        <Item :icon="'icon-huiyuan'" />
        <span>{{ props.item.meta.title }}</span>
      </template>
      <SideBarItem
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
import Item from './Item'
import AppLink from './Link'
import path from 'path'
import { ref } from 'vue'
import { isExternal } from '@/utils/validate'

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
<style lang="scss" scoped>
.el-menu-item {
  padding-left: calc(var(--el-menu-base-level-padding) + var(--el-menu-level) * 30px) !important;
}
.under-development {
  &>* {
    user-select: none;
    pointer-events: none;
  }
  .title {
    line-height: normal;
  }
  .tip {
    margin-top: 4px;
    display: block;
    background: #FFF;
    font-size: 12px !important;
    color: #999 !important;
    width: 60px;
    height: 18px;
    text-align: center;
    line-height: 16px;
    border-radius: 4px;
    border: 1px solid#bbbbbb;
  }
}
</style>
