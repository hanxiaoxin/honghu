## NavMenu 侧边导航菜单

为网站提供导航功能的菜单。

### 侧栏

垂直菜单，可内嵌子菜单。

:::demo 通过`hu-menu-item-group`组件可以实现菜单进行分组，分组名可以通过`title`属性直接设定，也可以通过具名 slot 来设定。

```html
<hu-row class="tac">
  <hu-col :span="12">
    <h5>默认颜色</h5>
    <hu-side-menu 
      router      
      default-active="2"
      class="hu-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
        <template slot="title">
            <i class="hu-icon-location"></i>
            <span>支持顶部渲染slot</span>
        </template>
        <hu-side-submenu index="1">
            <template slot="title">
                <i class="hu-icon-location"></i>
                <span>导航一</span>
            </template>
            <hu-side-menu-item index="/zh-CN/component/layout">布局</hu-side-menu-item>
            <hu-side-menu-item index="hc">集群服务</hu-side-menu-item>
        </hu-side-submenu>
        <hu-side-menu-item index="1-1">选项1</hu-side-menu-item>
        <hu-side-menu-item index="1-2">选项2</hu-side-menu-item>
        <hu-side-menu-item-group>
            <template slot="title">分组一</template>
            <hu-side-menu-item index="1-3">选项3</hu-side-menu-item>
        </hu-side-menu-item-group>
    </hu-side-menu>
  </hu-col>
    <hu-col :span="12">
        <h5>深色</h5>
        <hu-side-menu
                fold
                @menu-fold="handleFold"
                default-active="1-2"
                class="hu-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                hoverBackgroundColor="rgba(42,51,68,.6)"
                background-color="#1D2535"
                text-color="#AAAAAA"
                hover-text-color="#FFFFFF"
                active-text-color="#FFFFFF">
            <hu-side-submenu index="1">
                <template slot="title">
                    <i class="hu-icon-location"></i>
                    <span>导航一</span>
                </template>
                <hu-side-menu-item index="zh-CN/component/tabs">
                    <i class="hu-icon-location"></i>
                    <span>tabs</span>
                </hu-side-menu-item>
                <hu-side-menu-item index="hc1">集群服务</hu-side-menu-item>
            </hu-side-submenu>
            <hu-side-submenu index="2">
                <template slot="title">
                    <i class="hu-icon-location"></i>
                    <span>导航二</span>
                </template>
                <hu-side-menu-item index="zh-CN/component/steps">
                    <i class="hu-icon-location"></i>
                    <span>步骤条</span>
                </hu-side-menu-item>
                <hu-side-menu-item index="hc2">集群服务</hu-side-menu-item>
            </hu-side-submenu>
            <hu-side-menu-item index="1-1"><span>选项1</span></hu-side-menu-item>
            <hu-side-menu-item index="1-2"><span>选项2</span></hu-side-menu-item>
            <hu-side-menu-item-group>
                <template slot="title">分组一</template>
                <hu-side-menu-item index="1-3"><i class="hu-icon-location"></i><span style="margin-left: 12px;">选项3</span></hu-side-menu-item>
            </hu-side-menu-item-group>
        </hu-side-menu>
    </hu-col>
</hu-row>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
        handleFold(key, value){
          console.log(key)
        }
    }
  }
</script>
```
:::

### Menu Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | 模式   | string  |   horizontal / vertical   | vertical |
| fold  | 是否水平折叠收起菜单| boolean  |   —   | false |
| background-color  | 菜单的背景色 | string |   —   | #ffffff |
| hover-background-color  | 菜单的悬浮背景色 | string |   —   | #ffffff |
| text-color  | 菜单的文字颜色（仅支持 hex 格式） | string |   —   | #303133 |
| active-text-color  | 当前激活菜单的文字颜色（仅支持 hex 格式） | string |   —   | #409EFF |
| default-active | 当前激活菜单的 index | string    | — | — |
| default-openeds | 当前打开的 sub-menu 的 index 的数组 | Array    | — | — |
| unique-opened  | 是否只保持一个子菜单的展开 | boolean   | — | false   |
| menu-trigger  | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效) | string   | hover / click | hover |
| router  | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean   | — | false   |
| collapse-transition  | 是否开启折叠动画 | boolean   | — | true   |

### Menu Methods
| 方法名称      | 说明    | 参数      |
|---------- |-------- |---------- |
| open  | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close  | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

### Menu Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| select  | 菜单激活回调 | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path  |
| open  | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path  |
| close  | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path  |

### SubMenu Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string/null  | — | null |
| popper-class | 弹出菜单的自定义类名 | string | — | — |
| show-timeout | 展开 sub-menu 的延时 | number | — | 300 |
| hide-timeout | 收起 sub-menu 的延时 | number | — | 300 |
| disabled  | 是否禁用 | boolean | — | false |
| popper-append-to-body | 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性 | boolean | — | 一级子菜单：true / 非一级子菜单：false |

### Menu-Item Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string  | — | — |
| route     | Vue Router 路径对象 | Object | — | — |
| disabled  | 是否禁用 | boolean | — | false |

### Menu-Group Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 分组标题   | string  | — | — |
