import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import About from '@/views/about'
import Articles from '@/views/articles'
import Blanks from '@/views/blanks'
import Calculator from '@/views/calculator'
import Contacts from '@/views/contacts'
import Downloads from '@/views/downloads'
import Equipments from '@/views/equipments'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/articles', name: 'articles', component: Articles },
    { path: '/articles/:id', name: 'article', component: Articles, props: true },
    { path: '/blanks', name: 'blanks', component: Blanks },
    { path: '/calculator', name: 'calculator', component: Calculator },
    { path: '/contacts', name: 'contacts', component: Contacts },
    { path: '/downloads', name: 'downloads', component: Downloads },
    { path: '/equipments', name: 'equipments', component: Equipments }
  ]
})
