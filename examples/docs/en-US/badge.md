## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

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

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

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

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

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

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

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

### Attributes
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | display value   | string, number  |          —            |    —    |
| max           |  maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`   | number  |         —              |     —    |
| is-dot        | if a little dot is displayed | boolean   |    —           |  false  |
| hidden        | hidden badge    | boolean         |          —            |  false  |
| type          | button type     | string          | primary / success / warning / danger / info |   —  |
