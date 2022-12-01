<template>
  <div class="sidebar-logo-container">
    <transition name="sidebarLogoFade">
      <router-link v-if="props.collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" alt="" class="sidebar-logo">
        <h1 v-else class="sidebar-title">{{ title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" alt="" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const title = ref('亿点查')
const logo = ref(require('@/assets/images/logo.jpg'))

// 传入的参数
const props = defineProps({
  collapse: {
    type: Boolean,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 48px;
  line-height: 48px;
  background: #FFFFFF;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 41px;
      height: 34px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #333333;
      font-weight: 500;
      line-height: 50px;
      font-size: 18px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
