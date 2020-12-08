import HuFormItem from '../form/src/form-item';

/* istanbul ignore next */
HuFormItem.install = function(Vue) {
  Vue.component(HuFormItem.name, HuFormItem);
};

export default HuFormItem;
