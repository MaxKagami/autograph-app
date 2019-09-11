import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from "@/components/About";
import Articles from "@/components/Articles";
import Blanks from "@/components/Blanks";
import Calculator from "@/components/Calculator";
import Contacts from "@/components/Contacts";
import Downloads from "@/components/Downloads";
import Equipments from "@/components/Equipments/Equipments";

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/articles', name: 'articles', component: Articles },
    { path: '/blanks', name: 'blanks', component: Blanks },
    { path: '/calculator', name: 'calculator', component: Calculator },
    { path: '/contacts', name: 'contacts', component: Contacts },
    { path: '/downloads', name: 'downloads', component: Downloads },
    { path: '/equipments', name: 'equipments', component: Equipments }
  ]
})
