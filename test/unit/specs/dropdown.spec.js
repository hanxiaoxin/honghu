import { createVue, triggerEvent, destroyVM, triggerKeyDown } from '../util';

describe('Dropdown', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <hu-dropdown ref="dropdown">
          <span class="hu-dropdown-link">
            下拉菜单<i class="hu-icon-caret-bottom hu-icon-right"></i>
          </span>
          <hu-dropdown-menu slot="dropdown" class="dropdown-test-creat">
            <hu-dropdown-item>黄金糕</hu-dropdown-item>
            <hu-dropdown-item>狮子头</hu-dropdown-item>
            <hu-dropdown-item>螺蛳粉</hu-dropdown-item>
            <hu-dropdown-item>双皮奶</hu-dropdown-item>
            <hu-dropdown-item>蚵仔煎</hu-dropdown-item>
          </hu-dropdown-menu>
        </hu-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(_ => {
      expect(dropdown.visible).to.be.true;

      triggerEvent(triggerElm, 'mouseleave');
      setTimeout(_ => {
        expect(dropdown.visible).to.not.true;
        done();
      }, 300);
    }, 400);
  });
  it('menu click', done => {
    const myCommandObject = { name: 'CommandC' };
    vm = createVue({
      template: `
        <hu-dropdown ref="dropdown">
          <span class="hu-dropdown-link">
            下拉菜单<i class="hu-icon-caret-bottom hu-icon-right"></i>
          </span>
          <hu-dropdown-menu slot="dropdown">
            <hu-dropdown-item command="a">黄金糕</hu-dropdown-item>
            <hu-dropdown-item command="b">狮子头</hu-dropdown-item>
            <hu-dropdown-item ref="commandC" :command="myCommandObject">螺蛳粉</hu-dropdown-item>
            <hu-dropdown-item command="d">双皮奶</hu-dropdown-item>
            <hu-dropdown-item command="e">蚵仔煎</hu-dropdown-item>
          </hu-dropdown-menu>
        </hu-dropdown>
      `,
      data() {
        return {
          myCommandObject
        };
      }
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];
    let callback = sinon.spy();

    dropdown.$on('command', callback);

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(_ => {
      vm.$refs.commandC.$el.click();
      setTimeout(_ => {
        expect(dropdown.visible).to.not.true;
        expect(callback.calledWith(myCommandObject)).to.be.true;
        done();
      }, 300);
    }, 300);
  });
  it('trigger', done => {
    vm = createVue({
      template: `
        <hu-dropdown trigger="click" ref="dropdown">
          <span class="hu-dropdown-link">
            下拉菜单trigger click<i class="hu-icon-caret-bottom hu-icon-right"></i>
          </span>
          <hu-dropdown-menu slot="dropdown">
            <hu-dropdown-item>黄金糕</hu-dropdown-item>
            <hu-dropdown-item @click.native="handleClick">狮子头</hu-dropdown-item>
            <hu-dropdown-item>螺蛳粉</hu-dropdown-item>
            <hu-dropdown-item>双皮奶</hu-dropdown-item>
            <hu-dropdown-item>蚵仔煎</hu-dropdown-item>
          </hu-dropdown-menu>
        </hu-dropdown>
      `
    }, true);
    let dropdownElm = vm.$el;
    let dropdown = vm.$refs.dropdown;
    let triggerElm = dropdownElm.children[0];

    triggerEvent(triggerElm, 'mouseenter');
    dropdown.$nextTick(_ => {
      expect(dropdown.visible).to.not.true;
      triggerElm.click();
      setTimeout(_ => {
        expect(dropdown.visible).to.be.true;
        done();
      }, 300);
    });
  });
  it('split button', done => {
    vm = createVue({
      template: `
        <hu-dropdown split-button type="primary" ref="dropdown">
          更多菜单
          <hu-dropdown-menu slot="dropdown" class="dropdown-test-split-button">
            <hu-dropdown-item>黄金糕</hu-dropdown-item>
            <hu-dropdown-item>狮子头</hu-dropdown-item>
            <hu-dropdown-item>螺蛳粉</hu-dropdown-item>
            <hu-dropdown-item>双皮奶</hu-dropdown-item>
            <hu-dropdown-item>蚵仔煎</hu-dropdown-item>
          </hu-dropdown-menu>
        </hu-dropdown>
      `
    }, true);

    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.querySelector('.hu-dropdown__caret-button');
    var callback = sinon.spy();

    dropdown.$on('click', callback);
    dropdownElm.querySelector('.hu-button').click();

    setTimeout(_ => {
      expect(callback.called).to.be.true;
    }, 300);

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(_ => {
      expect(dropdown.visible).to.be.true;

      triggerEvent(triggerElm, 'mouseleave');
      setTimeout(_ => {
        expect(dropdown.visible).to.not.true;
        done();
      }, 300);
    }, 300);
  });
  it('hide on click', done => {
    vm = createVue({
      template: `
        <hu-dropdown ref="dropdown" :hide-on-click="false">
          <span class="hu-dropdown-link">
            下拉菜单<i class="hu-icon-caret-bottom hu-icon-right"></i>
          </span>
          <hu-dropdown-menu slot="dropdown">
            <hu-dropdown-item command="a">黄金糕</hu-dropdown-item>
            <hu-dropdown-item command="b">狮子头</hu-dropdown-item>
            <hu-dropdown-item ref="commandC" command="c">螺蛳粉</hu-dropdown-item>
            <hu-dropdown-item command="d">双皮奶</hu-dropdown-item>
            <hu-dropdown-item command="e">蚵仔煎</hu-dropdown-item>
          </hu-dropdown-menu>
        </hu-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];
    let callback = sinon.spy();

    dropdown.$on('command', callback);

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(_ => {
      vm.$refs.commandC.$el.click();
      setTimeout(_ => {
        expect(dropdown.visible).to.true;
        expect(callback.calledWith('c')).to.be.true;
        done();
      }, 300);
    }, 300);
  });
  it('triggerElm keydown', done => {
    vm = createVue({
      template: `
        <hu-dropdown ref="dropdown">
          <span class="hu-dropdown-link">
            下拉菜单<i class="hu-icon-caret-bottom hu-icon-right"></i>
          </span>
          <hu-dropdown-menu slot="dropdown" class="dropdown-test-creat">
            <hu-dropdown-item>黄金糕</hu-dropdown-item>
            <hu-dropdown-item>狮子头</hu-dropdown-item>
            <hu-dropdown-item>螺蛳粉</hu-dropdown-item>
            <hu-dropdown-item>双皮奶</hu-dropdown-item>
            <hu-dropdown-item>蚵仔煎</hu-dropdown-item>
          </hu-dropdown-menu>
        </hu-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];
    triggerKeyDown(triggerElm, 13); // enter
    setTimeout(() => {
      expect(dropdown.visible).to.be.true;
      triggerKeyDown(triggerElm, 27); // esc
      setTimeout(() => {
        expect(dropdown.visible).to.be.false;
        done();
      }, 300);
    }, 400);
  });
  it('dropdown menu keydown', done => {
    vm = createVue({
      template: `
        <hu-dropdown ref="dropdown">
          <span class="hu-dropdown-link">
            下拉菜单<i class="hu-icon-caret-bottom hu-icon-right"></i>
          </span>
          <hu-dropdown-menu slot="dropdown" class="dropdown-test-creat">
            <hu-dropdown-item command="a">黄金糕</hu-dropdown-item>
            <hu-dropdown-item command="b">狮子头</hu-dropdown-item>
            <hu-dropdown-item command="c">螺蛳粉</hu-dropdown-item>
            <hu-dropdown-item command="d">双皮奶</hu-dropdown-item>
            <hu-dropdown-item command="e">蚵仔煎</hu-dropdown-item>
          </hu-dropdown-menu>
        </hu-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];
    let dropdownMenu = dropdown.dropdownElm;

    triggerEvent(triggerElm, 'mouseenter');

    setTimeout(() => {
      expect(dropdown.visible).to.be.true;
      triggerKeyDown(dropdownMenu, 40); // down
      setTimeout(() => {
        triggerKeyDown(dropdownMenu, 13); // enter
        setTimeout(() => {
          expect(dropdown.visible).to.be.false;
          done();
        }, 100);
      }, 100);
    }, 300);
  });
  it('updatePopper', done => {
    vm = createVue({
      template: `
        <hu-dropdown ref="dropdown">
          <span class="hu-dropdown-link">
            下拉菜单<i class="hu-icon-caret-bottom hu-icon-right"></i>
          </span>
          <hu-dropdown-menu slot="dropdown" class="dropdown-test-creat">
            <hu-dropdown-item>黄金糕</hu-dropdown-item>
            <hu-dropdown-item>狮子头</hu-dropdown-item>
            <hu-dropdown-item>螺蛳粉</hu-dropdown-item>
            <hu-dropdown-item>双皮奶</hu-dropdown-item>
            <hu-dropdown-item>蚵仔煎</hu-dropdown-item>
          </hu-dropdown-menu>
        </hu-dropdown>
      `
    }, true);
    let dropdown = vm.$refs.dropdown;
    let dropdownElm = dropdown.$el;
    let triggerElm = dropdownElm.children[0];

    triggerEvent(triggerElm, 'mouseenter');
    setTimeout(() => {
      const zIndex1 = document.querySelector('.hu-dropdown-menu').style.zIndex;
      dropdown.broadcast('ElDropdownMenu', 'updatePopper');
      setTimeout(() => {
        const zIndex2 = document.querySelector('.hu-dropdown-menu').style.zIndex;
        expect(zIndex2 > zIndex1).to.be.true;
        done();
      }, 100);
    }, 300);
  });
});
