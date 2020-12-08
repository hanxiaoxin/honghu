## Badge

Marcas en forma de número o estado para botones e iconos.

### Uso básico

Muestra la cantidad de mensajes nuevos.

:::demo La cantidad está definida por `value` que acepta `Number` o `String`.

```html
<el-badge :value="12" class="item">
  <hu-button size="small">comments</hu-button>
</el-badge>
<el-badge :value="3" class="item">
  <hu-button size="small">replies</hu-button>
</el-badge>
<el-badge :value="1" class="item" type="primary">
  <hu-button size="small">comments</hu-button>
</el-badge>
<el-badge :value="2" class="item" type="warning">
  <hu-button size="small">replies</hu-button>
</el-badge>

<hu-dropdown trigger="click">
  <span class="hu-dropdown-link">
    Click Me<i class="hu-icon-caret-bottom hu-icon--right"></i>
  </span>
  <hu-dropdown-menu slot="dropdown">
    <hu-dropdown-item class="clearfix">
      comments
      <el-badge class="mark" :value="12" />
    </hu-dropdown-item>
    <hu-dropdown-item class="clearfix">
      replies
      <el-badge class="mark" :value="3" />
    </hu-dropdown-item>
  </hu-dropdown-menu>
</hu-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Valor máximo

Se puede personalizar el valor máximo.

:::demo El valor máximo se define como `max` el cual es un `Number`. Nota: solo funciona si `value` es también un `Number`.

```html
<el-badge :value="200" :max="99" class="item">
  <hu-button size="small">comments</hu-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <hu-button size="small">replies</hu-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Personalizaciones

Mostrar texto en vez de números.

:::demo Cuando `value` es un `String`, puede mostrar texto personalizado.

```html
<el-badge value="new" class="item">
  <hu-button size="small">comments</hu-button>
</el-badge>
<el-badge value="hot" class="item">
  <hu-button size="small">replies</hu-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Pequeño punto rojo

Puede utilizar un punto rojo para marcar contenido que debe ser notado.

:::demo Use el atributo `is-dot`. Es un `Boolean`.

```html
<el-badge is-dot class="item">query</el-badge>
<el-badge is-dot class="item">
  <hu-button class="share-button" icon="hu-icon-share" type="primary"></hu-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Atributos
| Atributo | Descripción                              | Tipo           | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------- | ----------------- | ----------- |
| value    | valor a mostrar                          | string, number | —                 | —           |
| max      | valor máximo, Muestra '{max}+' cuando se excede. Solo funciona si `value` es un `Number` | number         | —                 | —           |
| is-dot   | si se debe mostrar un pequeño punto      | boolean        | —                 | false       |
| hidden   | oculta el badge                    | boolean        | —                 | false       |
| type     | tipo de botón                            | string         | primary / success / warning / danger / info | — |

