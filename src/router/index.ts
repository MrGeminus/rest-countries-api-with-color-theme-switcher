import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import CountryDetails from '../views/CountryDetails.vue';
import NotFound from '../views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'REST countries API with color theme switcher | Home'
    }
  },
  {
    path: '/country/:countryName',
    name: 'CountryDetails',
    component: CountryDetails,
    meta: {
      title: 'REST countries API with color theme switcher | '
    },
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
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
