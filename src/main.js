import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './pinia'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.scss'

// ćšć±ćé
import './assets/icon/iconfont.css'

createApp(App).use(pinia).use(router).mount('#app')
