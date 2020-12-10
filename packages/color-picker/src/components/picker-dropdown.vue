<template>
  <transition name="hu-zoom-in-top" @after-leave="doDestroy">
    <div
      class="hu-color-dropdown"
      v-show="showPopper">
      <div class="hu-color-dropdown__main-wrapper">
        <hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <predefine v-if="predefine" :color="color" :colors="predefine"></predefine>
      <div class="hu-color-dropdown__btns">
        <span class="hu-color-dropdown__value">
          <hu-input
            v-model="customInput"
            @keyup.native.enter="handleConfirm"
            @blur="handleConfirm"
            :validate-event="false"
            size="mini">
          </hu-input>
        </span>
        <hu-button
          size="mini"
          type="text"
          class="hu-color-dropdown__link-btn"
          @click="$emit('clear')">
          {{ t('el.colorpicker.clear') }}
        </hu-button>
        <hu-button
          plain
          size="mini"
          class="hu-color-dropdown__btn"
          @click="confirmValue">
          {{ t('el.colorpicker.confirm') }}
        </hu-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import SvPanel from './sv-panel';
  import HueSlider from './hue-slider';
  import AlphaSlider from './alpha-slider';
  import Predefine from './predefine';
  import Popper from 'honghu-ui/src/utils/vue-popper';
  import Locale from 'honghu-ui/src/mixins/locale';
  import HuInput from 'honghu-ui/packages/input';
  import HuButton from 'honghu-ui/packages/button';

  export default {
    name: 'hu-color-picker-dropdown',

    mixins: [Popper, Locale],

    components: {
      SvPanel,
      HueSlider,
      AlphaSlider,
      HuInput,
      HuButton,
      Predefine
    },

    props: {
      color: {
        required: true
      },
      showAlpha: Boolean,
      predefine: Array
    },

    data() {
      return {
        customInput: ''
      };
    },

    computed: {
      currentColor() {
        const parent = this.$parent;
        return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
      }
    },

    methods: {
      confirmValue() {
        this.$emit('pick');
      },

      handleConfirm() {
        this.color.fromString(this.customInput);
      }
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },

    watch: {
      showPopper(val) {
        if (val === true) {
          this.$nextTick(() => {
            const { sl, hue, alpha } = this.$refs;
            sl && sl.update();
            hue && hue.update();
            alpha && alpha.update();
          });
        }
      },

      currentColor: {
        immediate: true,
        handler(val) {
          this.customInput = val;
        }
      }
    }
  };
</script>
