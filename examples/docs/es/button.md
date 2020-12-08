## Button

Botones comúnmente usados.

### Uso básico

:::demo Use `type`, `plain`,`round` y `circle` para definir estilos a los botones.

```html
<hu-row>
  <hu-button>Default</hu-button>
  <hu-button type="primary">Primary</hu-button>
  <hu-button type="success">Success</hu-button>
  <hu-button type="info">Info</hu-button>
  <hu-button type="warning">Warning</hu-button>
  <hu-button type="danger">Danger</hu-button>
</hu-row>

<hu-row>
  <hu-button plain>Plain</hu-button>
  <hu-button type="primary" plain>Primary</hu-button>
  <hu-button type="success" plain>Success</hu-button>
  <hu-button type="info" plain>Info</hu-button>
  <hu-button type="warning" plain>Warning</hu-button>
  <hu-button type="danger" plain>Danger</hu-button>
</hu-row>

<hu-row>
  <hu-button round>Round</hu-button>
  <hu-button type="primary" round>Primary</hu-button>
  <hu-button type="success" round>Success</hu-button>
  <hu-button type="info" round>Info</hu-button>
  <hu-button type="warning" round>Warning</hu-button>
  <hu-button type="danger" round>Danger</hu-button>
</hu-row>

<hu-row>
  <hu-button icon="hu-icon-search" circle></hu-button>
  <hu-button type="primary" icon="hu-icon-edit" circle></hu-button>
  <hu-button type="success" icon="hu-icon-check" circle></hu-button>
  <hu-button type="info" icon="hu-icon-message" circle></hu-button>
  <hu-button type="warning" icon="hu-icon-star-off" circle></hu-button>
  <hu-button type="danger" icon="hu-icon-delete" circle></hu-button>
</hu-row>
```
:::

### Botón deshabilitado

El atributo `disabled` determina su un botón esta deshabilitado.

:::demo Use el atributo `disabled` para determinar si un botón esta deshabilitado. Acepta un valor `Boolean`.

```html
<hu-row>
  <hu-button disabled>Default</hu-button>
  <hu-button type="primary" disabled>Primary</hu-button>
  <hu-button type="success" disabled>Success</hu-button>
  <hu-button type="info" disabled>Info</hu-button>
  <hu-button type="warning" disabled>Warning</hu-button>
  <hu-button type="danger" disabled>Danger</hu-button>
</hu-row>

<hu-row>
  <hu-button plain disabled>Plain</hu-button>
  <hu-button type="primary" plain disabled>Primary</hu-button>
  <hu-button type="success" plain disabled>Success</hu-button>
  <hu-button type="info" plain disabled>Info</hu-button>
  <hu-button type="warning" plain disabled>Warning</hu-button>
  <hu-button type="danger" plain disabled>Danger</hu-button>
</hu-row>
```
:::

### Botón de texto

Botones sin borde ni fondo.

:::demo
```html
<hu-button type="text">Text Button</hu-button>
<hu-button type="text" disabled>Text Button</hu-button>
```
:::

### Botón icono

Use iconos para darle mayor significado a Button. Se puede usar simplemente un icono o un icono con texto.

:::demo Use el atributo `icon` para agregar un icono. Puede encontrar el listado de iconos en el componente de iconos. Agregar iconos a la derecha del texto se puede conseguir con un tag `<i>`. También se pueden usar iconos personalizados.

```html
<hu-button type="primary" icon="hu-icon-edit"></hu-button>
<hu-button type="primary" icon="hu-icon-share"></hu-button>
<hu-button type="primary" icon="hu-icon-delete"></hu-button>
<hu-button type="primary" icon="hu-icon-search">Search</hu-button>
<hu-button type="primary">Upload<i class="hu-icon-upload hu-icon-right"></i></hu-button>
```
:::

### Grupo de botones

Mostrar un grupo de botones puede ser usado para mostrar un grupo de operaciones similares.

:::demo Use el tag `<hu-button-group>` para agrupar sus botones.

```html
<hu-button-group>
  <hu-button type="primary" icon="hu-icon-arrow-left">Previous Page</hu-button>
  <hu-button type="primary">Next Page<i class="hu-icon-arrow-right hu-icon-right"></i></hu-button>
</hu-button-group>
<hu-button-group>
  <hu-button type="primary" icon="hu-icon-edit"></hu-button>
  <hu-button type="primary" icon="hu-icon-share"></hu-button>
  <hu-button type="primary" icon="hu-icon-delete"></hu-button>
</hu-button-group>
```
:::

### Botón de descarga 

Cuando se hace clic en un botón para descargar datos, el botón muestra un estado de descarga.

:::demo Ajuste el atributo `loading` a `true` para mostrar el estado de descarga.

```html
<hu-button type="primary" :loading="true">Loading</hu-button>
```
:::

### Tamaños

Además del tamaño por defecto, el componente Button provee tres tamaños adicionales para utilizar en diferentes escenarios.

:::demo Use el atributo `size` para setear tamaños adicionales con `medium`, `small` o `mini`.

```html
<hu-row>
  <hu-button>Default</hu-button>
  <hu-button size="medium">Medium</hu-button>
  <hu-button size="small">Small</hu-button>
  <hu-button size="mini">Mini</hu-button>
</hu-row>
<hu-row>
  <hu-button round>Default</hu-button>
  <hu-button size="medium" round>Medium</hu-button>
  <hu-button size="small" round>Small</hu-button>
  <hu-button size="mini" round>Mini</hu-button>
</hu-row>
```
:::

### Atributos
| Atributo    | Descripción                                   | Tipo    | Valores aceptados                                  | Por defecto |
| ----------- | --------------------------------------------- | ------- | -------------------------------------------------- | ----------- |
| size        | tamaño del botón                              | string  | medium / small / mini                              | —           |
| type        | tipo de botón                                 | string  | primary / success / warning / danger / info / text | —           |
| plain       | determinar si es o no un botón plano          | boolean | —                                                  | false       |
| round       | determinar si es o no un botón redondo        | boolean | —                                                  | false       |
| circle      | determina si es un botón circular             | boolean | —                                                  | false       |
| loading     | determinar si es o no un botón de descarga    | boolean | —                                                  | false       |
| disabled    | deshabilitar el botón                         | boolean | —                                                  | false       |
| icon        | nombre de la clase del icono                  | string  | —                                                  | —           |
| autofocus   | misma funcionalidad que la nativa `autofocus` | boolean | —                                                  | false       |
| native-type | misma funcionalidad que la nativa `type`      | string  | button / submit / reset                            | button      |

