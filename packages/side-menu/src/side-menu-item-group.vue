<template>
  <li class="hu-side-menu-item-group">
    <div class="hu-side-menu-item-group__title" :style="{paddingLeft: levelPadding + 'px'}">
      <template v-if="!$slots.title">{{title}}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
/**
 * 纯粹的分组组件，只是在side-menu-item上加了一个分组样式
 */
export default {
  name: 'HuSideMenuItemGroup',

  componentName: 'HuSideMenuItemGroup',

  inject: ['rootMenu'],

  props: {
    title: {
      type: String
    }
  },

  data() {
    return {
      paddingLeft: 20
    };
  },

  computed: {
    /**
     * 层级Padding，根据parent层级移动左侧距离
     * @returns {number}
     */
    levelPadding() {
      let padding = 20;
      let parent = this.$parent;
      if (this.rootMenu.collapse) return 20;
      while (parent && parent.$options.componentName !== 'HuSideMenu') {
        if (parent.$options.componentName === 'HuSubmenu') {
          padding += 20;
        }
        parent = parent.$parent;
      }
      return padding;
    }
  }
};
</script>

