## koa

koa 核心就是围绕中间件洋葱模型, 洋葱模型核心就是 koa-compose

```js
function middleware1(ctx, next) {
  console.log("middleware1");
  next();
  console.log("---->middleware1");
}
function middleware2(ctx, next) {
  console.log("middleware2");
  next();
  console.log("---->middleware2");
}
function middleware3(ctx, next) {
  console.log("middleware3");
  next();
  console.log("---->middleware3");
}
```

执行结果

```sh
middleware1
middleware2
middleware3
---->middleware3
---->middleware2
---->middleware1
```

compose 伪代码

```js
function compose(middleware) {
  return function (ctx, next) {
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      const fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
    }
  };
}
const fnMiddleware = compose(middleware1, middleware2, middleware3);
fnMiddleware("abc");
```
