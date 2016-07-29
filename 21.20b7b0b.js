webpackJsonp([21],{46:function(s,n){var a,t;s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]),t&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=t)},106:function(s,n,a){s.exports=a(46),'<h1>Index List</h1>\n<blockquote>\n<p>索引列表，可由右侧索引导航快速定位到相应的内容。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { IndexList, IndexSection } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(IndexList.name, IndexList);\nVue.component(IndexSection.name, IndexSection);\n</code></pre>\n<h2>例子</h2>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-index-list</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-index-section</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"A"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Aaron"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Alden"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Austin"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-index-section</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"B"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Baldwin"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Braden"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-section</span>&gt;</span>\n  ...\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-index-section</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"Z"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Zack"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Zane"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-section</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-list</span>&gt;</span>\n</code></pre>\n<p><code>mt-index-section</code> 与右侧导航中的索引一一对应，<code>mt-index-section</code> 的 <code>index</code> 属性即为与其对应的索引的显示文本。<code>mt-index-section</code> 标签内可为任意自定义内容。</p>\n<p>当手指在右侧导航中滑动时，会在列表中间显示一个目前索引值的提示符。若不需要提示符，只需将 <code>show-indicator</code> 设为 <code>false</code></p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-index-list</span> <span class="hljs-attr">:show-indicator</span>=<span class="hljs-string">"false"</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-list</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<h3>mt-index-list</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>height</td>\n<td>组件的高度。若不指定，则自动延伸至视口底</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>showIndicator</td>\n<td>是否显示索引值提示符</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n</tbody>\n</table></div><h3>mt-index-section</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>index</td>\n<td>索引值（必需参数）</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<h3>mt-index-list</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>一个或多个 <code>mt-index-section</code> 组件</td>\n</tr>\n</tbody>\n</table></div><h3>mt-index-section</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>单个 <code>mt-index-section</code> 的内容</td>\n</tr>\n</tbody>\n</table></div>'!==s.exports.template&&(s.exports.template='<h1>Index List</h1>\n<blockquote>\n<p>索引列表，可由右侧索引导航快速定位到相应的内容。</p>\n</blockquote>\n<hr>\n<h2>引入</h2>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { IndexList, IndexSection } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(IndexList.name, IndexList);\nVue.component(IndexSection.name, IndexSection);\n</code></pre>\n<h2>例子</h2>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-index-list</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-index-section</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"A"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Aaron"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Alden"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Austin"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-index-section</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"B"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Baldwin"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Braden"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-section</span>&gt;</span>\n  ...\n  <span class="hljs-tag">&lt;<span class="hljs-name">mt-index-section</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"Z"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Zack"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mt-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Zane"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mt-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-section</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-list</span>&gt;</span>\n</code></pre>\n<p><code>mt-index-section</code> 与右侧导航中的索引一一对应，<code>mt-index-section</code> 的 <code>index</code> 属性即为与其对应的索引的显示文本。<code>mt-index-section</code> 标签内可为任意自定义内容。</p>\n<p>当手指在右侧导航中滑动时，会在列表中间显示一个目前索引值的提示符。若不需要提示符，只需将 <code>show-indicator</code> 设为 <code>false</code></p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mt-index-list</span> <span class="hljs-attr">:show-indicator</span>=<span class="hljs-string">"false"</span>&gt;</span>\n  ...\n<span class="hljs-tag">&lt;/<span class="hljs-name">mt-index-list</span>&gt;</span>\n</code></pre>\n<h2>API</h2>\n<h3>mt-index-list</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>height</td>\n<td>组件的高度。若不指定，则自动延伸至视口底</td>\n<td>Number</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>showIndicator</td>\n<td>是否显示索引值提示符</td>\n<td>Boolean</td>\n<td></td>\n<td>true</td>\n</tr>\n</tbody>\n</table></div><h3>mt-index-section</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>index</td>\n<td>索引值（必需参数）</td>\n<td>String</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><h2>Slot</h2>\n<h3>mt-index-list</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>一个或多个 <code>mt-index-section</code> 组件</td>\n</tr>\n</tbody>\n</table></div><h3>mt-index-section</h3>\n<div class="table-container"><table class="table"><thead>\n<tr>\n<th>name</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>单个 <code>mt-index-section</code> 的内容</td>\n</tr>\n</tbody>\n</table></div>')}});