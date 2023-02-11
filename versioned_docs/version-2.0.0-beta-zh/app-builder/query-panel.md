---
id: query-panel
title: 查询面板
---

查询面板位于应用程序构建器的底部，您可以在此处创建查询以与连接的数据源进行交互。您可以执行 API 请求、查询 **[databases](/docs/data-sources/overview)** 或 **[transform](/docs/tutorial/transformations)** 或使用 **[JavaScript] 操作数据(/docs/data-sources/run-js)** & **[Python](/docs/data-sources/run-py)**。

查询面板有两个部分：
- **[查询管理器](#查询管理器)** 在右侧，包括所有已创建查询的列表
- **[查询编辑器](#查询编辑器)** 用于配置选择的查询

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/querypanel.png" alt="App Builder：组件库-右侧栏"/>

</div>

## 查询管理器

查询管理器将列出已在应用程序中创建的所有查询。查询管理器用于：

### 搜索

查询管理器的顶部是可用于搜索特定查询的搜索框。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/search.png" alt="App Builder：组件库-右侧边栏"/>

</div>

### 添加

添加按钮用于在应用程序中添加更多查询。单击 `添加` 按钮时，查询编辑器将向您显示用于创建查询的选项列表：**Rest API**、连接的**[数据源](/docs/data-sources/overview)**、** [ToolJet 数据库](/docs/tooljet-database)**, **[JavaScript 代码](/docs/data-sources/run-js)**, **[Python 代码](/docs/data-sources/ run-py)** 或添加新的数据源。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/add.png" alt="App Builder：组件库-右侧边栏"/>

</div>

### 删除

删除按钮将删除选定的查询，该按钮只会在您将鼠标悬停在查询名称上时显示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/delete.png" alt="App Builder：组件库-右侧栏"/>

</div>

### 编辑

编辑按钮用于编辑所选查询的名称，该按钮只会在您将鼠标悬停在查询名称上时显示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/edit.png" alt="App Builder：组件库-右侧边栏"/>

</div>

## 查询编辑器

查询编辑器用于配置查询参数，预览或转换查询返回的数据。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/editor.png" alt="App Builder：组件库-右侧边栏"/>

</div>

### 顶栏

在查询面板的顶部有几个选项：

#### 查询名称编辑器

通过单击默认查询名称旁边的编辑按钮来编辑查询名称。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/nameedit.png" alt="App Builder：组件库-右侧栏"/>

</div>

#### 预览

预览可让您快速查看查询返回的数据，而无需在应用程序中触发查询。

数据预览以两种不同的格式返回：

**生的**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/raw.png" alt="App Builder：组件库-右侧栏"/>

</div>

**JSON**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/json.png" alt="App Builder：组件库-右侧边栏"/>

</div>

#### 节省

保存用于在查询中进行更改时保存更改。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/save.png" alt="App Builder：组件库-右侧边栏"/>

</div>

#### 运行

运行 用于触发查询，运行查询将与应用程序进行交互，这与 `Preview` 不同。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/run.png" alt="App Builder：组件库-右侧栏"/>

</div>

### 查询参数

查询参数是查询从服务器返回响应所需的值。参数包括 **endpoints**、**methods** 或 **operations**。每个数据源的查询参数都不同。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/params.png" alt="App Builder：组件库-右侧栏"/>

</div>

### 转型

可以对查询启用转换以转换查询结果。 ToolJet 允许您使用两种编程语言 JavaScript 和 Python 转换查询结果。查看有关 **[Transformations](/docs/tutorial/transformations)** 的详细文档。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/transform.png" alt="App Builder：组件库-右侧边栏"/>

</div>

### 高级选项

#### 在应用程序加载时运行此查询？

启用此选项将在每次加载应用程序时触发查询。

#### 在运行查询之前请求确认？

如果您想触发该查询，启用此选项会显示确认模式以确认 `是` 或 `否` 。

#### 在应用程序加载时运行此查询？

启用此选项会在成功触发查询时显示成功 Toast 通知。

#### 事件处理程序

事件处理程序用于在特定事件发生时添加一些操作。您可以将事件处理程序添加到以下事件的查询中：

- **查询成功**
- **查询失败**

:::info
详细了解 [事件处理程序和操作](/docs/widgets/overview#component-event-handlers)。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/querypanel/advanced.png" alt="App Builder：组件库-右侧栏"/>

</div>