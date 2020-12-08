<template>
  <header class="hu-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'HuHeader',

    componentName: 'HuHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
