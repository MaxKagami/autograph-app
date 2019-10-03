import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import './assets/style.scss'
import axios, { securedAxiosInstance, plainAxiosInstance } from './helpers/axios'
import configs from './configs'

import Public from './layouts/public/index'
import Admin from './layouts/admin/index'
import SidebarMenu from './components/sidebar'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(require('vue-moment'))
Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

Vue.prototype.$axios = axios
Vue.prototype.$configs = configs

Vue.component('v-icon', Icon)
Vue.component('public-layout', Public)
Vue.component('admin-layout', Admin)
Vue.component('sidebar-menu', SidebarMenu)

/* eslint-disable no-new */
new Vue({
  router,
  securedAxiosInstance,
  plainAxiosInstance,
  render: h => h(App)
}).$mount('#app')
