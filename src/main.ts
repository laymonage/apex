import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import App from './App.vue';
import router from './router';
import '@/assets/css/tailwind.css';

Vue.config.productionTip = process.env.node_env === 'production';

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
  render: (h) => h(App),
}).$mount('#app');
