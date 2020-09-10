import Vue from 'vue';
import VueMeta from 'vue-meta';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import VueLazyload from 'vue-lazyload';
import spinner from '@/assets/img/common/spinner.svg';
import App from './App.vue';
import router from './router';
import '@/assets/css/tailwind.css';
import '@/assets/css/main.css';

Vue.config.productionTip = process.env.node_env === 'production';

Vue.use(
  VueLazyload, {
    loading: spinner,
    observer: true,
  },
);

Vue.use(VueMeta);

const requireComponent = require.context(
  '@/components/base',
  false,
  /Base[A-Z]\w+\.(vue|js)$/,
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      (fileName
        .split('/')
        .pop() as string)
        .replace(/\.\w+$/, ''),
    ),
  );

  Vue.component(
    componentName,
    componentConfig.default || componentConfig,
  );
});

new Vue({
  router,
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
  render: (h) => h(App),
}).$mount('#app');
