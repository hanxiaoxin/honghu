## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<hu-container>`：外层容器。当子元素中包含 `<hu-header>` 或 `<hu-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<hu-header>`：顶栏容器。

`<hu-aside>`：侧边栏容器。

`<hu-main>`：主要区域容器。

`<hu-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<hu-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<hu-container>`。
:::

### 常见页面布局

:::demo
```html
<hu-container>
  <hu-header>Header</hu-header>
  <hu-main>Main</hu-main>
</hu-container>

<hu-container>
  <hu-header>Header</hu-header>
  <hu-main>Main</hu-main>
  <hu-footer>Footer</hu-footer>
</hu-container>

<hu-container>
  <hu-aside width="200px">Aside</hu-aside>
  <hu-main>Main</hu-main>
</hu-container>

<hu-container>
  <hu-header>Header</hu-header>
  <hu-container>
    <hu-aside width="200px">Aside</hu-aside>
    <hu-main>Main</hu-main>
  </hu-container>
</hu-container>

<hu-container>
  <hu-header>Header</hu-header>
  <hu-container>
    <hu-aside width="200px">Aside</hu-aside>
    <hu-container>
      <hu-main>Main</hu-main>
      <hu-footer>Footer</hu-footer>
    </hu-container>
  </hu-container>
</hu-container>

<hu-container>
  <hu-aside width="200px">Aside</hu-aside>
  <hu-container>
    <hu-header>Header</hu-header>
    <hu-main>Main</hu-main>
  </hu-container>
</hu-container>

<hu-container>
  <hu-aside width="200px">Aside</hu-aside>
  <hu-container>
    <hu-header>Header</hu-header>
    <hu-main>Main</hu-main>
    <hu-footer>Footer</hu-footer>
  </hu-container>
</hu-container>

<style>
  .hu-header, .hu-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .hu-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .hu-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .hu-container {
    margin-bottom: 40px;
  }
  
  .hu-container:nth-child(5) .hu-aside,
  .hu-container:nth-child(6) .hu-aside {
    line-height: 260px;
  }
  
  .hu-container:nth-child(7) .hu-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

:::demo
```html
<hu-container style="height: 500px; border: 1px solid #eee">
  <hu-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <hu-menu :default-openeds="['1', '3']">
      <hu-submenu index="1">
        <template slot="title"><i class="hu-icon-message"></i>导航一</template>
        <hu-menu-item-group>
          <template slot="title">分组一</template>
          <hu-menu-item index="1-1">选项1</hu-menu-item>
          <hu-menu-item index="1-2">选项2</hu-menu-item>
        </hu-menu-item-group>
        <hu-menu-item-group title="分组2">
          <hu-menu-item index="1-3">选项3</hu-menu-item>
        </hu-menu-item-group>
        <hu-submenu index="1-4">
          <template slot="title">选项4</template>
          <hu-menu-item index="1-4-1">选项4-1</hu-menu-item>
        </hu-submenu>
      </hu-submenu>
      <hu-submenu index="2">
        <template slot="title"><i class="hu-icon-menu"></i>导航二</template>
        <hu-menu-item-group>
          <template slot="title">分组一</template>
          <hu-menu-item index="2-1">选项1</hu-menu-item>
          <hu-menu-item index="2-2">选项2</hu-menu-item>
        </hu-menu-item-group>
        <hu-menu-item-group title="分组2">
          <hu-menu-item index="2-3">选项3</hu-menu-item>
        </hu-menu-item-group>
        <hu-submenu index="2-4">
          <template slot="title">选项4</template>
          <hu-menu-item index="2-4-1">选项4-1</hu-menu-item>
        </hu-submenu>
      </hu-submenu>
      <hu-submenu index="3">
        <template slot="title"><i class="hu-icon-setting"></i>导航三</template>
        <hu-menu-item-group>
          <template slot="title">分组一</template>
          <hu-menu-item index="3-1">选项1</hu-menu-item>
          <hu-menu-item index="3-2">选项2</hu-menu-item>
        </hu-menu-item-group>
        <hu-menu-item-group title="分组2">
          <hu-menu-item index="3-3">选项3</hu-menu-item>
        </hu-menu-item-group>
        <hu-submenu index="3-4">
          <template slot="title">选项4</template>
          <hu-menu-item index="3-4-1">选项4-1</hu-menu-item>
        </hu-submenu>
      </hu-submenu>
    </hu-menu>
  </hu-aside>
  
  <hu-container>
    <hu-header style="text-align: right; font-size: 12px">
      <hu-dropdown>
        <i class="hu-icon-setting" style="margin-right: 15px"></i>
        <hu-dropdown-menu slot="dropdown">
          <hu-dropdown-item>查看</hu-dropdown-item>
          <hu-dropdown-item>新增</hu-dropdown-item>
          <hu-dropdown-item>删除</hu-dropdown-item>
        </hu-dropdown-menu>
      </hu-dropdown>
      <span>王小虎</span>
    </hu-header>
    
    <hu-main>
      <hu-table :data="tableData">
        <hu-table-column prop="date" label="日期" width="140">
        </hu-table-column>
        <hu-table-column prop="name" label="姓名" width="120">
        </hu-table-column>
        <hu-table-column prop="address" label="地址">
        </hu-table-column>
      </hu-table>
    </hu-main>
  </hu-container>
</hu-container>

<style>
  .hu-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .hu-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `hu-header` 或 `hu-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |
