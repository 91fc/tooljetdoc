---
id: code-editor
title: 代码编辑器
---
# 代码编辑器

代码编辑器小部件是一种用于编辑代码的多功能文本编辑器，并支持多种语言。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/code-editor/editor.png" alt="ToolJet - 小部件参考 - 代码编辑器" />

</div>

## 特性

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/code-editor/prop.png" alt="ToolJet - 小部件参考 - 代码编辑器" />

</div>

| 属性     | 说明                                   | 期望值                                         |
| -------- | -------------------------------------- | ---------------------------------------------- |
| 占位符   | 它指定了一个描述预期值的提示。         | 此字段需要一个 `String` 值                     |
| 模式     | 它用于指定代码编辑器使用的语言。       | 有关所有支持语言的列表，请参阅下面的 `信息`    |
| 显示行号 | 此属性用于显示或隐藏编辑器左侧的行号。 | 此字段需要一个布尔值 `{{true}}` 或 `{{false}}` |

:::info
<details>
<summary>支持所有常用语言。</summary>
      <ul>
      <li>APL</li>
      <li>ASN.1</li>
      <li>Asterisk dialplan</li>
      <li>Brainfuck</li>
      <li>C, C++, C#</li>
      <li>Ceylon</li>
      <li>Clojure</li>
      <li>Closure Stylesheets (GSS)</li>
      <li>CMake</li>
      <li>COBOL</li>
      <li>CoffeeScript</li>
      <li>Common Lisp</li>
      <li>Crystal</li>
      <li>CSS</li>
      <li>Cypher</li>
      <li>Cython</li>
      <li>D</li>
      <li>Dart</li>
      <li>Django (templating language)</li>
      <li>Dockerfile</li>
      <li>diff</li>
      <li>DTD</li>
      <li>Dylan</li>
      <li>EBNF</li>
      <li>ECL</li>
      <li>Eiffel</li>
      <li>Elixir</li>
      <li>Elm</li>
      <li>Erlang</li>
      <li>Factor</li>
      <li>FCL</li>
      <li>Forth</li>
      <li>Fortran</li>
      <li>F#</li>
      <li>Gas (AT&amp;T-style assembly)</li>
      <li>Gherkin</li>
      <li>Go</li>
      <li>Groovy</li>
      <li>HAML</li>
      <li>Handlebars</li>
      <li>Haskell</li>
      <li>Haxe</li>
      <li>HTML embedded (JSP, ASP.NET)</li>
      <li>HTML mixed-mode</li>
      <li>HTTP</li>
      <li>IDL</li>
      <li>Java</li>
      <li>JavaScript (JSX)</li>
      <li>Jinja2</li>
      <li>Julia</li>
      <li>Kotlin</li>
      <li>LESS</li>
      <li>LiveScript</li>
      <li>Lua</li>
      <li>Markdown (GitHub-flavour)</li>
      <li>Mathematica</li>
      <li>mbox</li>
      <li>mIRC</li>
      <li>Modelica</li>
      <li>MscGen</li>
      <li>MUMPS</li>
      <li>Nginx</li>
      <li>NSIS</li>
      <li>N-Triples/N-Quads</li>
      <li>Objective C</li>
      <li>OCaml</li>
      <li>Octave (MATLAB)</li>
      <li>Oz</li>
      <li>Pascal</li>
      <li>PEG.js</li>
      <li>Perl</li>
      <li>PGP (ASCII armor)</li>
      <li>PHP</li>
      <li>Pig Latin</li>
      <li>PowerShell</li>
      <li>Properties files</li>
      <li>ProtoBuf</li>
      <li>Pug</li>
      <li>Puppet</li>
      <li>Python</li>
      <li>Q</li>
      <li>R</li>
      <li>RPM</li>
      <li>reStructuredText</li>
      <li>Ruby</li>
      <li>Rust</li>
      <li>SAS</li>
      <li>Sass</li>
      <li>Spreadsheet</li>
      <li>Scala</li>
      <li>Scheme</li>
      <li>SCSS</li>
      <li>Shell</li>
      <li>Sieve</li>
      <li>Slim</li>
      <li>Smalltalk</li>
      <li>Smarty</li>
      <li>Solr</li>
      <li>Soy</li>
      <li>Stylus</li>
      <li>SQL (several dialects)</li>
      <li>SPARQL</li>
      <li>Squirrel</li>
      <li>Swift</li>
      <li>sTeX, LaTeX</li>
      <li>Tcl</li>
      <li>Textile</li>
      <li>Tiddlywiki</li>
      <li>Tiki wiki</li>
      <li>TOML</li>
      <li>Tornado (templating language)</li>
      <li>troff (for manpages)</li>
      <li>TTCN</li>
      <li>TTCN Configuration</li>
      <li>Turtle</li>
      <li>Twig</li>
      <li>VB.NET</li>
      <li>VBScript</li>
      <li>Velocity</li>
      <li>Verilog/SystemVerilog</li>
      <li>VHDL</li>
      <li>Vue.js app</li>
      <li>Web IDL</li>
      <li>WebAssembly Text Format</li>
      <li>XML/HTML</li>
      <li>XQuery</li>
      <li>Yacas</li>
      <li>YAML</li>
      <li>YAML frontmatter</li>
      <li>Z80</li>
    </ul>
</details>
:::

### 一般的
#### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - 代码编辑器" />

</div>

## 布局

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/code-editor/layout.png" alt="ToolJet - 小部件参考 - 代码编辑器" />

</div>

| 布局         | 说明                                                                                                        |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| 在桌面上显示 | 打开或关闭以在桌面视图中显示小部件。您可以通过单击 Fx 设置值 `{{true}}` 或 `{{false}}` 以编程方式确定该值。 |
| 在手机上显示 | 打开或关闭以在移动视图中显示小部件。您可以通过单击 Fx 设置值 `{{true}}` 或 `{{false}}` 以编程方式确定该值。 |

## 风格

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/code-editor/styles.png" alt="ToolJet - 小部件参考 - 代码编辑器" />

</div>

| 款式     | 说明                                                                                                                                                                                                                 |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 能见度   | 打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。                                           |
| 禁用     | 默认情况下这是 `关闭` ，切换 `打开` 开关以锁定小部件并使其无法运行。您还可以通过单击旁边的 `Fx` 按钮以编程方式设置该值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。 |
| 边界半径 | 使用此属性修改编辑器的边框半径。该字段只需要从 `1` 到 `100` 的数值，默认为 `0` 。                                                                                                                                    |