---
id: checkbox
title: 复选框
---
# 复选框

复选框小部件可用于允许用户做出二元选择，例如。未选中或已选中。

:::info
复选框小部件由单个复选框输入组成。
:::

## 如何使用复选框小部件



## 特性

### 标签

文本将用作复选框的标签。该字段需要一个 `字符串` 输入。

### 默认状态

该属性用于设置加载应用程序时复选框小部件的默认状态（启用或禁用）。默认情况下，复选框组件设置为 `{{false}}` /禁用。

### 活动

要向复选框组件添加事件，请单击小部件句柄以打开右侧栏中的小部件属性。转到 **Events** 部分并单击 **+ 添加处理程序**。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/checkbox/events.png" alt="ToolJet - 小部件参考 - 复选框" />

</div>

#### 检查中

选中复选框输入时触发选中事件。
####取消选中

取消选中复选框输入时触发取消选中事件。

:::info
查看 [Action Reference](/docs/category/actions-reference) 文档以获取有关所有 **Actions** 的详细信息。
:::

### 一般的
#### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - 复选框" />

</div>

### 布局

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/checkbox/layout.png" alt="ToolJet - 小部件参考 - 复选框" />

</div>

#### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。
#### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/checkbox/styles.png" alt="ToolJet - 小部件参考 - 复选框" />

</div>

### 文字颜色

通过输入 `十六进制颜色代码` 或从颜色选择器中选择您选择的颜色来更改复选框中文本的颜色。

### 复选框颜色

您可以通过输入 `十六进制颜色代码` 或从颜色选择器中选择您选择的颜色来更改复选框的颜色。

### 可见性

打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。

### 禁用

默认情况下这是 `关闭` ，切换 `打开` 开关以锁定小部件并使其无法运行。您还可以通过单击旁边的 `Fx` 按钮以编程方式设置该值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::

## 动作

| 行动         | 说明             | 属性                                                              |
| ------------ | ---------------- | ----------------------------------------------------------------- |
| `setChecked` | 设置复选框状态。 | 将状态作为参数传递。例如：`components.checkbox1.setChecked(true)` |