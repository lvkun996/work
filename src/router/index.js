import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'
Vue.use(VueRouter)

// 公共路由
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/home',
    component: Layout
  },
  {
    path: '*'
  }
]

const router = new VueRouter({
  routes: constantRoutes
})

export default router
