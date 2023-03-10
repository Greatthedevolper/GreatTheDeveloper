import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---

import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap/dist/css/bootstrap.css'

import './assets/scss/main.scss'
// import 'material-icons/iconfont/material-icons.css';

createApp(App).use(router).mount('#app')
