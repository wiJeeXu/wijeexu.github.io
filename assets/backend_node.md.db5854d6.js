import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.bf7c2cc3.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/node.md","filePath":"backend/node.md"}'),l={name:"backend/node.md"},o=e(`<h2 id="异步-io" tabindex="-1">异步 IO <a class="header-anchor" href="#异步-io" aria-label="Permalink to &quot;异步 IO&quot;">​</a></h2><p>Node.js 异步 IO 回调实际是通过线程池 异步 API setTimeout、setInterval、process.nextTick、setImmediate process.nextTick -&gt; setImmediate -&gt; (setTimeout、setInterval)</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;setImmediate延迟调用1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  process.</span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;强势插入&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">setImmediate</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;setImmediate延迟调用2&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;setImmediate延迟调用1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  process.</span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;强势插入&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">setImmediate</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;setImmediate延迟调用2&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>setImmediate 延迟调用 1</p><p>强势插入</p><p>setImmediate 延迟调用 2</p><h2 id="buffer" tabindex="-1">Buffer <a class="header-anchor" href="#buffer" aria-label="Permalink to &quot;Buffer&quot;">​</a></h2><h3 id="buffer-混合编程" tabindex="-1">Buffer 混合编程 <a class="header-anchor" href="#buffer-混合编程" aria-label="Permalink to &quot;Buffer 混合编程&quot;">​</a></h3><ol><li>性能 C++ (申请内存)</li><li>非性能 javascript (分配内存策略)</li></ol><ul><li>Buffer 内存不是通过 V8 分配,属于堆外内存</li><li>node 在进程启动时就已经加载了它,并放在全局对象(global),无需 require 即可直接使用</li></ul>`,10),p=[o];function t(c,r,i,E,y,d){return a(),n("div",null,p)}const f=s(l,[["render",t]]);export{m as __pageData,f as default};
