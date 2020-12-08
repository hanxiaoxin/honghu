<template>
  <aside class="hu-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'HuAside',

    componentName: 'HuAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
