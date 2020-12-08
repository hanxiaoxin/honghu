import { createVue, destroyVM } from '../util';

describe('Col', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <hu-col :span="12">
        </hu-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('hu-col')).to.be.true;
  });
  it('span', () => {
    vm = createVue({
      template: `
        <hu-col :span="12">
        </hu-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('hu-col-12')).to.be.true;
  });
  it('pull', () => {
    vm = createVue({
      template: `
        <hu-col :span="12" :pull="3">
        </hu-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('hu-col-pull-3')).to.be.true;
  });
  it('push', () => {
    vm = createVue({
      template: `
        <hu-col :span="12" :push="3">
        </hu-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('hu-col-push-3')).to.be.true;
  });
  it('gutter', () => {
    vm = createVue({
      template: `
        <hu-row :gutter="20">
          <hu-col :span="12" ref="col">
          </hu-col>
        </hu-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.style.paddingLeft === '10px').to.be.true;
    expect(colElm.style.paddingRight === '10px').to.be.true;
  });
  it('responsive', () => {
    vm = createVue({
      template: `
        <hu-row :gutter="20">
          <hu-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
          </hu-col>
        </hu-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.classList.contains('hu-col-sm-4')).to.be.true;
    expect(colElm.classList.contains('hu-col-sm-offset-2')).to.be.true;
    expect(colElm.classList.contains('hu-col-lg-6')).to.be.true;
    expect(colElm.classList.contains('hu-col-lg-offset-3')).to.be.true;
    expect(colElm.classList.contains('hu-col-md-8')).to.be.true;
  });
});
