## 异步 IO

Node.js 异步 IO 回调实际是通过线程池
异步 API setTimeout、setInterval、process.nextTick、setImmediate
process.nextTick -> setImmediate -> (setTimeout、setInterval)

```js
setImmediate(() => {
  console.log("setImmediate延迟调用1");
  process.nextTick(() => {
    console.log("强势插入");
  });
});

setImmediate(() => {
  console.log("setImmediate延迟调用2");
});
```

setImmediate 延迟调用 1

强势插入

setImmediate 延迟调用 2

## Buffer

### Buffer 混合编程

1. 性能 C++ (申请内存)
2. 非性能 javascript (分配内存策略)

- Buffer 内存不是通过 V8 分配,属于堆外内存
- node 在进程启动时就已经加载了它,并放在全局对象(global),无需 require 即可直接使用
