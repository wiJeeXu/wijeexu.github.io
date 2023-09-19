import{_ as a,o as e,c as n,Q as t}from"./chunks/framework.bf7c2cc3.js";const p="/assets/image.68906079.png",r="/assets/image-1.2db788ef.png",s="/assets/image-2.741d483f.png",o="/assets/image-3.93fc9a13.png",q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/pnpm.md","filePath":"frontend/pnpm.md"}'),i={name:"frontend/pnpm.md"},m=t('<p>幻影依赖</p><p>理想依赖关系</p><p><img src="'+p+'" alt="理想依赖关系"></p><h2 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h2><p>文件树依赖 <img src="'+r+'" alt="npm文件树依赖"> 缺点: 磁盘空间大,安装重复的依赖包<br> 假设 A 包依赖 lodash 包, 项目 package.json 里面并没有声明 lodash,项目可以直接使用<br> 存在问题</p><ul><li>A 包升级,不存在 lodash,项目报错</li><li>A 包依赖的 lodash 是 dev 依赖, prod 上不会打包进去,导致项目报错</li></ul><h2 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h2><p><img src="'+s+'" alt="yarn"> 优点比 npm 节省磁盘<br> yarn 的做法是把所有包在 node_modules 拍平(扁平化),但是依然会有上面的问题,看不出依关系,比 npm 的优点缩小了磁盘空间</p><h2 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;pnpm&quot;">​</a></h2><p><img src="'+o+'" alt="pnpm"> 最佳实现 pnpm 是把所有包拍平存储到磁盘仓库内, node_modules 依赖快捷方式指向仓库,这样不会存在幻影依赖问题</p><h2 id="硬连接、软连接" tabindex="-1">硬连接、软连接 <a class="header-anchor" href="#硬连接、软连接" aria-label="Permalink to &quot;硬连接、软连接&quot;">​</a></h2><p>敬请期待</p>',12),l=[m];function d(c,_,h,f,u,g){return e(),n("div",null,l)}const P=a(i,[["render",d]]);export{q as __pageData,P as default};