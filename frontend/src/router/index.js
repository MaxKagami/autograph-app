import Vue from 'vue'
import Router from 'vue-router'

import Public from '@/layouts/public/index.vue'
import Admin from '@/layouts/admin/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      component: Public,
      children: [
        { path: 'home', alias: '', name: 'home', component: () => import('@/views/home') },
        { path: 'about', name: 'about', component: () => import('@/views/about') },
        { path: 'articles', name: 'articles', component: () => import('@/views/articles') },
        { path: 'articles/:id', name: 'article', component: () => import('@/views/articles/show'), props: true },
        { path: 'blanks', name: 'blanks', component: () => import('@/views/blanks') },
        { path: 'calculator', name: 'calculator', component: () => import('@/views/calculator') },
        { path: 'contacts', name: 'contacts', component: () => import('@/views/contacts') },
        { path: 'downloads', name: 'downloads', component: () => import('@/views/downloads') },
        { path: 'equipments', name: 'equipments', component: () => import('@/views/equipments') }
      ]
    },
    { path: '/admin',
      component: Admin,
      children: [
        { path: 'dashboard', alias: '', name: 'dashboard', component: () => import('@/views/admin/dashboard') },
        { path: 'articles', name: 'admin-articles', component: () => import('@/views/admin/articles') },
        { path: 'users', name: 'users', component: () => import('@/views/admin/users') }
      ]
    },
    { path: '/signin', name: 'signin', component: () => import('@/views/admin/signin') },
    { path: '/signup', name: 'signup', component: () => import('@/views/admin/signup') },
    { path: '/centr-gaz', beforeEnter () { location.href = 'http://www.centr-gaz.ru/' } }
  ]
})
