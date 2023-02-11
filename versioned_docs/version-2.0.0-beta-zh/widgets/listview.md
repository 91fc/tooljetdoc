---
id: listview
title: 列表视图
---
# 列表视图

列表视图小部件允许创建可重复的数据行列表。就像容器小部件一样，您可以在其中嵌套其他小部件并控制它们重复的次数。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/list-view/listviewapp.png" alt="ToolJet - 列表视图小部件" />

</div>

## 如何使用列表视图小部件



## 活动

### 行被点击

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/list-view/event.png" alt="ToolJet - 列表视图小部件" />

</div>

要向按钮添加事件，请单击小部件句柄以打开右侧栏中的小部件属性。转到 **Events** 部分并单击 **Add handler**。

**Row clicked** 单击按钮时触发事件。就像 ToolJet 上的任何其他事件一样，您可以为一个行单击事件设置多个操作。

:::info
查看 [Action Reference](/docs/category/actions-reference) 文档以获取有关所有 **Actions** 的详细信息。
:::

## 特性

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/list-view/properties.png" alt="ToolJet - 列表视图小部件" />

</div>

| 属性         | 说明                                                                           | 期望值                                                                                                                |
| ------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| 列表数据     | 在小部件中输入要显示的数据。对象数组形式的数据或来自返回对象数组的查询的数据。 | `{{ [ {id: 0, name: ABC, email: abc@bla.com}, {id: 1, name: XYZ, email: xyz@bla.com} ] }}` or `{{queries.xyz .data}}` |
| 行高         | 输入一个数值以相应地设置行高。                                                 | `1` 到 `100` 之间的任何数字                                                                                           |
| 显示底部边框 | 此属性允许您显示或隐藏行底部边框。                                             | 默认为 `{{true}}`，设置 `{{false}}` 隐藏边框                                                                          |

### 一般的
#### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 列表视图小部件" />

</div>

## 布局

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/list-view/listlayout.png" alt="ToolJet - 列表视图小部件" />

</div>

| 布局         | 说明                       | 期望值                                                                      |
| ------------ | -------------------------- | --------------------------------------------------------------------------- |
| 在桌面上显示 | 打开或关闭以显示桌面视图。 | 您可以通过单击 `Fx` 以设置值 `{{true}}` 或 `{{false}}` 来以编程方式确定该值 |
| 在手机上显示 | 打开或关闭以显示移动视图。 | 您可以通过单击 `Fx` 以设置值 `{{true}}` 或 `{{false}}` 来以编程方式确定该值 |

## 风格

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/list-view/style.png" alt="ToolJet - 列表视图小部件" />

</div>

| 款式     | 说明                                                                                                                                                               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 背景颜色 | 您可以通过输入十六进制颜色代码或从颜色选择器中选择您选择的颜色来更改小部件的背景颜色。                                                                             |
| 边框颜色 | 您可以通过输入 `十六进制颜色代码` 或从颜色选择器中选择您选择的颜色来更改列表视图的边框颜色。                                                                       |
| 能见度   | 这是为了控制小部件的可见性。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。它只能有布尔值，即 `{{true}}` 或 `{{false}}`。默认情况下，它设置为 `{{true}}` 。 |
| 禁用     | 此属性只接受布尔值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。                                                   |
| 边界半径 | 使用此属性修改列表视图的边框半径。该字段只需要从 `1` 到 `100` 的数值，默认为 `0` 。                                                                                |

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::

## 示例：在列表视图中显示数据

- 让我们首先创建一个新应用程序，然后将列表视图小部件拖到画布上。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/list-view/emptylist.png" alt="ToolJet - 列表视图小部件" />

</div>

- 现在让我们创建一个查询并从数据源下拉列表中选择 REST API。选择 `GET` 方法并输入 API 端点 - `https://reqres.in/api/users?page=1` 。保存此查询并触发它。检查左侧边栏中的查询结果，您会看到它导致 `data` 对象具有一个对象数组。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/list-view/data.gif" alt="ToolJet - 列表视图小部件" />

</div>


- 现在让我们编辑列表视图小部件的 `列表数据` 属性以显示查询数据。我们将使用 JS 从查询中获取数据 - `{{queries.restapi1.data.data}}`。这里最后一个 data 是一个包含对象数组的数据对象，第一个 data 是 restapi1 查询的结果数据。这将使用数据自动在小部件中创建行。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/list-view/datadisplay.png" alt="ToolJet - 列表视图小部件" />

</div>


- 最后，我们需要将小部件嵌套到列表视图小部件的第一行，小部件将自动创建后续实例。后续行的显示方式与您在第一行中显示数据的方式相同。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/list-view/addingwidgets.gif" alt="ToolJet - 列表视图小部件" />

</div>


:::tip

使用 `{{listItem.key}}` 在嵌套的小部件上显示数据。示例：为了显示图像，我们使用了 `{{listItem.avatar}}`，其中 **avatar** 是查询结果中对象的键之一。

:::