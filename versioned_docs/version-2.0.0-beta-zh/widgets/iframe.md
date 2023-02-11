---
id: iframe
title: Iframe
---
# Iframe

Iframe 小部件用于将另一个 HTML 页面嵌入当前页面并在您的应用程序中显示 iframe。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/iframe/iframe.png" alt="ToolJet - 小部件参考 - Iframe" />

</div>

## 特性

### 网址

设置要嵌入的页面的 **URL**。

### 一般的
#### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - Iframe" />

</div>

## 布局

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/iframe/layout.png" alt="ToolJet - 小部件参考 - Iframe" />

</div>

### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。
### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/iframe/styles.png" alt="ToolJet - 小部件参考 - Iframe" />

</div>

### 可见性

打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。

### 禁用

默认情况下这是 `关闭` ，切换 `打开` 开关以锁定小部件并使其无法运行。您还可以通过单击旁边的 `Fx` 按钮以编程方式设置该值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::