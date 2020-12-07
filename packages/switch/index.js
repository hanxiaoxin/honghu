import HuSwitch from './src/component';

/* istanbul ignore next */
HuSwitch.install = function(Vue) {
  Vue.component(HuSwitch.name, HuSwitch);
};

export default HuSwitch;

