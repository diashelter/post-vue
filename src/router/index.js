import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import Schedule from '../views/Schedule.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/novo',
      name: 'novo',
      component: CreateView
    },
    {
      path: '/agendar',
      name: 'agendar',
      component: Schedule
    }
  ]
})

export default router
