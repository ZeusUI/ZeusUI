import indexView from '@pages/index';
import quideView from '@pages/guide';
import designView from '@pages/design';
import introduceView from '@pages/introduce';
import componentView from '@pages/component';
import { navData } from '@data';

const registerRoute = (config) => {
    let route = [];
    route.push({
        path: '/component',
        redirect: '/component/installation',
        component: componentView,
        children: []
    });

    function addRoute (page) {
        const component = page.path === '/changelog' ? require('@pages/changelog') : require(`../docs${page.path}`);
        let child = {
            path: page.path.slice(1),
            meta: {
                title: page.title || page.name,
                description: page.description
            },
            name: 'component-' + (page.title || page.name),
            component: component.default || component
        };
        route[0].children.push(child);
    }

    config.forEach(nav => {
        if (nav.href) return;
        if (nav.groups) {
            nav.groups.forEach(group => {
                group.list.forEach(list => {
                    addRoute(list);
                });
            });
        } else if (nav.children) {
            nav.children.forEach(list => {
                addRoute(list);
            });
        } else {
            addRoute(nav);
        }
    });

    return route;
};

let route = registerRoute(navData);

const generateMiscRoutes = (config) => {
    let guideRoute = {
        path: '/guide', // 指南
        redirect: '/guide/introduce',
        component: quideView,
        children: [
            {
                path: 'design', // 设计原则
                name: 'guide-design',
                component: designView
            },
            {
                path: 'introduce', // 设计原则
                name: 'guide-introduce',
                component: introduceView
            }
        ]
    };

    let indexRoute = {
        path: '/index', // 首页
        name: 'index',
        component: indexView
    };

    return [guideRoute, indexRoute];
};

route = route.concat(generateMiscRoutes());

route.push({
    path: '/',
    redirect: '/index'
});

export default route;
