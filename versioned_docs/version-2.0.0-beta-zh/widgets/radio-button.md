---
id: radio-button
title: 单选按钮
---
# 单选按钮

单选按钮小部件可用于从一组选项中选择一个选项。

## 如何使用单选按钮小部件



:::tip
Radio buttons are preferred when the list of options is less than six, and all the options can be displayed at once.
:::

:::info
对于六个以上的选项，请考虑使用 **[Dropdown](/docs/widgets/dropdown)** 小部件。
:::

## 事件

### 在选择

单击选项时会触发此事件。

:::info
查看 [Action Reference](/docs/category/actions-reference) 文档以获取有关所有 **Actions** 的详细信息。
:::

## 特性

### 标签

文本将用作单选按钮的标签。该字段需要一个 `字符串` 值。

### 默认值

默认选项的值。

### 选项值

不同项目/选项的值列表。使用动态变量 `{{queries.datasource.data.map(item => item.value)}}` 引用您的查询数据，或使用示例值 `{{[true, false]}}` 填充它

### 选项标签

不同项目/选项的标签列表。使用动态变量 `{{queries.datasource.data.map(item => item.label)}}` 引用您的查询数据或使用示例值`{{["yes", "no"]}}` 填充它

## 一般的
### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - 单选按钮" />

</div>

## 布局

### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。
### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

### 文字颜色

通过提供 `十六进制颜色代码` 或从颜色选择器中选择您喜欢的颜色来更改小部件中文本的颜色。

### 活动颜色

通过提供 `十六进制颜色代码` 或从颜色选择器中选择您选择的颜色来更改活动单选按钮的颜色。

### 可见性

打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。

### 禁用

默认情况下这是 `关闭` ，切换 `打开` 开关以锁定小部件并使其无法运行。您还可以通过单击旁边的 `Fx` 按钮以编程方式设置该值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。

## 例子

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/radio-button/radio-ex.gif" alt="ToolJet - 小部件参考 - 单选按钮" />

</div>

## 动作

| 行动     | 说明                       | 属性                                                        |
| -------- | -------------------------- | ----------------------------------------------------------- |
| 选择选项 | 从单选按钮中选择一个选项。 | `option` 例如：`component.radiobutton1.selectOption('one')` |