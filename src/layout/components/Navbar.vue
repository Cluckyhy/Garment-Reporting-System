<template>
  <div class="navbar">
    <div class="left-menu">
      <Hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    </div>
    <div class="right-menu">
      <span class="right-menu-item hover-effect">返回商家后台</span>
      <span class="right-menu-item hover-effect">联系客服</span>
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <span class="el-dropdown-link">
          <div class="text-ellipsis" v-text="userLoginInfo && userLoginInfo.userVO ? userLoginInfo.userVO.realName : ''"></div> <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template v-slot:dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <span class="text-red display-block">退出账号</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <!-- <div class="center-menu">
      <TagsView class="tags-view-container"/>
    </div> -->
  </div>
</template>

<script setup>
import Hamburger from '@/components/Hamburger'
import { storeToRefs } from 'pinia'
import userStore from '@/pinia/modules/user'
import settingsStore from '@/pinia/modules/settings'

const $userStore = userStore()
const $settingsStore = settingsStore()

const { sidebar } = storeToRefs($settingsStore)
const { userLoginInfo } = storeToRefs($userStore)
</script>

<style lang="scss" scoped>
.navbar {
  height: 48px;
  line-height: 48px;
  position: relative;
  color: #101010;
  background: #FFFFFF;
  overflow: visible;
  border-bottom: 1px solid #ddddddbd;
  z-index: 10001;
  .left-menu {
    float: left;
    width: 50px;
  }

  .center-menu {
    margin-left: 50px;
    margin-right: 400px;
  }

  .tags-view-container {
    height: 100%;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: flex-end;
    width: 400px;
	margin-right: 14px;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding-left: 8px;
      height: 100%;
      min-width: 100px;
      font-size: 14px;
      color: #333333;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 0;

      .avatar-wrapper {
        display: flex;
        align-content: center;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }

      .el-dropdown-link {
        cursor: pointer;
        display: flex;
        align-items: center;
		justify-content: flex-end;
        height: 48px;
        max-width: 100px;
        outline: 0 !important;
      }
    }
  }
}
</style>
