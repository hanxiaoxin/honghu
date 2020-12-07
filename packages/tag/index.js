import HuTag from './src/tag';

/* istanbul ignore next */
HuTag.install = function(Vue) {
  Vue.component(HuTag.name, HuTag);
};

export default HuTag;
