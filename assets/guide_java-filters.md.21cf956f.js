import{_ as a,c as e,o as n,a as s}from"./app.806e251a.js";const v=JSON.parse('{"title":"Java Filters","description":"","frontmatter":{"title":"Java Filters"},"headers":[{"level":2,"title":"Installing Java","slug":"installing-java","link":"#installing-java","children":[]},{"level":2,"title":"Running Java applications as Filter","slug":"running-java-applications-as-filter","link":"#running-java-applications-as-filter","children":[]},{"level":2,"title":"Dependencies","slug":"dependencies","link":"#dependencies","children":[]}],"relativePath":"guide/java-filters.md","lastUpdated":1668762818000}'),l={name:"guide/java-filters.md"},t=s(`<h1 id="java-filters" tabindex="-1">Java Filters <a class="header-anchor" href="#java-filters" aria-hidden="true">#</a></h1><p>Java is a high-level compiled language, that runs inside the Java Virtual Machine.</p><h2 id="installing-java" tabindex="-1">Installing Java <a class="header-anchor" href="#installing-java" aria-hidden="true">#</a></h2><p>Before you can run Java filters, you will need to install Java Development Kit.</p><p>There are many available JDKs to choose from. Few recommended are:</p><ul><li><a href="https://jdk.java.net/" target="_blank" rel="noreferrer">OpenJDK</a></li><li><a href="https://adoptopenjdk.net/" target="_blank" rel="noreferrer">AdoptOpenJDK</a></li><li><a href="https://bell-sw.com/pages/downloads/" target="_blank" rel="noreferrer">LibericaJDK</a></li></ul><h2 id="running-java-applications-as-filter" tabindex="-1">Running Java applications as Filter <a class="header-anchor" href="#running-java-applications-as-filter" aria-hidden="true">#</a></h2><p>The syntax for running a java jar is this:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">runWith</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">java</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./filters/example.jar</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-hidden="true">#</a></h2><p>All dependencies should be bundled into a &quot;fat JAR&quot; as this filter type does not have an automatic dependency fetching.</p>`,11),i=[t];function r(o,p,c,d,h,u){return n(),e("div",null,i)}const f=a(l,[["render",r]]);export{v as __pageData,f as default};
