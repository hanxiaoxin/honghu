<template>
  <hu-popover
    v-bind="$attrs"
    v-model="visible"
    trigger="click"
  >
  <div class="hu-popconfirm">
    <p class="hu-popconfirm__main">
    <i
      v-if="!hideIcon"
      :class="icon"
      class="hu-popconfirm__icon"
      :style="{color: iconColor}"
    ></i>
      {{title}}
    </p>
    <div class="hu-popconfirm__action">
      <hu-button
        size="mini"
        :type="cancelButtonType"
        @click="cancel"
      >
        {{cancelButtonText}}
      </hu-button>
      <hu-button
        size="mini"
        :type="confirmButtonType"
        @click="confirm"
      >
        {{confirmButtonText}}
      </hu-button>
    </div>
  </div>
  <slot name="reference" slot="reference"></slot>
</hu-popover>
</template>

<script>
import HuPopover from 'honghu-ui/packages/popover';
import HuButton from 'honghu-ui/packages/button';
import {t} from 'honghu-ui/src/locale';

export default {
  name: 'HuPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String,
      default: t('el.popconfirm.confirmButtonText')
    },
    cancelButtonText: {
      type: String,
      default: t('el.popconfirm.cancelButtonText')
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'hu-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    HuPopover,
    HuButton
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('onConfirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('onCancel');
    }
  }
};
</script>
