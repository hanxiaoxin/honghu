import HuSideSubmenu from '../side-menu/src/submenu';

/* istanbul ignore next */
HuSideSubmenu.install = function(Vue) {
  Vue.component(HuSideSubmenu.name, HuSideSubmenu);
};

export default HuSideSubmenu;
