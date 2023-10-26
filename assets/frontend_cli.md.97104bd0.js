import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.760d303a.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/cli.md","filePath":"frontend/cli.md"}'),l={name:"frontend/cli.md"},o=p(`<h2 id="create-vue" tabindex="-1">create-vue <a class="header-anchor" href="#create-vue" aria-label="Permalink to &quot;create-vue&quot;">​</a></h2><p>npm create vue@latest</p><p>在<code>create-vue</code> package.json</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;bin&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;create-vue&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;outfile.cjs&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;bin&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;create-vue&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;outfile.cjs&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><code>npm create vue</code> 实际是<code>npm init vue</code> 等同于 <code>npx create-vue</code></p><ul><li>如果不存在 create-vue 下载并执行 create-vue</li><li>如果全局存在 直接执行本地 create-vue</li></ul><p>outfile.cjs 文件需要设置 <code>#!/usr/bin/env node</code></p><h2 id="发布脚手架" tabindex="-1">发布脚手架 <a class="header-anchor" href="#发布脚手架" aria-label="Permalink to &quot;发布脚手架&quot;">​</a></h2><ul><li>npm</li><li>github devops</li></ul><h3 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h3><div class="language-bin vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bin</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm login</span></span>
<span class="line"><span style="color:#e1e4e8;">npm publish</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm login</span></span>
<span class="line"><span style="color:#24292e;">npm publish</span></span></code></pre></div><h3 id="github-devops" tabindex="-1">github devops <a class="header-anchor" href="#github-devops" aria-label="Permalink to &quot;github devops&quot;">​</a></h3><p>npm 生成 token github 仓库配置 token</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Publish Package to npmjs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># paths:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">#   - &#39;src/&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;**&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># Setup .npmrc file to publish to npm</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;16.x&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">registry-url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://registry.npmjs.org&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># - run: npm run build</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm publish</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">env</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">NODE_AUTH_TOKEN</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.NPM_TOKEN }}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Publish Package to npmjs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># paths:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">#   - &#39;src/&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;**&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># Setup .npmrc file to publish to npm</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;16.x&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">registry-url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://registry.npmjs.org&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># - run: npm run build</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">npm publish</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">env</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">NODE_AUTH_TOKEN</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.NPM_TOKEN }}</span></span></code></pre></div>`,14),e=[o];function t(c,r,E,i,y,u){return n(),a("div",null,e)}const b=s(l,[["render",t]]);export{h as __pageData,b as default};
