import Button from './components/button';

const components = [
    Button
];

const install = function (Vue, opts = {}) {
    if (install.installed) {
        return;
    }

    components.map(component => {
        Vue.component(component.name, component);
        return true;
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = {
    version: '0.1.0',
    install,
    ...components
};

module.exports.default = module.exports;
