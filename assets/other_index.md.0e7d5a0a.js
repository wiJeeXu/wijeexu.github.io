import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.760d303a.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/index.md","filePath":"other/index.md"}'),o={name:"other/index.md"},t=n('<h2 id="内网穿透" tabindex="-1">内网穿透 <a class="header-anchor" href="#内网穿透" aria-label="Permalink to &quot;内网穿透&quot;">​</a></h2><p>ngrok 和 frp</p><ul><li>ngrok 提供域名,免费提供一个域名,一个域名指定一个端口,子域名需要付费</li><li>frp 开源,但是服务器费用需要自己提供</li></ul><p>ngrok</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ngrok</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">http</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">端口</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ngrok</span><span style="color:#24292E;"> </span><span style="color:#032F62;">http</span><span style="color:#24292E;"> </span><span style="color:#032F62;">端口</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ngrok http --domain=域名 端口</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ngrok http --domain=域名 端口</span></span></code></pre></div><p>虽然 ngrok 一个域名指定一个端口,子域名需要付费,但是可以通过 nginx 转发 比如 域名/a 域名/b 可以通过 解析 a、b 去实现</p>',7),p=[t];function l(c,r,i,d,h,_){return a(),e("div",null,p)}const u=s(o,[["render",l]]);export{k as __pageData,u as default};