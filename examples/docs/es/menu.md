## NavMenu

Menú que provee la navegación para tu sitio.

### Top bar

Top bar NavMenu puede ser usado en distinto escenarios.

:::demo Por defecto el menú es vertical, pero puede hacerlo horizontal asignando a la propiedad `mode` el valor 'horizontal'. Además, puede utilizar el componente de submenú para crear un menú de segundo nivel. Menú provee `background-color`, `text-color` y `active-text-color` para customizar los colores.

```html
<hu-menu :default-active="activeIndex" class="hu-menu-demo" mode="horizontal" @select="handleSelect">
  <hu-menu-item index="1">Processing Center</hu-menu-item>
  <hu-submenu index="2">
    <template slot="title">Workspace</template>
    <hu-menu-item index="2-1">item one</hu-menu-item>
    <hu-menu-item index="2-2">item two</hu-menu-item>
    <hu-menu-item index="2-3">item three</hu-menu-item>
    <hu-submenu index="2-4">
      <template slot="title">item four</template>
      <hu-menu-item index="2-4-1">item one</hu-menu-item>
      <hu-menu-item index="2-4-2">item two</hu-menu-item>
      <hu-menu-item index="2-4-3">item three</hu-menu-item>
    </hu-submenu>
  </hu-submenu>
  <hu-menu-item index="3" disabled>Info</hu-menu-item>
  <hu-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></hu-menu-item>
</hu-menu>
<div class="line"></div>
<hu-menu
  :default-active="activeIndex2"
  class="hu-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <hu-menu-item index="1">Processing Center</hu-menu-item>
  <hu-submenu index="2">
    <template slot="title">Workspace</template>
    <hu-menu-item index="2-1">item one</hu-menu-item>
    <hu-menu-item index="2-2">item two</hu-menu-item>
    <hu-menu-item index="2-3">item three</hu-menu-item>
    <hu-submenu index="2-4">
      <template slot="title">item four</template>
      <hu-menu-item index="2-4-1">item one</hu-menu-item>
      <hu-menu-item index="2-4-2">item two</hu-menu-item>
      <hu-menu-item index="2-4-3">item three</hu-menu-item>
    </hu-submenu>
  </hu-submenu>
  <hu-menu-item index="3" disabled>Info</hu-menu-item>
  <hu-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></hu-menu-item>
</hu-menu>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::

### Side bar

NavMenu vertical con sub-menús.

:::demo Puede utilizar el componente `hu-menu-item-group` para crear un grupo de menú, y el nombre del grupo estará determinado por la propiedad `title` o la propiedad `slot`.

```html
<hu-row class="tac">
  <hu-col :span="12">
    <h5>Default colors</h5>
    <hu-menu
      default-active="2"
      class="hu-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <hu-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <hu-menu-item-group title="Group One">
          <hu-menu-item index="1-1">item one</hu-menu-item>
          <hu-menu-item index="1-2">item one</hu-menu-item>
        </hu-menu-item-group>
        <hu-menu-item-group title="Group Two">
          <hu-menu-item index="1-3">item three</hu-menu-item>
        </hu-menu-item-group>
        <hu-submenu index="1-4">
          <template slot="title">item four</template>
          <hu-menu-item index="1-4-1">item one</hu-menu-item>
        </hu-submenu>
      </hu-submenu>
      <hu-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </hu-menu-item>
      <hu-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </hu-menu-item>
      <hu-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </hu-menu-item>
    </hu-menu>
  </hu-col>
  <hu-col :span="12">
    <h5>Custom colors</h5>
    <hu-menu
      default-active="2"
      class="hu-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <hu-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <hu-menu-item-group title="Group One">
          <hu-menu-item index="1-1">item one</hu-menu-item>
          <hu-menu-item index="1-2">item one</hu-menu-item>
        </hu-menu-item-group>
        <hu-menu-item-group title="Group Two">
          <hu-menu-item index="1-3">item three</hu-menu-item>
        </hu-menu-item-group>
        <hu-submenu index="1-4">
          <template slot="title">item four</template>
          <hu-menu-item index="1-4-1">item one</hu-menu-item>
        </hu-submenu>
      </hu-submenu>
      <hu-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </hu-menu-item>
      <hu-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </hu-menu-item>
      <hu-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </hu-menu-item>
    </hu-menu>
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
      }
    }
  }
</script>
```
:::

### Collapse

NavMenu vertical puede ser colapsado.

:::demo
```html
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">expand</el-radio-button>
  <el-radio-button :label="true">collapse</el-radio-button>
</el-radio-group>
<hu-menu default-active="2" class="hu-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <hu-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">Navigator One</span>
    </template>
    <hu-menu-item-group>
      <span slot="title">Group One</span>
      <hu-menu-item index="1-1">item one</hu-menu-item>
      <hu-menu-item index="1-2">item two</hu-menu-item>
    </hu-menu-item-group>
    <hu-menu-item-group title="Group Two">
      <hu-menu-item index="1-3">item three</hu-menu-item>
    </hu-menu-item-group>
    <hu-submenu index="1-4">
      <span slot="title">item four</span>
      <hu-menu-item index="1-4-1">item one</hu-menu-item>
    </hu-submenu>
  </hu-submenu>
  <hu-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">Navigator Two</span>
  </hu-menu-item>
  <hu-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">Navigator Three</span>
  </hu-menu-item>
  <hu-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">Navigator Four</span>
  </hu-menu-item>
</hu-menu>

<style>
  .hu-menu-vertical-demo:not(.hu-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::

### Atributos Menu
| Atributo          | Descripción                              | Tipo    | Valores aceptados     | Por defecto |
| ----------------- | ---------------------------------------- | ------- | --------------------- | ----------- |
| mode              | modo de presentación del menú            | string  | horizontal / vertical | vertical    |
| collapse          | si el menú está colapsado (solo en modo vertical) | boolean | —                     | false       |
| background-color  | color de fondo del menú (formato hexadecimal) | string  | —                     | #ffffff     |
| text-color        | color de texto del menú (formato hexadecimal) | string  | —                     | #303133     |
| active-text-color | color de text del menu-item activo (formato hexadecimal) | string  | —                     | #409EFF     |
| default-active    | índice del menu-item activo              | string  | —                     | —           |
| default-openeds   | arreglo que contiene las llaves del sub-menus activo | Array   | —                     | —           |
| unique-opened     | si solo un submenu puede ser activo      | boolean | —                     | false       |
| menu-trigger      | como dispara eventos sub-menus, solo funciona cuando `mode` es 'horizontal' | string  | hover / click      | hover   |
| router            | si el modo `vue-router` está activado. Si es verdadero, el índice será usado como 'path' para activar la ruta | boolean | —                     | false       |
| collapse-transition  | si se debe permitir collapse transition | boolean   | — | true   |

### Métodos Menu 
| Métodos de evento | Descripción                   | Parámetros                             |
| ---------------- | ----------------------------- | -------------------------------------- |
| open             | abre un sub-menu específico   | index: índice del sub-menu para abrir  |
| close            | cierra un sub-menu específico | index: índice del sub-menu para cerrar |

### Eventos Menu 
| Nombre de evento | Descripción                              | Parámetros                               |
| ---------------- | ---------------------------------------- | ---------------------------------------- |
| select           | callback ejecutado cuando el menú es activado | index: índice del menú activado, indexPath: index path del menú activado |
| open             | callback ejecutado cuando sub-menu se expande | index: índice del sub-menu expandido, indexPath: index path del sub-menu expandido |
| close            | callback ejecutado cuando sub-menu colapsa | index: índice del sub-menu colapsado, indexPath: index path del menú colapsado |

### Eventos Menu-Item 
| Nombre de evento | Descripción                              | Parámetros                 |
| ---------------- | ---------------------------------------- | -------------------------- |
| click            | callback ejecutado cuando se hace click sobre menu-item | el: instancia de menu-item |

### Atributos SubMenu 
| Atributo     | Descripción                              | Tipo   | Valores aceptados | Por defecto |
| ------------ | ---------------------------------------- | ------ | ----------------- | ----------- |
| index        | identificador único                      | string/null | —            | null        |
| popper-class | nombre personalizado de la clase del menú popup | string | —                 | —           |
| show-timeout | tiempo de espera antes de mostrar un submenú | number | —                 | 300         |
| hide-timeout | tiempo de espera antes de ocultar un submenú | number | —                 | 300         |
| disabled | si esta `disabled` el sub-menu | boolean | — | false |
| popper-append-to-body | si se debe agregar el menú emergente al cuerpo. Si la posición del menú es incorrecta, puede intentar ajustar este prop | boolean | - | level one Submenu: true / other Submenus: false |

### Atributos Menu-Item 
| Atributo | Descripción         | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------- | ------ | ----------------- | ----------- |
| index    | identificador único | string | —                 | —           |
| route    | Objeto Vue Router   | object | —                 | —           |
| disabled | si esta `disabled` | boolean | — | false |

### Atributos Menu-Group 
| Atributo | Descripción      | Tipo   | Valores aceptados | Por defecto |
| -------- | ---------------- | ------ | ----------------- | ----------- |
| title    | título del grupo | string | —                 | —           |
