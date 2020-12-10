import HuProgress from './src/progress';

/* istanbul ignore next */
HuProgress.install = function(Vue) {
  Vue.component(HuProgress.name, HuProgress);
};

export default HuProgress;
