<template>
  <div class="hu-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'HuBreadcrumb',

    props: {
      separator: {
        type: String,
        default: '/'
      },
      separatorClass: {
        type: String,
        default: ''
      }
    },

    provide() {
      return {
        elBreadcrumb: this
      };
    },

    mounted() {
      const items = this.$el.querySelectorAll('.hu-breadcrumb__item');
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page');
      }
    }
  };
</script>
