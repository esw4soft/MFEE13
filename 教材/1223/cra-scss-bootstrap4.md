# SASS/SCSS - CRA(create-react-app)+Bootstrap4 SCSS搭配使用

## 第一部份：CRA加入SASS(SCSS)導入支援

### 步驟1. 安裝node-sass
```
# using npm
npm install node-sass@4.14.1 --save

# using yarn
yarn add node-sass@4.14.1
```

> `yarn remove node-sass` 移除目前的套件

### 步驟2. 更改 .css 檔案為 .scss

### 步驟3. 更改所有導入(import)樣式部份使用 .scss

```js
import './index.scss'
```

> 註：需要yarn start重啟react開發伺服器

> 參考：https://create-react-app.dev/docs/adding-a-sass-stylesheet/

## 第二部份：CRA加入Bootstrap4 SCSS檔案與導入

### 安裝bootstrap的npm模組

```sh
yarn add bootstrap

// use npm
npm install --save bootstrap
```

### 全站使用樣式 `index.scss`



> 在`src`目錄

```scss
@import './styles/custom.scss';

html {
 font-size: 12px;
}
body {
 margin: 0;
 padding: 0;
 font-family: sans-serif;
}
```

### 自訂樣式 `custom.scss`

建立一個`styles`資料夾，裡面建一個新檔案`custom.scss`

> 在`src/styles`目錄

全部導入的情況：

```scss
// Import Bootstrap and its default variables
@import '~bootstrap/scss/bootstrap.scss';

// 其它要導入覆蓋掉原本的預設bootstrap樣式要放在這下面
```

部份導入的情況：

```scss
@import './variables.scss';
@import '~bootstrap/scss/root';
@import '~bootstrap/scss/reboot';
@import '~bootstrap/scss/tables';
@import '~bootstrap/scss/type';
// @import "~bootstrap/scss/images";
// @import "~bootstrap/scss/code";
@import '~bootstrap/scss/grid';
@import '~bootstrap/scss/forms';
@import '~bootstrap/scss/buttons';
// @import "~bootstrap/scss/transitions";
@import '~bootstrap/scss/dropdown';
// @import "~bootstrap/scss/button-group";
// @import "~bootstrap/scss/input-group";
// @import "~bootstrap/scss/custom-forms";
// @import "~bootstrap/scss/nav";
// @import "~bootstrap/scss/navbar";
@import '~bootstrap/scss/breadcrumb';
// @import "~bootstrap/scss/card";
// @import "~bootstrap/scss/pagination";
@import '~bootstrap/scss/badge';
// @import "~bootstrap/scss/jumbotron";
// @import "~bootstrap/scss/alert";
// @import "~bootstrap/scss/progress";
// @import "~bootstrap/scss/media";
// @import "~bootstrap/scss/list-group";
// @import "~bootstrap/scss/close";
@import '~bootstrap/scss/modal';
// @import '~bootstrap/scss/tooltip';
// @import '~bootstrap/scss/popover';
// @import '~bootstrap/scss/carousel';
// @import '~bootstrap/scss/utilities';
// @import "~bootstrap/scss/print";

// 其它要導入覆蓋掉原本的預設bootstrap樣式要放在這下面
// Any other imports should go below so that CSS from your 
// components takes precedence over default bootstrap styles
```

### 覆蓋預設變數 variables.scss

在Bootstrap 4中只要是有包含`!default`標記的Sass變數是可以覆蓋的，並不需要更改到Bootstrap的原始檔案。

複製然後貼上需要的變數，然後修改它們的值，以及移除掉`!default`標記。

變數覆蓋需要在導入Bootstrap的Sass檔案之前。

> 在`src/styles`目錄

```scss
// Your custom theme/variable overrides go here

// Body
$body-bg: #fff;
$body-color: #ccc;
$app-min-width: 1024px;

// Required parts of Bootstrap
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
```
