import{_ as e,c as o,o as t,a as s}from"./app.806e251a.js";const f=JSON.parse('{"title":"User Configuration","description":"","frontmatter":{"title":"User Configuration"},"headers":[{"level":2,"title":"Available Options","slug":"available-options","link":"#available-options","children":[{"level":3,"title":"use_project_app_data_storage: bool","slug":"use-project-app-data-storage-bool","link":"#use-project-app-data-storage-bool","children":[]},{"level":3,"title":"username: string","slug":"username-string","link":"#username-string","children":[]},{"level":3,"title":"resolvers: list[string]","slug":"resolvers-list-string","link":"#resolvers-list-string","children":[]}]},{"level":2,"title":"The regolith config command","slug":"the-regolith-config-command","link":"#the-regolith-config-command","children":[]},{"level":2,"title":"The structure of the user configuration file","slug":"the-structure-of-the-user-configuration-file","link":"#the-structure-of-the-user-configuration-file","children":[]},{"level":2,"title":"Example config file","slug":"example-config-file","link":"#example-config-file","children":[]}],"relativePath":"guide/user-configuration.md","lastUpdated":1668762818000}'),a={name:"guide/user-configuration.md"},n=s(`<h1 id="user-configuration" tabindex="-1">User Configuration <a class="header-anchor" href="#user-configuration" aria-hidden="true">#</a></h1><p>User configuration file is stored in the Regolith app data folder. On Windows, it&#39;s <code>%localappdata%\\regolith\\user_config.json</code><strong>*</strong>. The file is used to store the user preferences for Regolith.</p><h2 id="available-options" tabindex="-1">Available Options <a class="header-anchor" href="#available-options" aria-hidden="true">#</a></h2><h3 id="use-project-app-data-storage-bool" tabindex="-1"><code>use_project_app_data_storage: bool</code> <a class="header-anchor" href="#use-project-app-data-storage-bool" aria-hidden="true">#</a></h3><p>Default: <code>false</code></p><p>If set to <code>true</code>, the Regolith projects will store their cache (filters, their dependencies, etc.) in the app data folder, instead of the <code>.regolith</code> folder in the project folder.</p><h3 id="username-string" tabindex="-1"><code>username: string</code> <a class="header-anchor" href="#username-string" aria-hidden="true">#</a></h3><p>Default: <code>&quot;Your name&quot;</code></p><p>The username of the user, which will be used in the <code>author</code> field of the <code>manifest.json</code> file when creating a new project.</p><h3 id="resolvers-list-string" tabindex="-1"><code>resolvers: list[string]</code> <a class="header-anchor" href="#resolvers-list-string" aria-hidden="true">#</a></h3><p>Default: <code>[&quot;github.com/Bedrock-OSS/regolith-filter-resolver/resolver.json&quot;]</code></p><p>A list of resolvers, which will be used to resolve filter names to URLs for downloding when using the <code>regolith install</code> command. The default URL is always added to the end of the list. Note that the &quot;URLs&quot; used by the resolvers are not actual URLs. They have two parts, separated by <code>/</code>. The first part is an url to a repository on GitHub, and the second part is a path to the resolver file relative to the root of the repository. For example, the default resolver is on the <code>github.com/Bedrock-OSS/regolith-filter-resolver</code> repository, in the <code>resolver.json</code> file, but <code>github.com/Bedrock-OSS/regolith-filter-resolver/resolver.json</code> is not a valid URL.</p><h2 id="the-regolith-config-command" tabindex="-1">The <code>regolith config</code> command <a class="header-anchor" href="#the-regolith-config-command" aria-hidden="true">#</a></h2><p>The <code>regolith config</code> command is used to manage the user configuration of Regolith. It can access and modify the user configuration file. The data is stored in the application data folder in the &quot;user_config.json&quot; file.</p><p>The behavior of the command changes based on the used flags and the number of provided arguments. The cheetsheet below shows the possible combinations of flags and arguments and what they do:</p><ul><li><code>regolith config</code> - printing all properties</li><li><code>regolith config &lt;key&gt;</code> - printing specified property</li><li><code>regolith config &lt;key&gt; &lt;value&gt;</code> - setting property value</li><li><code>regolith config &lt;key&gt; --delete</code> - deleting a property</li><li><code>regolith config &lt;key&gt; &lt;value&gt; --append</code> - appending to a list proeprty</li><li><code>regolith config &lt;key&gt; &lt;value&gt; --index &lt;index&gt;</code> - replacing item in a list property</li><li><code>regolith config &lt;key&gt; --index &lt;index&gt; --delete</code> - deleting item in a list property</li></ul><p>The commands that print text can take the <code>--full</code> flag to print configuration with the default values included (if they&#39;re not defined in the config file). Without the flag, the undefined properties will be printed as null or empty list.</p><h2 id="the-structure-of-the-user-configuration-file" tabindex="-1">The structure of the user configuration file <a class="header-anchor" href="#the-structure-of-the-user-configuration-file" aria-hidden="true">#</a></h2><p>The <code>user_config.json</code> file is just a regular JSON file without any nesting. You can edit it manually if you want to but you don&#39;t have to because everything can be done with the <code>regolith config</code> command.</p><h2 id="example-config-file" tabindex="-1">Example config file <a class="header-anchor" href="#example-config-file" aria-hidden="true">#</a></h2><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">use_project_app_data_storage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">username</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bedrock-OSS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">resolvers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">github.com/Bedrock-OSS/regolith-filter-resolver/resolver.json</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><hr><div class="info custom-block"><p class="custom-block-title">INFO</p><p>On other platforms you can refer to Go&#39;s <a href="https://pkg.go.dev/os#UserCacheDir" target="_blank" rel="noreferrer">os.UserCacheDir</a> documentation. It&#39;s in &quot;regolith&quot; subdirectory of the path returned by this function.</p></div>`,23),l=[n];function r(i,c,d,p,h,u){return t(),o("div",null,l)}const m=e(a,[["render",r]]);export{f as __pageData,m as default};
