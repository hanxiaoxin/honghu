<template>
  <li class="hu-side-menu-item"
      role="menuitem"
      tabindex="-1"
      :style="[paddingStyle, itemStyle, { backgroundColor }]"
      :class="{
      'is-active': active,
      'is-disabled': disabled
    }"
      @click="handleClick"
      @mouseenter="onMouseEnter"
      @focus="onMouseEnter"
      @blur="onMouseLeave"
      @mouseleave="onMouseLeave"
  >
    <slot></slot>
    <slot name="title"></slot>
  </li>
</template>

<script>
import SideMenu from 'packages/side-menu/src/side-menu-mixin';
import Emitter from 'main/mixins/emitter';

export default {
  name: 'HuSideMenuItem',

  componentName: 'HuSideMenuItem',

  mixins: [SideMenu, Emitter],

  props: {
    index: {
      default: null,
      validator: val => typeof val === 'string' || val === null
    },
    route: [String, Object],
    disabled: Boolean
  },

  computed: {
    active() {
      return this.index === this.rootMenu.activeIndex;
    },
    hoverBackground() {
      return this.rootMenu.hoverBackground;
    },
    backgroundColor() {
      return this.rootMenu.backgroundColor || '';
    },
    activeTextColor() {
      return this.rootMenu.activeTextColor || '';
    },
    textColor() {
      return this.rootMenu.textColor || '';
    },
    mode() {
      return this.rootMenu.mode;
    },
    itemStyle() {
      const style = {
        color: this.active ? this.activeTextColor : this.textColor
      };
      return style;
    },
    isNested() {
      return this.parentMenu !== this.rootMenu;
    },
    hoverTextColor() {
      return this.rootMenu.hoverTextColor || '';
    }
  },

  watch: {
    active: function(val) {
      if (val) {
        this.$el.style.backgroundColor = this.hoverBackground;
        this.$el.style.color = this.hoverTextColor;
      } else {
        this.$el.style.backgroundColor = '';
        this.$el.style.color = '';
      }
    }
  },

  methods: {
    onMouseEnter() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;

      if (this.active) return;
      this.$el.style.backgroundColor = this.hoverBackground;
      this.$el.style.color = this.hoverTextColor;
      this.$el.classList.add('side-menu-item-hover');
    },
    onMouseLeave() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;

      if (this.active) return;
      this.$el.style.backgroundColor = this.backgroundColor;
      this.$el.style.color = this.textColor;
      this.$el.classList.remove('side-menu-item-hover');
    },
    handleClick() {
      if (!this.disabled) {
        this.dispatch('HuSideMenu', 'item-click', this);
        this.$emit('click', this);
      }
    }
  },

  mounted() {
    this.parentMenu.addItem(this);
    this.rootMenu.addItem(this);
  },

  beforeDestroy() {
    this.parentMenu.removeItem(this);
    this.rootMenu.removeItem(this);
  }
};
</script>

<style scoped>

</style>
