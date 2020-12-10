<template>
  <div class="hu-page-header">
    <div class="hu-page-header__left" @click="$emit('back')">
      <i class="hu-icon-back"></i>
      <div class="hu-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="hu-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from 'honghu-ui/src/locale';
export default {
  name: 'HuPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('el.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
