## NavMenu

Menu qui fournit un système de navigation à votre site.

### Barre du haut

La barre du haut peut être utilisée pour différents scénarios.

:::demo Par défaut le menu est vertical, mais vous pouvez le passer en horizontal en réglant l'attribut `mode` sur 'horizontal'. De plus, vous pouvez utiliser le composant submenu pour créer un second niveau niveau de menu. Le menu utilises `background-color`, `text-color` et `active-text-color` pour personnaliser les couleurs.
```html
<hu-menu :default-active="activeIndex" class="hu-menu-demo" mode="horizontal" @select="handleSelect">
  <hu-menu-item index="1">Centre de traitement</hu-menu-item>
  <hu-submenu index="2">
    <template slot="title">Lieu de travail</template>
    <hu-menu-item index="2-1">item un</hu-menu-item>
    <hu-menu-item index="2-2">item deux</hu-menu-item>
    <hu-menu-item index="2-3">item trois</hu-menu-item>
    <hu-submenu index="2-4">
      <template slot="title">item quatre</template>
      <hu-menu-item index="2-4-1">item un</hu-menu-item>
      <hu-menu-item index="2-4-2">item deux</hu-menu-item>
      <hu-menu-item index="2-4-3">item trois</hu-menu-item>
    </hu-submenu>
  </hu-submenu>
  <hu-menu-item index="3" disabled>Infos</hu-menu-item>
  <hu-menu-item index="4"><a href="https://www.ele.me" target="_blank">Commandes</a></hu-menu-item>
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
  <hu-menu-item index="1">Centre de traitement</hu-menu-item>
  <hu-submenu index="2">
    <template slot="title">Lieu de travail</template>
    <hu-menu-item index="2-1">item un</hu-menu-item>
    <hu-menu-item index="2-2">item deux</hu-menu-item>
    <hu-menu-item index="2-3">item trois</hu-menu-item>
    <hu-submenu index="2-4">
      <template slot="title">item quatre</template>
      <hu-menu-item index="2-4-1">item un</hu-menu-item>
      <hu-menu-item index="2-4-2">item deux</hu-menu-item>
      <hu-menu-item index="2-4-3">item trois</hu-menu-item>
    </hu-submenu>
  </hu-submenu>
  <hu-menu-item index="3" disabled>Info</hu-menu-item>
  <hu-menu-item index="4"><a href="https://www.ele.me" target="_blank">Commandes</a></hu-menu-item>
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

### Barre latérale

Menu vertical avec sous-menus.

:::demo Vous pouvez utiliser le composant hu-menu-item-group pour créer un groupe dans le menu dont le nom sera déterminé par celui de la propriété title ou d'un slot.
```html
<hu-row class="tac">
  <hu-col :span="12">
    <h5>Couleurs par défaut</h5>
    <hu-menu
      default-active="2"
      class="hu-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <hu-submenu index="1">
        <template slot="title">
          <i class="hu-icon-location"></i>
          <span>Navigateur Un</span>
        </template>
        <hu-menu-item-group title="Group Un">
          <hu-menu-item index="1-1">item un</hu-menu-item>
          <hu-menu-item index="1-2">item un</hu-menu-item>
        </hu-menu-item-group>
        <hu-menu-item-group title="Group Deux">
          <hu-menu-item index="1-3">item trois</hu-menu-item>
        </hu-menu-item-group>
        <hu-submenu index="1-4">
          <template slot="title">item quatre</template>
          <hu-menu-item index="1-4-1">item un</hu-menu-item>
        </hu-submenu>
      </hu-submenu>
      <hu-menu-item index="2">
        <i class="hu-icon-menu"></i>
        <span>Navigateur Deux</span>
      </hu-menu-item>
      <hu-menu-item index="3" disabled>
        <i class="hu-icon-document"></i>
        <span>Navigateur Trois</span>
      </hu-menu-item>
      <hu-menu-item index="4">
        <i class="hu-icon-setting"></i>
        <span>Navigateur Quatre</span>
      </hu-menu-item>
    </hu-menu>
  </hu-col>
  <hu-col :span="12">
    <h5>Couleurs personnalisées</h5>
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
          <i class="hu-icon-location"></i>
          <span>Navigateur Un</span>
        </template>
        <hu-menu-item-group title="Group Un">
          <hu-menu-item index="1-1">item un</hu-menu-item>
          <hu-menu-item index="1-2">item un</hu-menu-item>
        </hu-menu-item-group>
        <hu-menu-item-group title="Group Deux">
          <hu-menu-item index="1-3">item trois</hu-menu-item>
        </hu-menu-item-group>
        <hu-submenu index="1-4">
          <template slot="title">item quatre</template>
          <hu-menu-item index="1-4-1">item un</hu-menu-item>
        </hu-submenu>
      </hu-submenu>
      <hu-menu-item index="2">
        <i class="hu-icon-menu"></i>
        <span>Navigateur Deux</span>
      </hu-menu-item>
      <hu-menu-item index="3" disabled>
        <i class="hu-icon-document"></i>
        <span>Navigateur Trois</span>
      </hu-menu-item>
      <hu-menu-item index="4">
        <i class="hu-icon-setting"></i>
        <span>Navigateur Quatre</span>
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

### Menu réduit

Le menu vertical peut être réduit.

:::demo
```html
<hu-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <hu-radio-button :label="false">Agrandir</hu-radio-button>
  <hu-radio-button :label="true">Réduire</hu-radio-button>
</hu-radio-group>
<hu-menu default-active="2" class="hu-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <hu-submenu index="1">
    <template slot="title">
      <i class="hu-icon-location"></i>
      <span slot="title">Navigateur Un</span>
    </template>
    <hu-menu-item-group>
      <span slot="title">Group Un</span>
      <hu-menu-item index="1-1">item un</hu-menu-item>
      <hu-menu-item index="1-2">item deux</hu-menu-item>
    </hu-menu-item-group>
    <hu-menu-item-group title="Group Deux">
      <hu-menu-item index="1-3">item trois</hu-menu-item>
    </hu-menu-item-group>
    <hu-submenu index="1-4">
      <span slot="title">item quatre</span>
      <hu-menu-item index="1-4-1">item un</hu-menu-item>
    </hu-submenu>
  </hu-submenu>
  <hu-menu-item index="2">
    <i class="hu-icon-menu"></i>
    <span slot="title">Navigateur Deux</span>
  </hu-menu-item>
  <hu-menu-item index="3" disabled>
    <i class="hu-icon-document"></i>
    <span slot="title">Navigateur Trois</span>
  </hu-menu-item>
  <hu-menu-item index="4">
    <i class="hu-icon-setting"></i>
    <span slot="title">Navigateur Quatre</span>
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

### Attributs du menu

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | Mode d'affichage du menu.   | string  |   horizontal / vertical   | vertical |
| collapse  | Si le menu peut être réduit, uniquement disponible en mode vertical. | boolean  |   —   | false |
| background-color  | Couleur de fond du menu (format hexadécimal). | string |   —   | #ffffff |
| text-color  | Couleur du texte du menu (format hexadécimal) | string |   —   | #303133 |
| active-text-color  | Couleur du texte de l'item actif (format hexadécimal). | string |   —   | #409EFF |
| default-active | Index du menu actif. | string    | — | — |
| default-openeds | Liste contenant les index les sous-menus actifs.  | Array    | — | — |
| unique-opened  | Si un seul sous-menu peut être actif.  | boolean   | — | false   |
| menu-trigger | Comment les sous-menu sont déclenchés, uniquement en mode horizontal. | string    | hover / click | hover |
| router  | Si le mode `vue-router` est activé. Si `true`, l'index sera utilisé comme 'path' pour activer la route. | boolean   | — | false   |
| collapse-transition  | Si la transition de réduction doit être activée. | boolean   | — | true   |

### Méthodes du menu

| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| open  | Ouvre un sous-menu spécifique. | index: index du sous-menu à ouvrir |
| close  | Ferme un sous-menu spécifique. | index: index du sous-menu à fermer |

### Évènements du menu

| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| select  | Fonction de callback pour quand le menu est activé. | index: index du menu activé, indexPath: index path du menu activé.  |
| open  | Fonction de callback pour quand le sous-menu s'agrandit. | index: index of expanded sous-menu, indexPath: index path du sous-menu |
| close  | Fonction de callback pour quand le sous-menu se réduit. | index: index of collapsed sous-menu, indexPath: index path du sous-menu |

### Évènements des items du menu

| Nom | Description | Paramètres |
|---------- |-------- |---------- |
| click  | Fonction de callback pour quand le menu-item est cliqué. | el: instance du menu-item.  |

### Attributs du sous-menu

| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------- |---------- |-------------  |-------- |
| index     | Identificateur unique. | string  | — | — |
| popper-class | Classe du menu popup. | string | — | — |
| show-timeout | Délai avant de montrer un sous-menu. | number | — | 300 |
| hide-timeout | Délai avant de cacher un sous-menu. | number | — | 300 |
| disabled | Si le sous-menu est désactivé. | boolean | — | false |
| popper-append-to-body | S'il faut ajouter un menu popup au body. Si le positionnement du body n'est pas bon, vous pouvez essayer de régler cette propriété. | boolean | - | Sous-menus de niveau 1: true / autres sous-menus: false |

### Attributs des items du menu

| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------- |---------- |-------------  |-------- |
| index     | Identificateur unique. | string/null  | — | null |
| route     | Objet Vue Router. | object | — | — |
| disabled | Si l'item est désactivé. | boolean | — | false |

### Attributs des groupes

| Attributs      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------- |---------- |-------------  |-------- |
| title     | Titre du groupe. | string  | — | — |
