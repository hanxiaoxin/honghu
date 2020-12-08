## Contenedor
Componentes contenedores para iniciar una estructura básica de un sitio:

`<hu-container>`: Contenedor. Cuando este elemento se anida con un `<hu-header>` o `<hu-footer>`, todos los elementos secundarios se organizan verticalmente.
De lo contrario, de forma horizontal. 

`<hu-header>`: Contenedor para cabeceras.

`<hu-aside>`: Contenedor para secciones laterales (generalmente, una barra lateral).

`<hu-main>`: Contenedor para sección principal.

`<hu-footer>`: Contenedor para pie de página.

:::tip
Estos componentes utilizan flex para el diseño, así que asegúrese que el navegador lo soporta. Además, los elementos directos de `<hu-container>` tienen que ser uno o más de los últimos cuatro componentes. Y el elemento padre de los últimos cuatro componentes debe ser un `<hu-container>`.
:::

### Diseños comunes

:::demo
```html
<hu-container>
  <hu-header>Cabecera</hu-header>
  <hu-main>Principal</hu-main>
</hu-container>

<hu-container>
  <hu-header>Cabecera</hu-header>
  <hu-main>Principal</hu-main>
  <hu-footer>Pie de página</hu-footer>
</hu-container>

<hu-container>
  <hu-aside width="200px">Barra lateral</hu-aside>
  <hu-main>Principal</hu-main>
</hu-container>

<hu-container>
  <hu-header>Cabecera</hu-header>
  <hu-container>
    <hu-aside width="200px">Barra lateral</hu-aside>
    <hu-main>Principal</hu-main>
  </hu-container>
</hu-container>

<hu-container>
  <hu-header>Cabecera</hu-header>
  <hu-container>
    <hu-aside width="200px">Barra lateral</hu-aside>
    <hu-container>
      <hu-main>Principal</hu-main>
      <hu-footer>Pie de página</hu-footer>
    </hu-container>
  </hu-container>
</hu-container>

<hu-container>
  <hu-aside width="200px">Barra lateral</hu-aside>
  <hu-container>
    <hu-header>Cabecera</hu-header>
    <hu-main>Principal</hu-main>
  </hu-container>
</hu-container>

<hu-container>
  <hu-aside width="200px">Barra lateral</hu-aside>
  <hu-container>
    <hu-header>Cabecera</hu-header>
    <hu-main>Principal</hu-main>
    <hu-footer>Pie de página</hu-footer>
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

### Ejemplo

:::demo
```html
<hu-container style="height: 500px; border: 1px solid #eee">
  <hu-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <hu-menu :default-openeds="['1', '3']">
      <hu-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
        <hu-menu-item-group>
          <template slot="title">Group 1</template>
          <hu-menu-item index="1-1">Option 1</hu-menu-item>
          <hu-menu-item index="1-2">Option 2</hu-menu-item>
        </hu-menu-item-group>
        <hu-menu-item-group title="Group 2">
          <hu-menu-item index="1-3">Option 3</hu-menu-item>
        </hu-menu-item-group>
        <hu-submenu index="1-4">
          <template slot="title">Option4</template>
          <hu-menu-item index="1-4-1">Option 4-1</hu-menu-item>
        </hu-submenu>
      </hu-submenu>
      <hu-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
        <hu-menu-item-group>
          <template slot="title">Group 1</template>
          <hu-menu-item index="2-1">Option 1</hu-menu-item>
          <hu-menu-item index="2-2">Option 2</hu-menu-item>
        </hu-menu-item-group>
        <hu-menu-item-group title="Group 2">
          <hu-menu-item index="2-3">Option 3</hu-menu-item>
        </hu-menu-item-group>
        <hu-submenu index="2-4">
          <template slot="title">Option 4</template>
          <hu-menu-item index="2-4-1">Option 4-1</hu-menu-item>
        </hu-submenu>
      </hu-submenu>
      <hu-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
        <hu-menu-item-group>
          <template slot="title">Group 1</template>
          <hu-menu-item index="3-1">Option 1</hu-menu-item>
          <hu-menu-item index="3-2">Option 2</hu-menu-item>
        </hu-menu-item-group>
        <hu-menu-item-group title="Group 2">
          <hu-menu-item index="3-3">Option 3</hu-menu-item>
        </hu-menu-item-group>
        <hu-submenu index="3-4">
          <template slot="title">Option 4</template>
          <hu-menu-item index="3-4-1">Option 4-1</hu-menu-item>
        </hu-submenu>
      </hu-submenu>
    </hu-menu>
  </hu-aside>
  
  <hu-container>
    <hu-header style="text-align: right; font-size: 12px">
      <hu-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <hu-dropdown-menu slot="dropdown">
          <hu-dropdown-item>View</hu-dropdown-item>
          <hu-dropdown-item>Add</hu-dropdown-item>
          <hu-dropdown-item>Delete</hu-dropdown-item>
        </hu-dropdown-menu>
      </hu-dropdown>
      <span>Tom</span>
    </hu-header>
    
    <hu-main>
      <hu-table :data="tableData">
        <hu-table-column prop="date" label="Date" width="140">
        </hu-table-column>
        <hu-table-column prop="name" label="Name" width="120">
        </hu-table-column>
        <hu-table-column prop="address" label="Address">
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
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Atributos de contenedor
| Atributo  | Descripción                              | Tipo   | Valores aceptados     | Por defecto                              |
| --------- | ---------------------------------------- | ------ | --------------------- | ---------------------------------------- |
| direction | dirección de diseño para elementos secundarios | string | horizontal / vertical | vertical cuando el elemento está anidado con `hu-header`, de lo contrario, horizontal |

### Atributos de cabecera
| Atributo | Descripción           | Tipo   | Valores aceptados | Por defecto |
| -------- | --------------------- | ------ | ----------------- | ----------- |
| height   | altura de la cabecera | string | —                 | 60px        |

### Atributos de barra lateral
| Atributo | Descripción               | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------- | ------ | ----------------- | ----------- |
| width    | ancho de la barra lateral | string | —                 | 300px       |

### Atributos de pie de página
| Atributo | Descripción              | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------ | ------ | ----------------- | ----------- |
| height   | altura del pie de página | string | —                 | 60px        |
