<template>
  <template>
    <AppLink>
      <el-menu-item>
        <template #title>
          <Item :icon="icon-shangpin"></Item>
          <span class="pl-10">商品综合分析</span>
        </template>
      </el-menu-item>
    </AppLink>
  </template>

  <el-sub-menu>
    <template #title>
      <Item :icon="icon-shangpin"></Item>
      <span class="pl-10">商品综合分析</span>
    </template>
    <SideBarItem></SideBarItem>
  </el-sub-menu>
</template>
<script setup>
import Item from './Item'
import AppLink from './Link'

</script>
<style>

</style>
