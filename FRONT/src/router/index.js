import { createRouter, createWebHistory } from 'vue-router'
import default_p from '@/layout/default.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',          // 當網址是 / 時
      component: default_p , // 顯示 HomeView.vue 組件
      children: [
        {
          path: '', // 當網址是 /exam 時
          name: 'home',
         component: () => import('@/pages/home.vue') // 顯示 exam.vue 組件,
        },
        {
          path: 'exam', // 當網址是 /exam 時
          name: 'exam',
         component: () => import('@/pages/exam.vue') // 顯示 exam.vue 組件,
        }
      ]
    },
    {
      path: '/login', 
      name: 'login',
      component:() => import('@/pages/login.vue')
    }
  ]
})

export default router