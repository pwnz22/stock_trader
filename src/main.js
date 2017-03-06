import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes'
import store from './store/store'
import axios from 'axios'
window.axios = axios

Vue.use(VueRouter)
Vue.config.productionTip = false

axios.defaults.baseURL = 'https://vuejs-stock-trader-18cc2.firebaseio.com/'

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString()
})

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store
})