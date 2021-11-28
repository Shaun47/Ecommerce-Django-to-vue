import { createApp } from 'vue'
import Index from './Index.vue'
import router from './router'
import './css/global.css'

createApp(Index).use(router).mount('#index')
