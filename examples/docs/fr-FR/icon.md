## Icônes

Element fournit un ensemble d'icônes basiques.

### Usage

Il vous suffit d'assigner le nom de classe `hu-icon-iconName` à une balise `<i>`.

:::demo

```html
<i class="hu-icon-edit"></i>
<i class="hu-icon-share"></i>
<i class="hu-icon-delete"></i>
<hu-button type="primary" icon="hu-icon-search">Chercher</hu-button>

```
:::

### Icônes

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'hu-icon-' + name"></i>
      <span class="icon-name">{{'hu-icon-' + name}}</span>
    </span>
  </li>
</ul>
