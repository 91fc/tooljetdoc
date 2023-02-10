---
id: adding-widget
title: 添加一个小部件
---

# 添加一个小部件

要添加小部件，请导航至右侧栏中的“小部件管理器”。它将显示可以添加到应用程序的内置小部件列表。使用搜索功能快速找到您想要的小部件。

<img className="screenshot-full" src="/img/tutorial/adding-widget/widget.png" alt="widget"/>

## 拖放一个小部件

让我们向应用程序添加一个“表格”小部件，以显示我们在前面步骤中创建的查询中的客户数据。
要添加小部件，请将小部件拖放到画布上。

## 调整小部件的大小

小部件可以在画布内调整大小和重新定位。

<img className="screenshot-full" src="/img/tutorial/adding-widget/resize.gif" alt="resize" />

## 将小部件添加到模态

添加一个widget到Modal，我们需要触发[Show modal action](/docs/tutorial/actions#available-actions)

:::info
在触发“Show modal action”之前，我们需要向画布添加一个模态小部件。
:::

- 向应用程序添加一个“模态小部件”
- 触发**显示模态动作**
- 单击“Widget manager”侧边栏的画布区域
- 导航到右侧栏上的小部件管理器并将小部件拖放到模式中

<img className="screenshot-full" src="/img/tutorial/adding-widget/modal.gif" alt="adding-widget" />

## 调整表格列的大小

我们可以使用列的调整大小句柄调整列宽。

<img className="screenshot-full" src="/img/tutorial/adding-widget/resize-table-column.gif" alt="resize-table-column" />

## 更改小部件属性

单击小部件以打开右侧栏上的检查面板。您可以在此处更改小部件的属性。让我们配置表列以显示客户数据。可以通过拖动列名称附近的图标来更改列的显示顺序。

<img className="screenshot-full" src="/img/tutorial/adding-widget/inspect-panel.gif" alt="检查面板" />

## 将数据与小部件连接

现在我们将“获取客户”查询的“数据”对象与表连接起来。单击表格小部件以打开右侧栏中的检查器。我们可以看到表的数据属性有一个空数组作为值。与编辑器上几乎所有其他字段一样，数据字段支持双括号内的单行 javascript 代码。当您在字段中键入代码时，变量建议将显示为下拉列表。

让我们选择“postgresql”查询的“数据”对象。

` {{queries.postgresql1.data}}`

由于我们已经在上一步中运行了查询，因此数据将立即显示在表中。

<img className="screenshot-full" src="/img/tutorial/adding-widget/table-data.png" alt="表格数据" />

到目前为止，在本教程中，我们已经连接到 PostgreSQL 数据库并将数据显示在表中。

:::tip
在 [此处](/docs/widgets/table) 阅读表的小部件参考，了解更多自定义设置，例如服务器端分页、操作、编辑数据。
:::
