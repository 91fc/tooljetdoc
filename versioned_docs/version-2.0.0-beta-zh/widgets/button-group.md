---
id: button-group
title: 按钮组
---
# 按钮组

按钮组小部件可用于执行操作。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/button-group/button-group.png" alt="按钮组" />

</div>

## 特性
### 活动

要将事件添加到按钮组，请单击小部件句柄以打开右侧栏中的小部件属性。转到 **Events** 部分并单击 **Add handler**。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/button-group/events.png" alt="按钮组事件" />

</div>

#### 点击
单击按钮组时会触发单击事件。就像 ToolJet 上的任何其他事件一样，您可以为单击事件设置多个处理程序。

:::info
查看 [Action Reference](/docs/category/actions-reference) 文档以获取有关所有 **Actions** 的详细信息。
:::

### 特性

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/button-group/properties.png" alt="按钮组属性" />

</div>

| 属性     | 说明                         | 期望值             |
| -------- | ---------------------------- | ------------------ |
| 标签     | label 用于设置按钮组的标题。 | 任何 **String** 值 |
| values   | 按钮组项目的值。             | **字符串数组**     |
| 标签     | 可用于设置按钮组项的标签。   | **字符串数组**     |
| 默认选择 | 可以使用它来设置初始选择值。 | **字符串数组**     |
| 启用多选 | 切换此项以允许选择多个按钮。 | 切换为真/假        |

### 一般的
#### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="按钮组工具提示" />

</div>

### 布局

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/button-group/layout.png" alt="按钮组布局" />

</div>

| 布局         | 说明                       | 期望值                                                                      |
| ------------ | -------------------------- | --------------------------------------------------------------------------- |
| 在桌面上显示 | 打开或关闭以显示桌面视图。 | 您可以通过单击 `Fx` 以设置值 `{{true}}` 或 `{{false}}` 来以编程方式确定该值 |
| 在手机上显示 | 打开或关闭以显示移动视图。 | 您可以通过单击 `Fx` 以设置值 `{{true}}` 或 `{{false}}` 来以编程方式确定该值 |

### 样式

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/button-group/styles.png" alt="按钮组属性" />

</div>

| 款式           | 说明                                                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 背景颜色       | 您可以通过输入十六进制颜色代码或从颜色选择器中选择您选择的颜色来更改小部件的背景颜色。                                                                                     |
| 文字颜色       | 您可以通过输入十六进制颜色代码或从颜色选择器中选择您选择的颜色来更改文本输入按钮的颜色。                                                                                   |
| 能见度         | 打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。 |
| 禁用           | 打开以锁定小部件。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值，如果设置为 `{{true}}` ，该小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。        |
| 边界半径       | 使用此属性修改按钮的边框半径。                                                                                                                                             |
| 所选文字颜色   | 使用此属性修改所选按钮中文本的背景颜色                                                                                                                                     |
| 选定的背景颜色 | 使用此属性修改所选按钮的背景颜色                                                                                                                                           |

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::