import { createRouter, createWebHistory } from 'vue-router'
import default_p from '@/layout/default.vue'
import articles from '@/pages/articles.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', 
      component: default_p , // 顯示 HomeView.vue 組件
      children: [
        {
          path: '',
          name: 'home',
         component: () => import('@/pages/home.vue') // 顯示 exam.vue 組件,
        },
        {
          path: 'articles/:slug',
          name: 'articles',
         component: articles // 顯示 exam.vue 組件,
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