## Icon

Element proporciona un conjunto de iconos propios.

### Uso básico

Simplemente asigna el nombre de la clase a `hu-icon-iconName`.

:::demo

```html
<i class="hu-icon-edit"></i>
<i class="hu-icon-share"></i>
<i class="hu-icon-delete"></i>
<hu-button type="primary" icon="hu-icon-search">Search</hu-button>

```
:::

### Iconos

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'hu-icon-' + name"></i>
      <span class="icon-name">{{'hu-icon-' + name}}</span>
    </span>
  </li>
</ul>
