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

## webpack

- webpack 运行原理 IIFE

  1. 自执行函数
  2. `__webpack_modules__` 对象 key 为文件路径, value 为函数

  ```js
  var __webpack_modules__ = {
    "./src/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      eval("代码");
    },
  };
  ```

  3. 定义`__webpack_require__`函数

  ```js
  function __webpack_require__(moduleId) {
    // 1. 判断是否有缓存，有直接return
    // 2. __webpack_modules__[moduleId](module, module.exports, __webpack_require__))
    return module.exports;
  }
  ```

  4.` __webpack_require__('./src/index.js')` 主入口运行`__webpack_require__`函数

### loader

资源文件输入输出 loader

假设开发 loader 把 markdown 文件导入转换 html 的 markdown-loader.js

```js
{
  test: /.md$/,
  use:  {
    loader: "./markdown-loader.js"
  },
},
```

```js
const marked = require("marked");
module.exports = function (source) {
  const html = marked.parse(source);
  return `export default ${JSON.stringify(html)}`; // 最终需要返回JS export default 或者 module.exports
};
```

考虑到一个文件可以使用多个 loader 可以改成

1. [官网](https://webpack.docschina.org/loaders)
2. [Awesome Webpack github 仓库](https://github.com/webpack-contrib/awesome-webpack)
3. npm 官网搜索 webpack-loader
4. 搜索引擎或者 chatgpt
5. github 搜索 webpack loader 关键词

```js
{
  test: /.md$/,
  use:  ['html-loader', "./markdown-loader.js"]
},
```

```js
const marked = require("marked");
module.exports = function (source) {
  const html = marked.parse(source);
  return html;
};
```

效果与上面一致, loader 的执行顺序是数组的最右边执行

webpack use 可以用 loader,这些 loader 我们可以走很多渠道去查找
如果有多个 loader 需要使用要用 use,当然也可以用 loader 关键词,如果只是一个 loader 并且需要配置选项也可以用 loader

### 插件

plugin 做其他事情,比如删除 dist，移动文件等  
假设我们要做一个清除打包后的`/****/`注释的插件

```js
const pluginName = "MyPlugin";
class MyPlugin {
  apply(compiler) {
    console.log("构建启动");
    compiler.hooks.emit.tap(pluginName, (params) => {
      for (const name in params.assets) {
        if (name.endsWith(".js")) {
          const contents = params.assets[name].source();
          const withoutComments = contents.replace(/\/\*\*+\*\//g, "");
          params.assets[name] = {
            source: () => withoutComments,
            size: () => withoutComments.length,
          };
        }
      }
    });
  }
}
```

正常执行是自左向右,实际是根据 plugin 的钩子,这点和 loader 不一样
hooks 有很多，具体要去官网看详情

webpack 有许多插件,这些插件我们可以走很多渠道去查找

1. [官网](https://webpack.docschina.org/plugins)
2. [Awesome Webpack github 仓库](https://github.com/webpack-contrib/awesome-webpack)
3. npm 官网搜索 webpack-plugin
4. 搜索引擎或者 chatgpt
