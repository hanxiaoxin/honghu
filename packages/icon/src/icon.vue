<template>
  <i :class="'hu-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'HuIcon',

    props: {
      name: String
    }
  };
</script>
