import Cookies from 'js-cookie'
import { defineStore } from 'pinia'
import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'
const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const settingsStore = defineStore('settings', {
    state: () => {
        return {
            theme: variables.theme,
            showSettings: showSettings,
            needTagsView: tagsView,
            fixedHeader: fixedHeader,
            sidebarLogo: sidebarLogo,
            sidebar: {
              opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
              withoutAnimation: false
            },
            device: 'desktop',
            size: Cookies.get('size') || 'medium'
        }
    },
    // getters 类似于 computed，可对 state 的值进行二次计算, 数据没有改变的情况下之后会读取缓存
    getters: { },
    // actions 用来修改 state, 支持同步和异步
    actions: {
        changeSetting ({ key, value }) {
            if (this[key] !== undefined) {
                this[key] = value
            }
        },
        toggleSideBar () {
            this.sidebar.opened = !this.sidebar.opened
            this.sidebar.withoutAnimation = false
            if (this.sidebar.opened) {
              Cookies.set('sidebarStatus', 1)
            } else {
              Cookies.set('sidebarStatus', 0)
            }
        },
        closeSideBar ({ withoutAnimation }) {
            Cookies.set('sidebarStatus', 0)
            this.sidebar.opened = false
            this.sidebar.withoutAnimation = withoutAnimation
        },
        toggleDevice (device) {
            this.device = device
        },
        setSize (size) {
            this.size = size
        }
    }
})

export default settingsStore
