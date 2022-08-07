import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue';
import DetailPage from '../views/DetailPage.vue';
import NotFound from '../views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      title: 'REST countries API with color theme switcher | Home'
    }
  },
  {
    path: '/country/:countryName',
    name: 'DetailPage',
    component: DetailPage,
    meta: {
      title: 'REST countries API with color theme switcher | '
    },
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'REST countries API with color theme switcher | Not Found'
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  to.params.countryName ? document.title = `${to.meta.title} ${to.params.countryName}` : document.title = `${to.meta.title}`;

  next();
})

export default router
