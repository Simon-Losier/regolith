import{_ as e,c as t,o as r,a}from"./app.806e251a.js";const m=JSON.parse('{"title":"Standard Library","description":"","frontmatter":{"title":"Standard Library"},"headers":[{"level":2,"title":"Standard Filters","slug":"standard-filters","link":"#standard-filters","children":[]},{"level":2,"title":"Using a Standard Filter","slug":"using-a-standard-filter","link":"#using-a-standard-filter","children":[]}],"relativePath":"standard-library.md","lastUpdated":1668762818000}'),s={name:"standard-library.md"},n=a(`<h1 id="standard-library" tabindex="-1">Standard Library <a class="header-anchor" href="#standard-library" aria-hidden="true">#</a></h1><p>The Standard Library is a special set of filters, written by the Regolith maintainers. Standard Filters offers the safest, easiest, and best support.</p><h2 id="standard-filters" tabindex="-1">Standard Filters <a class="header-anchor" href="#standard-filters" aria-hidden="true">#</a></h2><table><thead><tr><th>Filter</th><th>Description</th></tr></thead><tbody><tr><td><a href="https://github.com/Bedrock-OSS/regolith-filters/tree/master/blockbench_convert" target="_blank" rel="noreferrer">blockbench_convert</a></td><td>Converts blockbench models into <code>.geometry.json</code> files.</td></tr><tr><td><a href="https://github.com/Bedrock-OSS/regolith-filters/tree/master/bump_manifest" target="_blank" rel="noreferrer">bump_manifest</a></td><td>Bumps the manifest version in your RP and BP. Good for multiplayer testing where you need to avoid pack-caching issues.</td></tr><tr><td><a href="https://github.com/Bedrock-OSS/regolith-filters/tree/master/filter_tester" target="_blank" rel="noreferrer">filter_tester</a></td><td>Meant to be used by the filter developers to test other filters. It compares the expected results with the files generated by Regolith.</td></tr><tr><td><a href="https://github.com/Bedrock-OSS/regolith-filters/tree/master/fix_emissive" target="_blank" rel="noreferrer">fix_emissive</a></td><td>Fixes emissive issues in your textures, by removing the color data from fully transparent pixels.</td></tr><tr><td><a href="https://github.com/Bedrock-OSS/regolith-filters/tree/master/gametests" target="_blank" rel="noreferrer">gametests</a></td><td>Compiles gametests into pack.</td></tr><tr><td><a href="https://github.com/Bedrock-OSS/regolith-filters/tree/master/json_cleaner" target="_blank" rel="noreferrer">json_cleaner</a></td><td>Removes comments from all json files in the project. Useful, since some filters cannot understand files with comments.</td></tr><tr><td><a href="https://github.com/Bedrock-OSS/regolith-filters/tree/master/name_ninja" target="_blank" rel="noreferrer">name_ninja</a></td><td>Automatically generates entity, block, spawn egg, and item names, based on a custom &#39;name&#39; field, or on the entities identifier.</td></tr><tr><td><a href="https://github.com/Bedrock-OSS/regolith-filters/tree/master/texture_convert" target="_blank" rel="noreferrer">texture_convert</a></td><td>Converts popular image editor file formats, such as .psd to .png.</td></tr><tr><td><a href="https://github.com/Bedrock-OSS/regolith-filters/tree/master/texture_list" target="_blank" rel="noreferrer">texture_list</a></td><td>Automatically creates the <code>texture_list.json</code> file, based on the images you&#39;ve added into your resource pack.</td></tr></tbody></table><p>The full, up to date list of filters can be found on our github. We are looking into maintaining a list here, but for now please visit our GitHub.</p><h2 id="using-a-standard-filter" tabindex="-1">Using a Standard Filter <a class="header-anchor" href="#using-a-standard-filter" aria-hidden="true">#</a></h2><p>You may install standard filters by name. For example: <code>regolith install name_ninja</code>.</p><p>The syntax for standard filters usage is like this:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">filter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;filter_name&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">settings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> { ... </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Optional</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,9),o=[n];function l(i,d,c,p,h,f){return r(),t("div",null,o)}const g=e(s,[["render",l]]);export{m as __pageData,g as default};
