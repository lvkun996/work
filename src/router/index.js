import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

Vue.use(VueRouter)

// 公共路由
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Layout,
    meta: {
      title: '首页', icon: 'icon-yemian-copy-copy'
    }
    // children: [
    //   {
    //     path: '/dashboard',
    //     name: 'dashboard',
    //     component: () => import('@/views/dashboard'),
    //     meta: {
    //       title: '首页', icon: 'icon-yemian-copy-copy'
    //     }
    //   }
    // ]
  },
  {
    path: '/questionBank',
    name: 'QuestionBank',
    component: Layout,
    meta: { title: '题库', icon: 'icon-tiku1' },
    children: [
      {
        path: '/questionBank',
        name: 'questionBank',
        component: () => import('@/views/questionBank'),
        meta: {
          title: '题库列表', icon: 'icon-tiku1'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes: constantRoutes
})

export default router
