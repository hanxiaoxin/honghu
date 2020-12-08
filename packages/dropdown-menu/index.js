import HuDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
HuDropdownMenu.install = function(Vue) {
  Vue.component(HuDropdownMenu.name, HuDropdownMenu);
};

export default HuDropdownMenu;
