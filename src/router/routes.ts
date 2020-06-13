import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

const DEFAULT_TITLE = 'laymonage';

const makeTitle = (title: string) => `${title} | ${DEFAULT_TITLE}`;

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: () => DEFAULT_TITLE,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue' /* webpackChunkName: "profile" */),
    meta: {
      title: () => makeTitle('Profile'),
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects.vue' /* webpackChunkName: "projects" */),
    meta: {
      title: () => makeTitle('Projects'),
    },
  },
  {
    path: '/*',
    name: 'Not Found',
    component: NotFound,
    meta: {
      title: () => makeTitle('Not Found'),
    },
  },
];

export default {
  routes,
};
