import { createVue, triggerEvent, destroyVM } from '../util';

describe('Menu', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <hu-menu>
          <hu-menu-item index="1" ref="item1">处理中心</hu-menu-item>
          <hu-menu-item index="2" ref="item2">订单管理</hu-menu-item>
        </hu-menu>
      `
    }, true);
    var item1 = vm.$refs.item1;
    var item2 = vm.$refs.item2;
    item1.$el.click();
    setTimeout(_ => {
      expect(item1.$el.classList.contains('is-active')).to.be.true;
      item2.$el.click();
      setTimeout(_ => {
        expect(item2.$el.classList.contains('is-active')).to.be.true;
        done();
      }, 20);
    }, 20);
  });
  it('background-color', done => {
    vm = createVue({
      template: `
        <hu-menu default-active="2"
          background-color="#f00"
          text-color="#000"
          active-text-color="#0f0">
          <hu-menu-item index="1" ref="item1">处理中心</hu-menu-item>
          <hu-menu-item index="2" ref="item2">订单管理</hu-menu-item>
        </hu-menu>
      `
    }, true);
    expect(vm.$el.style.backgroundColor).to.equal('rgb(255, 0, 0)');
    expect(vm.$refs.item1.$el.style.backgroundColor).to.equal('rgb(255, 0, 0)');
    expect(vm.$refs.item1.$el.style.color).to.equal('rgb(0, 0, 0)');
    expect(vm.$refs.item2.$el.style.color).to.equal('rgb(0, 255, 0)');
    triggerEvent(vm.$refs.item1.$el, 'mouseenter');
    setTimeout(_ => {
      expect(vm.$refs.item1.$el.style.backgroundColor).to.equal('rgb(204, 0, 0)');
      done();
    }, 20);
  });
  it('menu-item click', done => {
    vm = createVue({
      template: `
        <hu-menu>
          <hu-menu-item @click="onMenuItemClick" index="1" ref="item1">处理中心</hu-menu-item>
          <hu-menu-item index="2" ref="item2">订单管理</hu-menu-item>
        </hu-menu>
      `,
      methods: {
        onMenuItemClick(el) {
          expect(el).to.be.equal(vm.$refs.item1);
          this.clicksCount = this.clicksCount + 1;
        }
      },
      data() {
        return {
          clicksCount: 0
        };
      }
    }, true);
    var item1 = vm.$refs.item1;
    item1.$el.click();

    setTimeout(_ => {
      expect(vm.clicksCount).to.be.equal(1);
      done();
    }, 20);

  });
  it('menu-item disabled', done => {
    vm = createVue({
      template: `
        <hu-menu default-active="2">
          <hu-menu-item index="1" ref="item1" disabled>处理中心</hu-menu-item>
          <hu-menu-item index="2" ref="item2">订单管理</hu-menu-item>
        </hu-menu>
      `
    }, true);
    expect(vm.$refs.item2.$el.classList.contains('is-active')).to.be.true;
    vm.$refs.item1.$el.click();
    setTimeout(_ => {
      expect(vm.$refs.item1.$el.classList.contains('is-active')).to.be.false;
      done();
    }, 20);
  });
  describe('default active', () => {
    it('normal active', done => {
      vm = createVue({
        template: `
          <hu-menu default-active="2">
            <hu-menu-item index="1" ref="item1">处理中心</hu-menu-item>
            <hu-menu-item index="2" ref="item2">订单管理</hu-menu-item>
          </hu-menu>
        `
      }, true);
      expect(vm.$refs.item2.$el.classList.contains('is-active')).to.be.true;
      vm.$refs.item1.$el.click();
      setTimeout(_ => {
        expect(vm.$refs.item1.$el.classList.contains('is-active')).to.be.true;
        done();
      }, 20);
    });
    it('dynamic active', done => {
      vm = createVue({
        template: `
          <hu-menu :default-active="active">
            <hu-menu-item index="1" ref="item1">active watch处理中心</hu-menu-item>
            <hu-menu-item index="2" ref="item2">active watch订单管理</hu-menu-item>
          </hu-menu>
        `,
        data() {
          return {
            active: '2'
          };
        }
      }, true);
      setTimeout(_ => {
        vm.active = '1';
        setTimeout(_ => {
          expect(vm.$refs.item1.$el.classList.contains('is-active')).to.be.true;
          done();
        }, 20);
      }, 100);
    });
    it('vertical submenu item active', done => {
      vm = createVue({
        template: `
          <div>
            <hu-menu default-active="2-2">
              <hu-menu-item index="1" ref="item1">处理中心</hu-menu-item>
              <hu-submenu index="2" ref="submenu">
                <template slot="title">我的工作台</template>
                <hu-menu-item index="2-1">选项1</hu-menu-item>
                <hu-menu-item index="2-2" ref="submenuItem2">选项2</hu-menu-item>
                <hu-menu-item index="2-3">选项3</hu-menu-item>
              </hu-submenu>
              <hu-menu-item index="3">订单管理</hu-menu-item>
            </hu-menu>
          </div>
        `
      }, true);
      expect(vm.$refs.submenuItem2.$el.classList.contains('is-active')).to.be.true;

      setTimeout(_ => {
        expect(vm.$refs.submenu.$el.classList.contains('is-opened')).to.be.true;
        expect(vm.$refs.submenu.$el.classList.contains('is-active')).to.be.true;
        done();
      }, 20);
    });
    it('horizontal submenu item active', done => {
      vm = createVue({
        template: `
          <div>
            <hu-menu default-active="2-2">
              <hu-menu-item index="1" ref="item1">处理中心</hu-menu-item>
              <hu-submenu index="2" ref="submenu">
                <template slot="title">我的工作台</template>
                <hu-menu-item index="2-1">选项1</hu-menu-item>
                <hu-menu-item index="2-2" ref="submenuItem2">选项2</hu-menu-item>
                <hu-menu-item index="2-3">选项3</hu-menu-item>
              </hu-submenu>
              <hu-menu-item index="3">订单管理</hu-menu-item>
            </hu-menu>
          </div>
        `
      }, true);
      expect(vm.$refs.submenuItem2.$el.classList.contains('is-active')).to.be.true;

      setTimeout(_ => {
        expect(vm.$refs.submenu.$el.classList.contains('is-opened')).to.be.true;
        expect(vm.$refs.submenu.$el.classList.contains('is-active')).to.be.true;
        done();
      }, 20);
    });
  });
  describe('submenu', function() {
    it('toggle', done => {
      vm = createVue({
        template: `
          <hu-menu>
            <hu-menu-item index="1" ref="item1">处理中心</hu-menu-item>
            <hu-submenu index="2" ref="submenu">
              <template slot="title">我的工作台</template>
              <hu-menu-item index="2-1">选项1</hu-menu-item>
              <hu-menu-item index="2-2" ref="submenuItem2">选项2</hu-menu-item>
              <hu-menu-item index="2-3">选项3</hu-menu-item>
            </hu-submenu>
            <hu-menu-item index="3">订单管理</hu-menu-item>
          </hu-menu>
        `,
        data() {
          return {
          };
        }
      }, true);
      var submenuItem2 = vm.$refs.submenuItem2;
      var submenu = vm.$refs.submenu;
      submenu.$el.querySelector('.hu-submenu__title').click();
      setTimeout(_ => {
        expect(submenu.$el.classList.contains('is-opened')).to.be.true;
        submenuItem2.$el.click();
        setTimeout(_ => {
          expect(submenuItem2.$el.classList.contains('is-active')).to.be.true;
          submenu.$el.querySelector('.hu-submenu__title').click();
          setTimeout(_ => {
            expect(submenu.$el.classList.contains('is-opened')).to.not.true;
            done();
          }, 20);
        }, 20);
      }, 20);
    });
    it('default opened', done => {
      vm = createVue({
        template: `
          <hu-menu :default-openeds="defaultOpeneds">
            <hu-menu-item index="1">default opened处理中心</hu-menu-item>
            <hu-submenu index="2" ref="submenu1">
              <template slot="title">default opened我的工作台</template>
              <hu-menu-item index="2-1">选项1</hu-menu-item>
              <hu-menu-item index="2-2" ref="submenu1Item2">选项2</hu-menu-item>
              <hu-menu-item index="2-3">选项3</hu-menu-item>
            </hu-submenu>
            <hu-submenu index="3" ref="submenu2">
              <template slot="title">default opened订单管理</template>
              <hu-menu-item index="3-1">选项1</hu-menu-item>
              <hu-menu-item index="3-2" ref="submenu2Item2">选项2</hu-menu-item>
              <hu-menu-item index="3-3">选项3</hu-menu-item>
            </hu-submenu>
          </hu-menu>
        `,
        data() {
          return {
            defaultOpeneds: ['2', '3']
          };
        }
      }, true);
      expect(vm.$refs.submenu1.$el.classList.contains('is-opened')).to.be.true;
      expect(vm.$refs.submenu2.$el.classList.contains('is-opened')).to.be.true;
      vm.defaultOpeneds = ['2'];
      setTimeout(_ => {
        expect(vm.$refs.submenu1.$el.classList.contains('is-opened')).to.be.true;
        expect(vm.$refs.submenu2.$el.classList.contains('is-opened')).to.not.true;
        done();
      }, 20);
    });
    it('disabled', done => {
      vm = createVue({
        template: `
          <hu-menu>
            <hu-menu-item index="1" ref="item1">处理中心</hu-menu-item>
            <hu-submenu index="2" ref="submenu" disabled>
              <template slot="title">我的工作台</template>
              <hu-menu-item index="2-1">选项1</hu-menu-item>
              <hu-menu-item index="2-2" ref="submenuItem2">选项2</hu-menu-item>
              <hu-menu-item index="2-3">选项3</hu-menu-item>
            </hu-submenu>
            <hu-menu-item index="3">订单管理</hu-menu-item>
          </hu-menu>
        `
      }, true);
      var submenu = vm.$refs.submenu;
      submenu.$el.querySelector('.hu-submenu__title').click();
      setTimeout(_ => {
        expect(submenu.$el.classList.contains('is-opened')).to.be.false;
        done();
      }, 20);
    });
  });
  it('unique-opened', done => {
    vm = createVue({
      template: `
        <hu-menu unique-opened default-active="2-2">
          <hu-menu-item index="1">处理中心</hu-menu-item>
          <hu-submenu index="2" ref="submenu1">
            <template slot="title">我的工作台</template>
            <hu-menu-item index="2-1">选项1</hu-menu-item>
            <hu-menu-item index="2-2" ref="submenu1Item2">选项2</hu-menu-item>
            <hu-menu-item index="2-3">选项3</hu-menu-item>
          </hu-submenu>
          <hu-submenu index="3" ref="submenu2">
            <template slot="title">订单管理</template>
            <hu-menu-item index="3-1">选项1</hu-menu-item>
            <hu-menu-item index="3-2" ref="submenu2Item2">选项2</hu-menu-item>
            <hu-menu-item index="3-3">选项3</hu-menu-item>
          </hu-submenu>
        </hu-menu>
      `,
      data() {
        return {
        };
      }
    }, true);
    vm.$refs.submenu2.$el.querySelector('.hu-submenu__title').click();
    setTimeout(_ => {
      expect(vm.$refs.submenu1.$el.classList.contains('is-opened')).to.not.true;
      done();
    }, 20);
  });
  it('horizontal mode', done => {
    vm = createVue({
      template: `
        <hu-menu mode="horizontal">
          <hu-menu-item index="1">处理中心</hu-menu-item>
          <hu-submenu index="2" ref="submenu">
            <template slot="title">我的工作台</template>
            <hu-menu-item index="2-1">选项1</hu-menu-item>
            <hu-menu-item index="2-2" ref="submenuItem2">选项2</hu-menu-item>
            <hu-menu-item index="2-3">选项3</hu-menu-item>
          </hu-submenu>
          <hu-menu-item index="3">订单管理</hu-menu-item>
        </hu-menu>
      `,
      data() {
        return {
        };
      }
    }, true);
    expect(vm.$el.classList.contains('hu-menu--horizontal')).to.be.true;
    var submenu = vm.$refs.submenu;
    triggerEvent(submenu.$el, 'mouseenter');
    setTimeout(_ => {
      expect(document.body.querySelector('.hu-menu--popup').parentElement.style.display).to.not.ok;
      done();
    }, 500);
  });
  it('menu trigger click', done => {
    vm = createVue({
      template: `
        <hu-menu mode="horizontal" menu-trigger="click">
          <hu-menu-item index="1">处理中心</hu-menu-item>
          <hu-submenu index="2" ref="submenu">
            <template slot="title">我的工作台</template>
            <hu-menu-item index="2-1">选项1</hu-menu-item>
            <hu-menu-item index="2-2" ref="submenuItem2">选项2</hu-menu-item>
            <hu-menu-item index="2-3">选项3</hu-menu-item>
          </hu-submenu>
          <hu-menu-item index="3">订单管理</hu-menu-item>
        </hu-menu>
      `,
      data() {
        return {
        };
      }
    }, true);
    expect(vm.$el.classList.contains('hu-menu--horizontal')).to.be.true;
    var submenu = vm.$refs.submenu;
    var triggerElm = submenu.$el.querySelector('.hu-submenu__title');

    triggerEvent(submenu.$el, 'mouseenter');
    triggerElm.click();

    setTimeout(_ => {
      expect(document.body.querySelector('.hu-menu--popup').parentElement.style.display).to.not.ok;
      triggerElm.click();
      setTimeout(_ => {
        expect(document.body.querySelector('.hu-menu--popup').parentElement.style.display).to.be.equal('none');
        done();
      }, 1000);
    }, 500);
  });
  it('menu group', () => {
    vm = createVue({
      template: `
        <hu-menu mode="vertical" default-active="1">
          <hu-menu-item-group title="分组一" ref="group1">
            <hu-menu-item index="1"><i class="hu-icon-message"></i>导航一</hu-menu-item>
            <hu-menu-item index="2"><i class="hu-icon-message"></i>导航二</hu-menu-item>
          </hu-menu-item-group>
          <hu-submenu index="5">
            <template slot="title">导航五</template>
            <hu-menu-item-group title="分组二">
              <hu-menu-item index="5-1">选项1</hu-menu-item>
              <hu-menu-item index="5-2">选项2</hu-menu-item>
            </hu-menu-item-group>
          </hu-submenu>
        </hu-menu>
      `
    }, true);
    expect(vm.$refs.group1.$el.querySelector('.hu-menu-item-group__title').innerText).to.be.equal('分组一');
  });
  it('dynamic menus, issue 9092', done => {
    vm = createVue({
      template: `
          <hu-menu :default-active="active">
            <hu-menu-item
              v-for="menu in menus"
              :index="menu.name"
              :key="menu.name">
              {{menu.description}}
            </hu-menu-item>
          </hu-menu>
        `,
      data() {
        return {
          active: '',
          menus: []
        };
      }
    }, true);
    setTimeout(_ => {
      vm.active = '2';
      vm.menus = [
        {name: '1', description: 'happy'},
        {name: '2', description: 'new'},
        {name: '3', description: 'year'}
      ];
      setTimeout(_ => {
        expect(vm.$el.querySelector('.hu-menu-item.is-active').innerText).to.equal('new');
        done();
      }, 20);
    }, 100);
  });
});
