import NavConfig from './config/nav2.json';

const registerRoute = (config) => {
  let route = [];
  route.push({
    path: '/component',
    redirect: '/component/installation',
    component: require('./views/component'),
    children: []
  });
  config.forEach(nav => {
    if (nav.href) return;
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav);
        });
      });
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav);
      });
    } else {
      addRoute(nav);
    }
  });

  function addRoute(page) {
    const component = page.path === '/changelog'
      ? require('./views/changelog')
      : require(`./docs${page.path}`);
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

  return route;
};

let route = registerRoute(NavConfig);

const generateMiscRoutes = (config) => {
  let guideRoute = {
    path: '/guide', // 指南
    redirect: '/guide/introduce',
    component: require('./views/guide'),
    children: [
      {
        path: 'design', // 设计原则
        name: 'guide-design',
        component: require('./views/design')
      },
      {
        path: 'introduce', // 设计原则
        name: 'guide-introduce',
        component: require('./views/introduce')
      }
    ]
  };

  let indexRoute = {
    path: '/index', // 首页
    name: 'index',
    component: require('./views/index')
  };

  return [guideRoute, indexRoute];
};

route = route.concat(generateMiscRoutes());

route.push({
  path: '/',
  redirect: '/index'
});

export default route;
