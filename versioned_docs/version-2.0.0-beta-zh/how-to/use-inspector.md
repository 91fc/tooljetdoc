---
id: use-inspector
title: 使用检查器
---

在本操作指南中，我们将了解应用程序构建器的 **Inspector** 并了解它如何有助于构建应用程序。

Inspector 可用于检查画布上组件的查询数据、属性和值、ToolJet 的全局变量以及用户设置的变量。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/how-to/use-inspector/inspector.png" alt="How to - Use Inspector" width="500" />

</div>

## 布局

让我们看一下Inspector面板的布局：

- 在右上角，我们有一个 **Pin** 按钮来固定和取消固定检查面板。当您想在检查器上查看实时更改同时触发查询或对任何组件执行某些事件/操作时，此按钮会很有用。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-inspector/pin.png" alt="How to - Use Inspector" width="500" />

    </div>

- 在右下角，您可以单击并按住以调整检查器的大小。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-inspector/resize.png" alt="How to - Use Inspector" width="500" />

    </div>

- 将项目悬停在检查器上时，**复制路径**和**复制值**按钮将出现在项目的右侧。复制路径并将其粘贴到组件属性或查询参数将始终获得动态值，但使用 `复制值` uption 将复制项目的当前值，并且在粘贴到组件属性或查询参数时将是静态的。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-inspector/path.png" alt="How to - Use Inspector" width="500" />

    </div>

## 部分

检查器面板有以下 4 个主要部分：

- **[查询](#查询)**
- **[组件](#组件)**
- **[全局变量](#全局变量)**
- **[变量](#变量)**

### 查询

查询部分可用于检查查询详细信息，但查询数据仅在查询已运行/触发时可用。

:::tip
您可以单击查询管理器上按钮的预览按钮来检查查询的响应（数据）而不触发它。
:::

#### 例子

- 让我们使用模拟 REST API 端点 (`https://fakestoreapi.com/products`) 创建一个新查询。
- 现在转到 Inspector 并展开 **queries** 部分，您将在查询中看到一个条目，其中包含我们在上一步中创建的查询名称，即 `restapi1`，但如果您注意到 `data` 和 `rawData ` 对象为空，即 0 个条目。原因是除非运行查询，否则数据不会显示在检查器上。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-inspector/data0.png" alt="How to - Use Inspector" />

    </div>

- 让我们固定检查器，然后从查询管理器触发查询。您会看到，一旦查询被触发，查询中的 `rawData` 和 `data` 对象就有 20 个条目，并且查询有更多属性，如 `request`、`response` 和 `responseHeaders` 数据。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-inspector/data1.png" alt="How to - Use Inspector" />

    </div>

### 组件

组件部分可用于检查添加到画布上的组件的属性和值。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/how-to/use-inspector/components.png" alt="How to - Use Inspector" width="500" />

</div>

### 全局变量

全局部分包括以下子部分：

- **currentUser：** currentUser 对象包含有关当前登录用户的信息，例如 **email**、**firstName** 和 **lastName**。
- **groups:** groups 数组包含当前登录用户添加到的组的名称。注意：`all_users` 是每个人的默认组。
- **theme:** 主题对象包含当前活动主题的名称。
- **urlparam:** urlparams 包含有关应用程序的url 参数的信息。

:::info
可以在 ToolJet 应用程序内的任何位置访问所有全局变量。这是使用这些变量的**[用例示例](/docs/how-to/access-currentuser)**。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/how-to/use-inspector/globals.png" alt="How to - Use Inspector" width="500" />

</div>

### 变量

variables 部分包括用户在应用程序中设置的所有变量。这些变量可以从组件或查询的事件处理程序中设置。变量将在**键值**对中，并且可以在整个应用程序中访问。

:::info
- 从 [事件处理程序](/docs/actions/set-variable) 设置变量
- 从 [运行 JavaScript 代码](/docs/how-to/run-actions-from-runjs#set-variable) 设置变量
:::
