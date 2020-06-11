import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue' /* webpackChunkName: "profile" */),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects.vue' /* webpackChunkName: "projects" */),
  },
  {
    path: '/*',
    name: 'Not Found',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
