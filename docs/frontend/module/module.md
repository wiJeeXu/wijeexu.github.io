## Commonjs

1. 同步
2. 模块首次执行后会缓存,后续不再执行
3. 动态加载
4. 导出值是拷贝,修改的是拷贝的值,实际值没有修改
5. 混合导出 exports.name、module.exports.name

## ESModule

1. 支持动态导入,promise import('\*\*').then()
2. 混合导出
3. import \* from \*\* 静态导入,只能声明最顶部
4. 导出是引用值关系，值是只读的
