import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.scss'
import axios, { securedAxiosInstance, plainAxiosInstance } from './helpers/axios'
import configs from './configs'

import Public from './layouts/public'
import Admin from './layouts/admin'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

Vue.prototype.$axios = axios
Vue.prototype.$configs = configs

Vue.component('public-layout', Public)
Vue.component('admin-layout', Admin)

/* eslint-disable no-new */
new Vue({
  router,
  securedAxiosInstance,
  plainAxiosInstance,
  render: h => h(App)
}).$mount('#app')
