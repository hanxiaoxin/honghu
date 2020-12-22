import HuSideMenuItem from '../side-menu/src/side-menu-item';

/* istanbul ignore next */
HuSideMenuItem.install = function(Vue) {
  Vue.component(HuSideMenuItem.name, HuSideMenuItem);
};

export default HuSideMenuItem;
