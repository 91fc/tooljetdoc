---
id: tabs
title: 选项卡
---

# 选项卡

选项卡小部件包含许多可通过选项卡导航的已定义容器。每个选项卡都充当一个 [容器](/docs/widgets/container/)，可以在其中放置不同的小部件。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/tabs/tabs.png" alt="ToolJet - 小部件参考 - 标签" />

</div>

## 如何使用标签小部件



## 特性

### 选项卡

此属性允许您在选项卡小部件中添加和删除容器。选项卡中的每个容器都有其唯一的 `id` 、 `title` 和 `disabled` 用于禁用单个选项卡。该字段需要一个对象数组。

```js
{{[
    { title: '家', id: '0' },
    { title: 'Profile', id: '1',disabled:'true' },
    { title: '设置', id: '2' }
]}}
```

#### 为标签添加背景颜色

您可以使用 backgroundColor 属性为每个选项卡指定不同的颜色，并使用十六进制颜色代码或颜色名称作为值。

```js
{{[
{ title: 'Home', id: '0', backgroundColor: '#81D4FA' },
{ title: 'Profile', id: '1', backgroundColor: 'blue' },
{ title: '设置', id: '2', backgroundColor: '#ecf0f1'}
 ]}}
```

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/tabs/tabsbg.png" alt="标签属性"/>

</div>

### 默认标签页

此属性选择选项卡中与相应的 `id` 匹配的容器。默认情况下，该值设置为 `0` 。

### 隐藏选项卡

它允许您隐藏上面 Tabs 属性中定义的所有选项卡标题。它接受布尔值，这些值也可以使用切换选项或通过单击 FX 按钮以编程方式设置。

### 只渲染活动标签

默认情况下启用此属性。启用时，将仅呈现活动选项卡，禁用时，将呈现组件中的所有选项卡。

## 活动

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/tabs/events.png" alt="irtable record"/>

</div>

### 在选项卡上切换

切换选项卡时会触发此事件。

:::info
查看 [Action Reference](/docs/category/actions-reference) 文档以获取有关所有 **Actions** 的详细信息。
:::

## 动作

| 行动       | 说明             | 属性 |
| ---------- | ---------------- | ---- |
| 设置选项卡 | 设置当前选项卡。 | `id` |

## 布局

### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

### 高亮颜色

您可以通过输入十六进制颜色代码或从颜色选择器中选择您选择的颜色来更改所选选项卡的突出显示颜色。

### 标签宽度

选项卡宽度可以设置为**自动**或**等分**。

### 可见性

打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。

### 禁用

默认情况下这是 `关闭` ，切换 `打开` 开关以锁定小部件并使其无法运行。您还可以通过单击旁边的 `Fx` 按钮以编程方式设置该值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::