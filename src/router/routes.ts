import { Route } from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

const DEFAULT_TITLE = 'laymonage';

const title = (to: Route) => (
  (to.name === 'Home' && DEFAULT_TITLE)
  || `${to.name} | ${DEFAULT_TITLE}`
);

export const routes = [
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
    path: '/blogs',
    name: 'Blogs',
    component: () => import('@/views/Blogs.vue' /* webpackChunkName: "blogs" */),
  },
  {
    path: '/*',
    name: 'Not Found',
    component: NotFound,
  },
].map((route) => ({
  ...route,
  meta: {
    title,
  },
}));

export default {
  routes,
};
