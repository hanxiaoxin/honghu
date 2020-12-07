import HuDialog from './src/component';

/* istanbul ignore next */
HuDialog.install = function(Vue) {
  Vue.component(HuDialog.name, HuDialog);
};

export default HuDialog;
