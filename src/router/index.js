import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateView from '../views/CreateView.vue';
import Schedule from '../views/Schedule.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
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
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
