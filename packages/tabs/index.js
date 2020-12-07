import HuTabs from './src/tabs';

/* istanbul ignore next */
HuTabs.install = function(Vue) {
  Vue.component(HuTabs.name, HuTabs);
};

export default HuTabs;
