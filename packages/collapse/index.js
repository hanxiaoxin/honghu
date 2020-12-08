import HuCollapse from './src/collapse';

/* istanbul ignore next */
HuCollapse.install = function(Vue) {
  Vue.component(HuCollapse.name, HuCollapse);
};

export default HuCollapse;

