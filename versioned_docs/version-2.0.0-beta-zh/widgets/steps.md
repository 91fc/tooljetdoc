---
id: steps
title: 步骤
---
# 步骤

步骤用于引导用户完成复杂的过程，使他们更容易、更直观。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/steps/steps.png" alt="ToolJet - 小部件参考 - 步骤" />

</div>

## 特性

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/steps/props.png" alt="ToolJet - 小部件参考 - 步骤" />

</div>

### 脚步

此属性允许您添加和步骤。每个对象代表一个步骤。

```json
{{
    [
        { name: 'step 1', tooltip: 'some tooltip', id: 1},
        { name: 'step 2', tooltip: 'some tooltip', id: 2},
        { name: 'step 3', tooltip: 'some tooltip', id: 3},
        { name: 'step 4', tooltip: 'some tooltip', id: 4},
        { name: 'step 5', tooltip: 'some tooltip', id: 5}
    ]
}}
```

### 当前步骤

此属性允许您选择要突出显示的当前步骤。

### 可选择的步骤

禁用此属性将禁用步骤选择。

## 活动
### 在选择
每当用户选择任何步骤时都会触发此事件。

## 一般的
### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - 步骤" />

</div>

## 布局
### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。
### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

### 主题

您可以通过从下拉列表中选择可用主题来更改小部件的主题。

### 颜色

您可以通过输入十六进制颜色代码或从颜色选择器中选择您选择的颜色来更改小部件的颜色。

### 文字颜色

您可以通过输入十六进制颜色代码或从颜色选择器中选择您选择的颜色来更改小部件的文本颜色。

### 可见性

打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::