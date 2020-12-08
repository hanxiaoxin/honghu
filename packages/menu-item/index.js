import HuMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
HuMenuItem.install = function(Vue) {
  Vue.component(HuMenuItem.name, HuMenuItem);
};

export default HuMenuItem;
