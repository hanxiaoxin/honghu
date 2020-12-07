import HuTableColumn from '../table/src/table-column';

/* istanbul ignore next */
HuTableColumn.install = function(Vue) {
  Vue.component(HuTableColumn.name, HuTableColumn);
};

export default HuTableColumn;
