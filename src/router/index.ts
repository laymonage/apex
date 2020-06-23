import Vue from 'vue';
import VueRouter from 'vue-router';
import { scrollToTarget } from '@/utils/route-utils';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return scrollToTarget(to.hash);
  },
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title(to);
  });
});

export default router;
