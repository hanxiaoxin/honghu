import HuMenu from './src/menu';

/* istanbul ignore next */
HuMenu.install = function(Vue) {
  Vue.component(HuMenu.name, HuMenu);
};

export default HuMenu;
