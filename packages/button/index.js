import HuButton from './src/button';

/* istanbul ignore next */
HuButton.install = function(Vue) {
  Vue.component(HuButton.name, HuButton);
};

export default HuButton;
