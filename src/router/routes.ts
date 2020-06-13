
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

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
    path: '/*',
    name: 'Not Found',
    component: NotFound,
  },
];

export default {
  routes,
};
