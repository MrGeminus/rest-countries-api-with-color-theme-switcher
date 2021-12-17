import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import DetailPage from '../views/DetailPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/REST-Countries-API',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/REST-Countries-API/:countryName',
    name: 'DetailPage',
    component: DetailPage,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: NotFoundPage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
