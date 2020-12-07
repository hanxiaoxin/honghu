import HuInput from './src/input';

/* istanbul ignore next */
HuInput.install = function(Vue) {
  Vue.component(HuInput.name, HuInput);
};

export default HuInput;
