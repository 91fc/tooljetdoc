---
id: tree-select
title: 树选择
---

# 树选择

Tree Select 小部件是 TreeView 中的一组复选框，可以展开或折叠。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/tree-select/tree-select.gif" alt="ToolJet - 小部件参考 - 树选择" />

</div>

## 特性

### 标题

该文本将用作树选择的标题。该字段需要一个 `字符串` 输入。

### 结构

**数据要求：**结构需要是一个对象数组，每个对象都应该有 `label` 和 `value` 键。如果您希望在任何复选框下有 `children`，则需要使用 `label` 和 `value` 键传递 `children` 数组。

**例子：**

```json
[
  {
    "label": "Asia",
    "value": "asia",
    "children": [
      {
        "label": "China",
        "value": "china",
        "children": [
          { "label": "Beijing", "value": "beijing" },
          { "label": "Shanghai", "value": "shanghai" }
        ]
      },
      { "label": "Japan", "value": "japan" },
      {
        "label": "India",
        "value": "india",
        "children": [
          { "label": "Delhi", "value": "delhi" },
          { "label": "Mumbai", "value": "mumbai" },
          { "label": "Bengaluru", "value": "bengaluru" }
        ]
      }
    ]
  },
  {
    "label": "Europe",
    "value": "europe",
    "children": [
      { "label": "France", "value": "france" },
      { "label": "Spain", "value": "spain" },
      { "label": "England", "value": "england" }
    ]
  },
  { "label": "Africa", "value": "africa" }
]
```

:::info
注意：`value` 在整个结构数组中应该是唯一的。
:::

### 检查值

选中的值是默认情况下传递给选中复选框的值数组。

**例子：**

```json
[ `亚洲` ， `西班牙` ]
```

### 扩展值

与选中的值类似，扩展值是默认传递的用于扩展节点的值数组。

**例子：**

```json
[ `亚洲` ]
```

### 活动

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/tree-select/events.png" alt="ToolJet - 小部件参考 - 树选择" width="500" />

</div>

:::info
查看 [Action Reference](/docs/category/actions-reference) 文档以获取有关所有 **Actions** 的详细信息。
:::

#### 关于改变

每当复选框值更改（选中或未选中）时，都会触发选中事件。

#### 选中

On check 事件在复选框值被选中时被触发。

#### 取消选中

On uncheck 事件在复选框值未被选中时触发。

### 布局

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/tree-select/layout.png" alt="ToolJet - 小部件参考 - 树选择" width="400" />

</div>

#### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

#### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/tree-select/styles.png" alt="ToolJet - 小部件参考 - 树选择" width="400" />

</div>

### 文字颜色

通过输入 `十六进制颜色代码` 或从颜色选择器中选择您选择的颜色来更改标签的颜色。

### 复选框颜色

您可以通过输入 `十六进制颜色代码` 或从颜色选择器中选择您选择的颜色来更改复选框的颜色。

### 可见性

打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。

### 禁用

默认情况下这是 `关闭` ，切换 `打开` 开关以锁定小部件并使其无法运行。您还可以通过单击旁边的 `Fx` 按钮以编程方式设置该值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::
