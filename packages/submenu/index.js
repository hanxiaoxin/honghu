import HuSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
HuSubmenu.install = function(Vue) {
  Vue.component(HuSubmenu.name, HuSubmenu);
};

export default HuSubmenu;
