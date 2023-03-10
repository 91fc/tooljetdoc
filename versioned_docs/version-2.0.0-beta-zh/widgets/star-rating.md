---
id: star-rating
title: 星级
---
# 星级

星级评级小部件可用于显示和输入评级。小部件支持半星，星数也可以设置。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/star/star-rating.png" alt="ToolJet - 小部件参考 - 星级" />

</div>

## 活动

### 变化

单击星星时会触发此事件。

:::info
查看 [Action Reference](/docs/category/actions-reference) 文档以获取有关所有 **Actions** 的详细信息。
:::

## 特性

### 标签

用作星级标签的文本。该字段需要一个 `字符串` 值。

### 星星数

初始加载时列表中的初始星星数。 `默认值：5`。该字段需要一个整数值。

### 默认选择的星星数

此属性指定在初始加载时选择的默认星星数。 `默认值：5`（整数）。该字段需要一个整数值。

### 启用半星

切换 `开` 以允许选择半星。 `默认值：false`（布尔值）。单击 `Fx` 以编程方式定义值 `{{true}}` 或 `{{false}}` 。

### 工具提示

这用于在每颗星上显示信息工具提示，并映射到星的索引。 `默认值：[]`（字符串数组）。例如：`{{[ `坏` 、 `好` 、 `好` 、 `最好` ]}}`

## 一般的
### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - 星级" />

</div>

## 布局

### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。
### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

### 星星颜色

显示星星的颜色。 `默认值：#ffb400`（十六进制颜色）。通过提供 `十六进制颜色代码` 或从选择器中选择一个来更改颜色。

### 标签颜色

通过提供 `十六进制颜色代码` 或从选择器中选择一个来更改小部件中标签的颜色。

### 可见性

打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。

### 禁用

默认情况下这是 `关闭` ，切换 `打开` 开关以锁定小部件并使其无法运行。您还可以通过单击旁边的 `Fx` 按钮以编程方式设置该值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。
