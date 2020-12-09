import HuTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
HuTimelineItem.install = function(Vue) {
  Vue.component(HuTimelineItem.name, HuTimelineItem);
};

export default HuTimelineItem;
