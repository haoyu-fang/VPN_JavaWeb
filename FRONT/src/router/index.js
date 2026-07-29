import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Exam from '../pages/exam.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',          // 當網址是 / 時
      name: 'home',       // 命名路由為 home
      component: Home // 顯示 HomeView.vue 組件
    },
    {
        path: '/Exam', // 當網址是 /exam 時
        name: 'exam',
        component: Exam,
    }
  ]
})

export default router