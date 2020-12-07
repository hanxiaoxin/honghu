import HuTable from './src/table';

/* istanbul ignore next */
HuTable.install = function(Vue) {
  Vue.component(HuTable.name, HuTable);
};

export default HuTable;
