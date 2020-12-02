import HuRadio from './src/radio';

/* istanbul ignore next */
HuRadio.install = function(Vue) {
  Vue.component(HuRadio.name, HuRadio);
};

export default HuRadio;
