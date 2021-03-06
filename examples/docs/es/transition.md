## Transiciones incorporadas

Puede usar directamente las transiciones incorporadas en Element. Antes de hacerlo, por favor lea la [documentación](https://vuejs.org/v2/api/#transition).

### Fade

:::demo Tenemos dos efectos de fading: `el-fade-in-linear` y `el-fade-in`.
```html
<template>
  <div>
    <hu-button @click="show = !show">Click Me</hu-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### Zoom

:::demo También tenemos zoom: `el-zoom-in-center`, `el-zoom-in-top` y `el-zoom-in-bottom`.
```html
<template>
  <div>
    <hu-button @click="show2 = !show2">Click Me</hu-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### Colapsado
Para efectos de colapsado usar el componente `hu-collapse-transition`.
:::demo

```html
<template>
  <div>
    <hu-button @click="show3 = !show3">Click Me</hu-button>

    <div style="margin-top: 20px; height: 200px;">
      <hu-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">hu-collapse-transition</div>
          <div class="transition-box">hu-collapse-transition</div>
        </div>
      </hu-collapse-transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### Bajo demanda

```js
// fade/zoom
import 'honghu-ui/lib/theme-chalk/base.css';
// colapsar
import CollapseTransition from 'honghu-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
