## ES Module

### 特性

添加 type = module 的属性,就可以以 ES Module 的标准执行其中的 JS 代码

```html
<script type="module"></script>
```

1. ESM 自动采用严格模式,忽略 'use strict'
2. 每个 ES Module 都是运行在单独的私有作用域中
3. ESM 是通过 CORS 的方式请求外部 JS 模块
4. ESM 的 script 标签会延迟执行脚本,相当于普通 script defer

```html
<script defer></script>
<script type="module"></script>
```

### 导出

```js
export default name;
export var name;
export { name, age };
export { name as fooName };
export { name as default }
```

- export 引用传递,内部改动,导入的变量也会变化
- 不允许外部修改

### 导入

- 原生的 ESModule 导入文件路径需要完成，不能省略扩展名
- 原生使用相对路径(./module/index.js)不能省略./、绝对路径(/module/index.js),可以使用完整的 url 如 http://localhost:3000/module/index.js

```js
import "./module/index.js";
import { name } from "./module/index.js";
import { name as fooName } from "./module/index.js";
import title, { name, age } from "./module/index.js";
// 动态导入
import("./module.js").then((module) => {});
```

### 导入导出

```js
export { name, age } from "module";
```
