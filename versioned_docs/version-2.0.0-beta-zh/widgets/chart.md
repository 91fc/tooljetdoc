---
id: chart
title: 图表
---
# 图表

图表小部件采用图表类型、数据和样式来使用 Plotly.js 绘制图表。

## 如何使用图表小部件



## 图表类型
### 折线图

**数据要求：**数据需要是一个对象数组，每个对象应该有 `x` 和 `y` 键。

**例子：**
```json
[
  { "x": "简", "y": 100},
  { "x": "二月", "y": 80},
  { "x": "三月", "y": 40},
  { "x": "四月", "y": 100},
  { "x": "五月", "y": 80},
  { "x": "君", "y": 40}
]
```

图表将如下所示：

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/chart/linec.png" alt="ToolJet - 小部件参考 - 图表" />

</div>

### 条形图

**数据要求：**数据需要是一个对象数组，每个对象应该有 `x` 和 `y` 键。

**例子：**

```json
[
  { "x": "Jan", "y": 100},
  { "x": "Feb", "y": 80},
  { "x": "Mar", "y": 40},
  { "x": "Apr", "y": 100},
  { "x": "May", "y": 80},
  { "x": "Jun", "y": 40},
  { "x": "Jul", "y": 100},
  { "x": "Aug", "y": 80},
  { "x": "Sep", "y": 40}
]
```

图表将如下所示：

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/chart/barc.png" alt="ToolJet - 小部件参考 - 图表" />

</div>

### 饼状图

**数据要求：** 数据需要是一个对象数组，每个对象都应该有 `label` 和 `value` 键。

**例子：**

```json
[
  { "x": "Jan", "y": 100},
  { "x": "Feb", "y": 80},
  { "x": "Mar", "y": 40},
  { "x": "Apr", "y": 100},
  { "x": "May", "y": 80},
  { "x": "Jun", "y": 40}
]
```

图表将如下所示：

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/chart/piec.png" alt="ToolJet - 小部件参考 - 图表" />

</div>

## 特性

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::

### 标题

此字段用于为所选图表添加标题。

### 绘制 JSON 图表模式

在图表小部件中，您还可以绘制带有 JSON 数据的图表。因此 JSON 将包含有关图表类型、图表数据等的信息。您可以从 [此处](https://plotly.com/javascript/reference/) 了解有关 JSON 属性的更多信息。

无论如何，要使用 JSON，您需要从属性部分启用 `使用 Plotly JSON 模式` 切换。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/chart/pfjson.png" alt="ToolJet - 小部件参考 - 图表" />

</div>

它将显示 [JSON 描述](https://plotly.com/chart-studio-help/json-chart-schema/) 字段来放置 JSON 数据。

结果将是这样的：

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/chart/jsonschema.png" alt="ToolJet - 小部件参考 - 图表" />

</div>

## 标记颜色

使用颜色选择器或通过提供 `HEX 颜色代码` 修改标记的颜色。

## 选项
### 加载状态

切换开关以在小部件上显示加载程序。您还可以通过单击 `Fx` 以编程方式定义它的值，可接受的值为 - `{{true}}` 和 `{{false}}` 。

### 显示轴

通过此属性启用或禁用图表上的 `x` 和 `y` 轴。您还可以通过单击 `Fx` 以编程方式定义它的值，可接受的值为 - `{{true}}` 和 `{{false}}` 。

### 显示网格线

切换 `开` 或 `关` 以显示或隐藏图表上的网格线。您还可以通过单击 `Fx` 以编程方式定义它的值，可接受的值为 - `{{true}}` 和 `{{false}}` 。

## 布局

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/chart/layout.png" alt="ToolJet - 小部件参考 - 图表" />

</div>

### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。
### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/chart/styles.png" alt="ToolJet - 小部件参考 - 图表" />

</div>

### 填充

使用 `Padding` 属性在小部件元素和小部件边框之间定义一个空间。使用 `1` 到 `100` 之间的任何数值。

###可见性

打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。

### 禁用

默认情况下这是 `关闭` ，切换 `打开` 开关以锁定小部件并使其无法运行。您还可以通过单击旁边的 `Fx` 按钮以编程方式设置该值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。
