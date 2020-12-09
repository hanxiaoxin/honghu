import HuCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
HuCarouselItem.install = function(Vue) {
  Vue.component(HuCarouselItem.name, HuCarouselItem);
};

export default HuCarouselItem;
