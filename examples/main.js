import Vue from 'vue';
import VueRouter from 'vue-router';
// import routes from './router';
import routes from './router2';
import App from './app.vue';
import ComHeader from './components/header';
import ComFooter from './components/footer';
import SideNav from './components/sidenav';

import 'highlight.js/styles/color-brewer.css';

// 开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);

Vue.component('com-header', ComHeader);
Vue.component('com-footer', ComFooter);
Vue.component('side-nav', SideNav);

console.log('vvvv', routes);
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
});

const app = new Vue({
  router,
  ...App
});

app.$mount('#app');

export { app, router };
