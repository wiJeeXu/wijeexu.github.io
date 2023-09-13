import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.bf7c2cc3.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"company/date-component.md","filePath":"company/date-component.md"}'),p={name:"company/date-component.md"},o=l(`<h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">custom-date-picker</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dialogShow&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">@onSure</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onSure&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dateComponentInstance&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;last&quot;</span><span style="color:#E1E4E8;">&gt;上一天&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;next&quot;</span><span style="color:#E1E4E8;">&gt;下一天&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">custom-date-picker</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dialogShow&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">@onSure</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onSure&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dateComponentInstance&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;last&quot;</span><span style="color:#24292E;">&gt;上一天&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;next&quot;</span><span style="color:#24292E;">&gt;下一天&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      dialogShow: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onSure</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">startDate</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">endDate</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">desc</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// YYYY-MM-DD</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// type 1 天  2 周  3 月  4 年 5自定义</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// desc 今日 昨日 本周 本月 或者空字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">last</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;">  { </span><span style="color:#79B8FF;">startDate</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">endDate</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">desc</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$refs.dateComponentInstance.</span><span style="color:#B392F0;">prevRange</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2023-09-13&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2023-09-13&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// 2023-09-12 2023-09-12 1  &#39;昨日&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">     console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(startDate, endDate, type, desc)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;">  { </span><span style="color:#79B8FF;">startDate</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">endDate</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">desc</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$refs.dateComponentInstance.</span><span style="color:#B392F0;">nextRange</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2023-09-13&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2023-09-13&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">// 2023-09-14 2023-09-14 1  &#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(startDate, endDate, type, desc)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      dialogShow: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onSure</span><span style="color:#24292E;">({ </span><span style="color:#E36209;">startDate</span><span style="color:#24292E;">, </span><span style="color:#E36209;">endDate</span><span style="color:#24292E;">, </span><span style="color:#E36209;">type</span><span style="color:#24292E;">, </span><span style="color:#E36209;">desc</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// YYYY-MM-DD</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// type 1 天  2 周  3 月  4 年 5自定义</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// desc 今日 昨日 本周 本月 或者空字符串</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">last</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">const</span><span style="color:#24292E;">  { </span><span style="color:#005CC5;">startDate</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">endDate</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">type</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">desc</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$refs.dateComponentInstance.</span><span style="color:#6F42C1;">prevRange</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2023-09-13&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2023-09-13&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 2023-09-12 2023-09-12 1  &#39;昨日&#39;</span></span>
<span class="line"><span style="color:#24292E;">     console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(startDate, endDate, type, desc)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;">  { </span><span style="color:#005CC5;">startDate</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">endDate</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">type</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">desc</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$refs.dateComponentInstance.</span><span style="color:#6F42C1;">nextRange</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2023-09-13&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2023-09-13&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">// 2023-09-14 2023-09-14 1  &#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(startDate, endDate, type, desc)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否显示组件弹框</td><td>boolean</td><td>-</td></tr><tr><td>maxDate</td><td>最大日期</td><td>string</td><td>今天(YYYY-MM-DD),比如<code>2023-09-12</code></td></tr></tbody></table><h2 id="events" tabindex="-1">events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;events&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>回掉参数</th></tr></thead><tbody><tr><td>onSure</td><td>确认日期回调</td><td><code>{ startDate: string, endDate: string, type: number, desc: string}</code></td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><p>通过 ref 获取组件实例方法</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>prevRange</td><td>获取上一(天，周，月，年)</td><td>startDate: string, endDate: string, type: number</td><td><code>{ startDate: string, endDate: string, type: number, desc: string}</code></td></tr><tr><td>nextRange</td><td>获取下一(天，周，月，年)</td><td>startDate: string, endDate: string, type: number</td><td><code>{ startDate: string, endDate: string, type: number, desc: string}</code></td></tr></tbody></table>`,10),t=[o];function e(c,r,E,y,d,i){return n(),a("div",null,t)}const u=s(p,[["render",e]]);export{h as __pageData,u as default};