---
id: overview
title: 概述
---

# 组件：概述

组件用于构建应用程序的 UI。可以将它们从组件库拖到画布上，并且可以从属性面板进行修改，而无需编写任何代码。 **组件中的[事件处理程序](/docs/actions/event-handler)**允许最终用户触发查询和其他应用程序事件以执行**[操作](/docs/category/actions-reference)** .

## 添加组件

可以将组件从组件库（从应用程序构建器的右侧）拖放到画布上。只需单击并按住即可移动组件，并且可以从边缘或边框调整大小。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/overview/dragv2.gif" alt="组件：概览" />

</div>

### 选择多个组件

要一次移动**多个组件**，只需**shift+单击**，即可选择多个组件。分组后，组件可以在画布上移动，同时保持它们的相对位置。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/overview/selectv2.gif" alt="组件：概览" />

</div>

您还可以创建一个选择三角形并通过 `单击并拖动` 将多个组件一起移动

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/overview/dragselv2.gif" alt="组件：概览" />

</div>

:::tip
您还可以使用 ToolJet 中的许多其他**[键盘快捷键](/docs/tutorial/keyboard-shortcuts)** 将组件复制、剪切、粘贴到画布。
:::

## 组件属性

每个组件都可以从属性面板中修改和设置样式，例如 **数据** 字段、用于 **禁用** 组件的切换开关，或像 **背景颜色** 这样的样式。可以使用 **[Bindings](#bindings)** 直接或以编程方式修改属性，这使您能够编写 JavaScript 代码。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/overview/props.png" alt="组件：概览" />

</div>

## 组件事件处理器

可以在组件的 **属性面板** 或查询的 **高级** 部分中找到事件处理程序。事件处理程序可用于触发查询、执行 **[组件特定操作 - CSA](/docs/actions/control-component)** 或用于设置变量。

:::info
检查所有可用的操作**[此处](/docs/category/actions-reference)**。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/overview/events.png" alt="组件：概览" />

</div>

## 绑定

绑定允许您将动态数据获取到组件中。 **`{{}}`** 中的任何内容在 ToolJet 中都被评估为 JavaScript 表达式。

**`{{}}`** 中可以写任意的 JavaScript 代码：
```js
{{(function () {
        <your_javascript_code_here>
    })()
}}
```
or
```js
{{components.xyz.data.key === Sun ?? true : false}}
```

:::tip
查看操作指南，例如 **[更改表格列中文本的颜色](/docs/how-to/access-cellvalue-rowdata)**、 **[使用 JavaScript 启用/禁用组件](/docs/how-to/access-currentuser)** 和 **[更多](/docs/category/how-to)**。
:::

