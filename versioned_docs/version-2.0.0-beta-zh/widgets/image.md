---
id: image
title: 图像
---
# 图像

图像小部件用于在您的应用程序中显示图像。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/image/image.png" alt="ToolJet - 小部件参考 - 图像" />

</div>

## 活动

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/image/events.png" alt="ToolJet - 小部件参考 - 图像" />

</div>

### 点击

单击图像时会触发单击事件。

:::info
查看 [Action Reference](/docs/category/actions-reference) 文档以获取有关所有 **Actions** 的详细信息。
:::

## 特性

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/image/props.png" alt="ToolJet - 小部件参考 - 图像" />

</div>

### 网址
输入图像的 URL 以将其显示在小部件上。

### 加载状态
加载状态可用于将微调器显示为图像内容。加载状态通常与查询的 isLoading 属性一起使用，以在运行查询时显示加载状态。切换开关**开**或点击 `fx` 以编程方式设置值 `{{true}}` 或 `{{false}}` 。

### 替代文本
用于图像的替代文本。

### 缩放按钮
切换此项以启用图像内的缩放选项。

### 旋转按钮
开启此项以启用图像中的旋转按钮。

## 一般的
### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - 图像" />

</div>

## 布局

### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}` ，以编程方式确定该值。

### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

### 边框类型
从可用选项中为图像选择边框类型：
- **没有任何**
- **圆形**
- **圆圈**
- **缩略图**

### 图像适合
从可用选项中选择适合图像的图像 - 类似于适合图像的对象：
- **充满**
- **覆盖**
- **包含**
- **缩小**

### 背景颜色
通过提供 `HEX 颜色代码` 或从颜色选择器中选择您选择的颜色，为小部件添加背景颜色。

### 填充
在图像和小部件边框之间添加填充。它接受从 `0` 到 `100` 的任何数值。

### 可见性
打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。

### 禁用
默认情况下这是 `关闭` ，切换 `打开` 开关以锁定小部件并使其无法运行。您还可以通过单击旁边的 `Fx` 按钮以编程方式设置该值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::