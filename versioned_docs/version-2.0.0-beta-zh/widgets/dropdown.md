---
id: dropdown
title: 下拉列表
---
# 下拉列表

下拉列表小部件可用于从选项列表中收集用户输入。

## 如何使用下拉列表小部件



:::tip
下拉选项可以使用动态变量引用您的查询数据。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/dropdown/dropdown-dynamicvalues.gif" alt="ToolJet - 小部件参考 - 下拉列表" />

</div>

## 活动

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/dropdown/event.png" alt="ToolJet - 小部件参考 - 下拉菜单" />

</div>

### 事件：选择

当一个选项被选中时，On select 事件被触发。

### 事件：搜索文本已更改

只要用户通过在下拉列表的输入框中键入来搜索选项，就会触发此事件。相应的搜索文本将显示为 `searchText` 。

## 特性

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/dropdown/prop.png" alt="ToolJet - 小部件参考 - 下拉菜单" />

</div>

### 标签

文本将用作下拉列表的标签。

### 默认值

默认选项的值

### 选项值

选项值是下拉列表中不同选项的值。使用动态变量 `{{queries.datasource.data.map(item => item.value)}}` 引用您的查询数据，或使用示例值 `{{[1,2,3]}}` 填充它

### 选项标签

选项标签是下拉列表中不同选项的标签。使用动态变量`{{queries.datasource.data.map(item => item.label)}}`引用您的查询数据或使用示例值`{{["one", "two", "three"]填充它}}`

### 选项加载状态

使用此属性在小部件中显示加载状态。默认情况下它是关闭的，打开以启用它。您还可以通过单击 `Fx` 按钮以编程方式设置值 `{{true}}` 或 `{{false}}` 。

## 验证

### 自定义验证

使用三元运算符为下拉小部件中的选项添加验证。

## 一般的
### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - 下拉列表" />

</div>

## 布局

### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。
### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/dropdown/style.png" alt="ToolJet - 小部件参考 - 下拉菜单" />

</div>

### 边框半径

使用此属性修改下拉列表的边框半径。该字段只需要从 `1` 到 `100` 的数值，默认为 `0` 。

### 可见性

这是为了控制小部件的可见性。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。它只能有布尔值，即 `{{true}}` 或 `{{false}}`。默认情况下，它设置为 `{{true}}` 。

### 选中的文字颜色

通过提供 `HEX 颜色代码` 或从颜色选择器中选择颜色，更改小部件中所选选项的文本颜色。

### 禁用

此属性只接受布尔值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。

### 对齐文本

您可以通过以下方式对齐小部件内的文本：左对齐、右对齐、居中、对齐

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::
