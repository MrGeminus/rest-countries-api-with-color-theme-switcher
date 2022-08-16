import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import './index.css'

const app = createApp(App).use(store).use(router).mount('#app')
