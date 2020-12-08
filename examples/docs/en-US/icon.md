## Icon

Element provides a set of common icons.

### Basic usage

Just assign the class name to `hu-icon-iconName`.

:::demo

```html
<i class="hu-icon-edit"></i>
<i class="hu-icon-share"></i>
<i class="hu-icon-delete"></i>
<hu-button type="primary" icon="hu-icon-search">Search</hu-button>

```
:::

### Icons

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'hu-icon-' + name"></i>
      <span class="icon-name">{{'hu-icon-' + name}}</span>
    </span>
  </li>
</ul>
