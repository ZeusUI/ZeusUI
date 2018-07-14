import Vue from 'vue';
import VueRouter from 'vue-router';
import { h5menusData } from '@data';
import demoPage from '../demo';

const registerRoute = (config) => {
    let route = [];
    config.map((nav) => {
        route.push({
            path: nav.path,
            name: nav.lableEnglish,
            component: () => import(`../pages${nav.path}`),
            meta: {
                title: nav.lable
            }
        });
        return false;
    });
    return route;
};

const routes = registerRoute(h5menusData);

routes.push({
    path: '/',
    name: 'demo',
    component: demoPage
});

Vue.use(VueRouter);

const router = new VueRouter({
    linkActiveClass: 'z-active',
    base: __dirname,
    routes
});

let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
    if (route.path !== '/') {
        indexScrollTop = document.body.scrollTop;
    }
    document.title = route.meta.title || document.title;
    next();
});

router.afterEach(route => {
    if (route.path !== '/') {
        document.body.scrollTop = 0;
    } else {
        Vue.nextTick(() => {
            document.body.scrollTop = indexScrollTop;
        });
    }
});

export default router;
