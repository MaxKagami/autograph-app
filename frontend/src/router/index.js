import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', meta: { layout: 'public' }, component: () => import('@/views/home') },
    { path: '/about', name: 'about', meta: { layout: 'public' }, component: () => import('@/views/about') },
    { path: '/articles', name: 'articles', meta: { layout: 'public' }, component: () => import('@/views/articles') },
    { path: '/articles/:id', name: 'article', meta: { layout: 'public' }, component: () => import('@/views/articles/show'), props: true },
    { path: '/blanks', name: 'blanks', meta: { layout: 'public' }, component: () => import('@/views/blanks') },
    { path: '/calculator', name: 'calculator', meta: { layout: 'public' }, component: () => import('@/views/calculator') },
    { path: '/contacts', name: 'contacts', meta: { layout: 'public' }, component: () => import('@/views/contacts') },
    { path: '/downloads', name: 'downloads', meta: { layout: 'public' }, component: () => import('@/views/downloads') },
    { path: '/equipments', name: 'equipments', meta: { layout: 'public' }, component: () => import('@/views/equipments') },
    { path: '*', name: '404*', component: require('@/views/404').default },
    { path: '/admin', name: 'dashboard', meta: { layout: 'admin' }, component: () => import('@/views/admin_panel/dashboard') }
    //   path: '/admin',
    //   name: 'admin',
    //   meta: { layout: 'admin' },
    //   component: () => import('@/views/admin_panel/dashboard'),
    //   children: [
    //     { path: '/admin/dashboard', name: 'dashboard', component: () => import('@/views/admin_panel/dashboard') }
    //   ]
    // }
  ]
})
