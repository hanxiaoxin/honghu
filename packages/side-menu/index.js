import HuSideMenu from './src/side-menu';

/* istanbul ignore next */
HuSideMenu.install = function(Vue) {
  Vue.component(HuSideMenu.name, HuSideMenu);
};

export default HuSideMenu;
