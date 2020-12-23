<script>
import emitter from 'honghu-ui/src/mixins/emitter';
import {addClass, hasClass, removeClass} from 'main/utils/dom';

export default {
  name: 'HuSideMenu',

  componentName: 'HuSideMenu',

  mixins: [emitter],

  components: {
    'hu-side-menu-collapse-transition': {
      functional: true,
      render(createElement, context) {
        const data = {
          props: {
            mode: 'out-in'
          },
          on: {
            beforeEnter(el) {
              el.style.opacity = 0.2;
            },

            enter(el) {
              addClass(el, 'el-opacity-transition');
              el.style.opacity = 1;
            },

            afterEnter(el) {
              removeClass(el, 'el-opacity-transition');
              el.style.opacity = '';
            },

            beforeLeave(el) {
              if (!el.dataset) el.dataset = {};

              if (hasClass(el, 'hu-side-menu--collapse')) {
                removeClass(el, 'hu-side-menu--collapse');
                el.dataset.oldOverflow = el.style.overflow;
                el.dataset.scrollWidth = el.clientWidth;
                addClass(el, 'hu-side-menu--collapse');
              } else {
                addClass(el, 'hu-side-menu--collapse');
                el.dataset.oldOverflow = el.style.overflow;
                el.dataset.scrollWidth = el.clientWidth;
                removeClass(el, 'hu-side-menu--collapse');
              }

              el.style.width = el.scrollWidth + 'px';
              el.style.overflow = 'hidden';
            },

            leave(el) {
              addClass(el, 'horizontal-collapse-transition');
              el.style.width = el.dataset.scrollWidth + 'px';
            }
          }
        };
        return createElement('transition', data, context.children);
      }
    }
  },

  provide() {
    return {
      rootMenu: this
    };
  },

  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    defaultActive: {
      type: String,
      default: ''
    },
    defaultOpeneds: Array, // 默认打开的menu
    uniqueOpened: Boolean, // 互斥打开
    router: Boolean,
    menuTrigger: {
      type: String,
      default: 'click'
    },
    collapse: Boolean,
    fold: {
      type: Boolean,
      default: false
    },
    backgroundColor: String,
    textColor: String,
    hoverBackgroundColor: String,
    activeTextColor: String,
    hoverTextColor: String,
    collapseTransition: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      activeIndex: this.defaultActive,
      openedMenus: this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [],
      items: {},
      submenus: {},
      isCollapse: false,
      iconFold: false
    };
  },

  computed: {
    hoverBackground() {
      if (this.hoverBackgroundColor) return this.hoverBackgroundColor;
      return this.backgroundColor ? this.mixColor(this.backgroundColor, 0.2) : '';
    }
  },

  watch: {
    defaultActive(value) {
      if (!this.items[value]) {
        this.activeIndex = null;
      }
      this.updateActiveIndex(value);
    },

    defaultOpeneds(value) {
      this.openedMenus = value;
    },

    collapse(value) {
      if (value) this.openedMenus = [];
      this.broadcast('HuSubmenu', 'toggle-collapse', value);
    },

    isCollapse(value) {
      this.$emit('menu-fold', value);

      if (value) {
        // 关闭所有的menu
        this.openedMenus = [];
        this.broadcast('HuSideSubmenu', 'toggle-collapse', value);
      }
    }
  },

  methods: {
    updateActiveIndex(val) {
      const item = this.items[val] || this.items[this.activeIndex] || this.items[this.defaultActive];
      if (item) {
        this.activeIndex = item.index;
        this.initOpenedMenu();
      } else {
        this.activeIndex = null;
      }
    },

    mixColor(color, percent) {
      let { red, green, blue } = this.getColorChannels(color);
      if (percent > 0) { // shade given color
        red *= 1 - percent;
        green *= 1 - percent;
        blue *= 1 - percent;
      } else { // tint given color
        red += (255 - red) * percent;
        green += (255 - green) * percent;
        blue += (255 - blue) * percent;
      }
      return `rgb(${ Math.round(red) }, ${ Math.round(green) }, ${ Math.round(blue) })`;
    },

    getColorChannels(color) {
      color = color.replace('#', '');
      if (/^[0-9a-fA-F]{3}$/.test(color)) {
        color = color.split('');
        for (let i = 2; i >= 0; i--) {
          color.splice(i, 0, color[i]);
        }
        color = color.join('');
      }
      if (/^[0-9a-fA-F]{6}$/.test(color)) {
        return {
          red: parseInt(color.slice(0, 2), 16),
          green: parseInt(color.slice(2, 4), 16),
          blue: parseInt(color.slice(4, 6), 16)
        };
      } else {
        return {
          red: 255,
          green: 255,
          blue: 255
        };
      }
    },

    addItem(item) {
      this.$set(this.items, item.index, item);
    },
    removeItem(item) {
      delete this.items[item.index];
    },
    addSubmenu(item) {
      this.$set(this.submenus, item.index, item);
    },
    removeSubmenu(item) {
      delete this.submenus[item.index];
    },

    openMenu(index, indexPath) {
      let openedMenus = this.openedMenus;
      if (openedMenus.indexOf(index) !== -1) return;
      // 将不在该菜单路径下的其余菜单收起
      // collapse all menu that are not under current menu item
      if (this.uniqueOpened) {
        this.openedMenus = openedMenus.filter(index => {
          return indexPath.indexOf(index) !== -1;
        });
      }
      this.openedMenus.push(index);
    },

    closeMenu(index) {
      const i = this.openedMenus.indexOf(index);
      if (i !== -1) {
        this.openedMenus.splice(i, 1);
      }
    },

    handleSubmenuClick(submenu) {
      const { index, indexPath } = submenu;
      let isOpened = this.openedMenus.indexOf(index) !== -1;

      if (isOpened) {
        this.closeMenu(index);
        this.$emit('close', index, indexPath);
      } else {
        this.openMenu(index, indexPath);
        this.$emit('open', index, indexPath);
      }
    },

    handleItemClick(item) {
      const { index, indexPath } = item;
      const oldActiveIndex = this.activeIndex;
      const hasIndex = item.index !== null;

      if (hasIndex) {
        this.activeIndex = item.index;
      }

      this.$emit('select', index, indexPath, item);

      if (this.mode === 'horizontal' || this.collapse) {
        this.openedMenus = [];
      }

      if (this.router && hasIndex) {
        this.routeToItem(item, (error) => {
          this.activeIndex = oldActiveIndex;
          if (error) {
            // vue-router 3.1.0+ push/replace cause NavigationDuplicated error
            // https://github.com/ElemeFE/element/issues/17044
            if (error.name === 'NavigationDuplicated') return;
            console.error(error);
          }
        });
      }
    },

    // 初始化展开菜单
    // initialize opened menu
    initOpenedMenu() {
      const index = this.activeIndex;
      const activeItem = this.items[index];
      if (!activeItem || this.mode === 'horizontal' || this.collapse) return;

      let indexPath = activeItem.indexPath;

      // 展开该菜单项的路径上所有子菜单
      // expand all submenus of the menu item
      indexPath.forEach(index => {
        let submenu = this.submenus[index];
        submenu && this.openMenu(index, submenu.indexPath);
      });
    },

    routeToItem(item, onError) {
      let route = item.route || item.index;
      try {
        this.$router.push(route, () => {}, onError);
      } catch (e) {
        console.error(e);
      }
    },

    open(index) {
      const { indexPath } = this.submenus[index.toString()];
      indexPath.forEach(i => this.openMenu(i, indexPath));
    },

    close(index) {
      this.closeMenu(index);
    },

    collapseMenu() {
      this.isCollapse = !this.isCollapse;
      this.$emit('hu-menu-collapse', this);

      if (!this.fold) return;

      // 记录icon状态
      this.iconFold = this.isCollapse;

      // 关闭所有的menu
      this.openedMenus = [];
    },

    onMouseEnter() {
      if (!this.fold) return;

      if (this.iconFold && this.isCollapse) {
        this.isCollapse = false;
      }
    },

    onMouseLeave() {
      if (!this.fold) return;

      if (this.iconFold && !this.isCollapse) {
        this.isCollapse = true;
      }
    }
  },

  mounted() {
    this.initOpenedMenu();
    this.$on('item-click', this.handleItemClick);
    this.$on('submenu-click', this.handleSubmenuClick);
    this.$watch('items', this.updateActiveIndex);
  },

  render(h) {
    /* const content = [
      <div class={{'hu-side-menu--default': true, 'hu-side-menu--default--fold': this.fold}}
        onMouseenter= { () => this.onMouseEnter() }
        onMouseleave={ () => this.onMouseLeave }>
        {this.$slots.default}
      </div>
    ];*/

    const content = [h('div', {
      class: {
        'hu-side-menu--default': true,
        'hu-side-menu--default--fold': this.fold
      },
      on: {
        mouseenter: () => this.onMouseEnter(),
        mouseleave: () => this.onMouseLeave()
      }
    }, this.$slots.default)];

    if (this.$slots.title) {
      content.unshift(
        (<div class="hu-side-menu--title">
          {this.$slots.title}
        </div>)
      );
    }

    if (this.fold) {
      content.push(h('div', {
        class: {
          'hu-side-menu--footer': true
        }
      }, [
        h('i', {
          class: {
            'hu-icon-s-unfold': !this.isCollapse,
            'hu-icon-s-fold': this.isCollapse
          },
          style: {
            color: this.hoverTextColor
          },
          on: {
            click: () => this.collapseMenu(),
            mouseenter: function() {
              // console.log(this);
            },
            mouseleave: function() {
              // console.log(this);
            }
          }
        })
      ]));
      /* content.push(
        (<div class="hu-side-menu--footer">
          <i class={{'hu-icon-s-unfold': !this.isCollapse, 'hu-icon-s-fold': this.isCollapse}} style={{color: this.hoverTextColor}} onClick={
            () => { this.collapseMenu();}
          }></i>
        </div>)
      );*/
    }

    const component = (
      <div role="menu"
        style={{ backgroundColor: this.backgroundColor || '' }}
        class={{
          'hu-side-menu--horizontal': this.mode === 'horizontal',
          'hu-side-menu--collapse': this.collapse,
          'hu-side-menu': true,
          'hu-side-menu--fold': this.isCollapse
        }}
      >
        {content}
      </div>
    );

    if (this.collapseTransition) {
      return (
        <hu-side-menu-collapse-transition>
          { component }
        </hu-side-menu-collapse-transition>
      );
    } else {
      return component;
    }
  }
};
</script>
