import HuBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
HuBreadcrumb.install = function(Vue) {
  Vue.component(HuBreadcrumb.name, HuBreadcrumb);
};

export default HuBreadcrumb;
