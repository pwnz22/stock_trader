import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter)
Vue.config.productionTip = false

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