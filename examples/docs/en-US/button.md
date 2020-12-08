## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

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

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

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

### Text Button

Buttons without border and background.

:::demo
```html
<hu-button type="text">Text Button</hu-button>
<hu-button type="text" disabled>Text Button</hu-button>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<hu-button type="primary" icon="hu-icon-edit"></hu-button>
<hu-button type="primary" icon="hu-icon-share"></hu-button>
<hu-button type="primary" icon="hu-icon-delete"></hu-button>
<hu-button type="primary" icon="hu-icon-search">Search</hu-button>
<hu-button type="primary">Upload<i class="hu-icon-upload hu-icon-right"></i></hu-button>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<hu-button-group>` to group your buttons.

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

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<hu-button type="primary" :loading="true">Loading</hu-button>
```
:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

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

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   medium / small / mini            |    —     |
| type     | button type   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | determine whether it's a plain button   | boolean    | — | false   |
| round     | determine whether it's a round button   | boolean    | — | false   |
| circle     | determine whether it's a circle button   | boolean    | — | false   |
| loading   | determine whether it's loading   | boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | icon class name | string   |  —  |  —  |
| autofocus  | same as native button's `autofocus` | boolean   |  —  |  false  |
| native-type | same as native button's `type` | string | button / submit / reset | button |
