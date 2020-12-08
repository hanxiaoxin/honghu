<template>
  <footer class="hu-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'HuFooter',

    componentName: 'HuFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
