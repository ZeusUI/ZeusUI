import Vue from 'vue';
import { install as Zeus } from '../packages/index';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Zeus);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
