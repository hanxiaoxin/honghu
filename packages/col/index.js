import HuCol from './src/col';

/* istanbul ignore next */
HuCol.install = function(Vue) {
  Vue.component(HuCol.name, HuCol);
};

export default HuCol;

