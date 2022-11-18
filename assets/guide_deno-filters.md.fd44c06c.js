import{_ as e,c as n,o as s,a}from"./app.806e251a.js";const F=JSON.parse('{"title":"Deno Filters","description":"","frontmatter":{"title":"Deno Filters"},"headers":[{"level":2,"title":"Installing Deno","slug":"installing-deno","link":"#installing-deno","children":[]},{"level":2,"title":"Running Deno code as Filter","slug":"running-deno-code-as-filter","link":"#running-deno-code-as-filter","children":[]},{"level":2,"title":"Requirements and Dependencies","slug":"requirements-and-dependencies","link":"#requirements-and-dependencies","children":[]}],"relativePath":"guide/deno-filters.md","lastUpdated":1668762818000}'),t={name:"guide/deno-filters.md"},l=a(`<h1 id="deno-filters" tabindex="-1">Deno Filters <a class="header-anchor" href="#deno-filters" aria-hidden="true">#</a></h1><p>Deno is a new age javascript/typescript runtime with first class typescript support.</p><h2 id="installing-deno" tabindex="-1">Installing Deno <a class="header-anchor" href="#installing-deno" aria-hidden="true">#</a></h2><p>Before you can run deno filters, you will need to <a href="https://deno.land/" target="_blank" rel="noreferrer">install Deno</a>.</p><h2 id="running-deno-code-as-filter" tabindex="-1">Running Deno code as Filter <a class="header-anchor" href="#running-deno-code-as-filter" aria-hidden="true">#</a></h2><p>The syntax for running a deno filter is this:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">runWith</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">deno</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./filters/example.ts</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="requirements-and-dependencies" tabindex="-1">Requirements and Dependencies <a class="header-anchor" href="#requirements-and-dependencies" aria-hidden="true">#</a></h2><p>Deno manages and installs dependencies on runtime. So no additional setup required.</p>`,9),o=[l];function r(i,p,d,c,u,D){return s(),n("div",null,o)}const y=e(t,[["render",r]]);export{F as __pageData,y as default};
