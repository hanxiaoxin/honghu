## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `hu-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="hu-icon-edit"></i>
<i class="hu-icon-share"></i>
<i class="hu-icon-delete"></i>
<hu-button type="primary" icon="hu-icon-search">搜索</hu-button>

```
:::


### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'hu-icon-' + name"></i>
      <span class="icon-name">{{'hu-icon-' + name}}</span>
    </span>
  </li>
</ul>
