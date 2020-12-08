## Bouton

Bouton communément utilisé.

### Usage

:::demo Utilisez `type`, `plain`, `round` et `circle` pour définir le style du bouton.

```html
<hu-row>
  <hu-button>Défaut</hu-button>
  <hu-button type="primary">Primary</hu-button>
  <hu-button type="success">Success</hu-button>
  <hu-button type="info">Info</hu-button>
  <hu-button type="warning">Warning</hu-button>
  <hu-button type="danger">Danger</hu-button>
</hu-row>

<hu-row>
  <hu-button plain>Plein</hu-button>
  <hu-button type="primary" plain>Primary</hu-button>
  <hu-button type="success" plain>Success</hu-button>
  <hu-button type="info" plain>Info</hu-button>
  <hu-button type="warning" plain>Warning</hu-button>
  <hu-button type="danger" plain>Danger</hu-button>
</hu-row>

<hu-row>
  <hu-button round>Arrondi</hu-button>
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

### Bouton désactivé

L'attribut `disabled` détermine si le bouton est désactivé.

:::demo Utilisez l'attribut `disabled` pour déterminer si un bouton est désactivé ou non. Il accepte un `Boolean`.

```html
<hu-row>
  <hu-button disabled>Défaut</hu-button>
  <hu-button type="primary" disabled>Principal</hu-button>
  <hu-button type="success" disabled>Succès</hu-button>
  <hu-button type="info" disabled>Info</hu-button>
  <hu-button type="warning" disabled>Attention</hu-button>
  <hu-button type="danger" disabled>Danger</hu-button>
</hu-row>

<hu-row>
  <hu-button plain disabled>Plein</hu-button>
  <hu-button type="primary" plain disabled>Principal</hu-button>
  <hu-button type="success" plain disabled>Succès</hu-button>
  <hu-button type="info" plain disabled>Info</hu-button>
  <hu-button type="warning" plain disabled>Attention</hu-button>
  <hu-button type="danger" plain disabled>Danger</hu-button>
</hu-row>
```
:::

### Bouton texte

Bouton sans bordure ni fond.

:::demo
```html
<hu-button type="text">Bouton texte</hu-button>
<hu-button type="text" disabled>Bouton texte</hu-button>
```
:::

### Icône

Utilisez des icônes pour ajouter plus de sens aux boutons. Vous pouvez utiliser uniquement l'icône pour économiser de l'espace, ou bien l'utiliser avec du texte.

:::demo Utilisez l'attribut `icon` pour ajouter une icône. Vous pourrez trouver la liste des icônes dans le composant Icon d'Element. Ajouter des icônes sur le coté droit du texte est possible grâce à la balise `<i>`. Des icônes personnalisées peuvent également être utilisées.

```html
<hu-button type="primary" icon="hu-icon-edit"></hu-button>
<hu-button type="primary" icon="hu-icon-share"></hu-button>
<hu-button type="primary" icon="hu-icon-delete"></hu-button>
<hu-button type="primary" icon="hu-icon-search">Recherche</hu-button>
<hu-button type="primary">Upload<i class="hu-icon-upload hu-icon-right"></i></hu-button>
```
:::

### Groupes de boutons

Affiche un groupe de bouton. Peut être utilisé pour grouper un ensemble d'opérations similaires.

:::demo Utilisez la balise `<hu-button-group>` pour grouper vos boutons.

```html
<hu-button-group>
  <hu-button type="primary" icon="hu-icon-arrow-left">Page précédente</hu-button>
  <hu-button type="primary">Page suivante<i class="hu-icon-arrow-right hu-icon-right"></i></hu-button>
</hu-button-group>
<hu-button-group>
  <hu-button type="primary" icon="hu-icon-edit"></hu-button>
  <hu-button type="primary" icon="hu-icon-share"></hu-button>
  <hu-button type="primary" icon="hu-icon-delete"></hu-button>
</hu-button-group>
```
:::

### Bouton en chargement

Cliquez sur le bouton pour charger des données et il affichera un état de chargement.

:::demo Configurez l'attribut `loading` à `true` pour afficher un état de chargement.

```html
<hu-button type="primary" :loading="true">Chargement</hu-button>
```
:::

### Tailles

En plus de la taille par défaut, le composant Button fournit trois tailles supplémentaires pour différents scénarios.

:::demo Utilisez l'attribut `size` pour choisir d'autres tailles parmi `medium`, `small` ou `mini`.

```html
<hu-row>
  <hu-button>Défaut</hu-button>
  <hu-button size="medium">Medium</hu-button>
  <hu-button size="small">Small</hu-button>
  <hu-button size="mini">Mini</hu-button>
</hu-row>
<hu-row>
  <hu-button round>Défaut</hu-button>
  <hu-button size="medium" round>Medium</hu-button>
  <hu-button size="small" round>Small</hu-button>
  <hu-button size="mini" round>Mini</hu-button>
</hu-row>
```
:::

### Attributs
| Attribut      | Description    | Type      | Valeurs acceptées       | Défaut   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | Taille du bouton.   | string  |   medium / small / mini            |    —     |
| type     | Type du bouton.   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | Détermine si le bouton est plein.   | boolean    | — | false   |
| round     | Détermine si le bouton est arrondi.   | boolean    | — | false   |
| circle     | Détermine si le bouton est un cercle.   | boolean    | — | false   |
| loading   | Détermine si l'état de chargement est affiché.   | boolean    | — | false   |
| disabled  | Désactive le bouton    | boolean   | —   | false   |
| icon  | Classe de l'icône. | string   |  —  |  —  |
| autofocus  | Identique à l'attribut natif `autofocus` | boolean   |  —  |  false  |
| native-type | Identique à l'attribut natif `type` | string | button / submit / reset | button |
