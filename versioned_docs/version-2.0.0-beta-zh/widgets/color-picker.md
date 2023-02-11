---
id: color-picker
title: 选色器
---

# 选色器

颜色选择器小部件用于从颜色选择器中选择所需的颜色

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/color-picker/picker.png" alt="ToolJet - 小部件参考 - 拾色器" />

</div>

## 特性

### 默认颜色

数据必须是有效的十六进制颜色

- 可以从颜色选择器或使用 fx 更改默认颜色（只需要提供相应的十六进制值）

**例子：**

```json
Valid color : #000000 or #000
Invalid Color : #0000, "black" , rgb(0,0,0) ,
```

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/color-picker/colorpickerdefaultvalue.png" alt="ToolJet - 小部件参考 - 颜色选择器" />

</div>

## 活动

要向颜色选择器组件添加事件，请单击小部件句柄以打开右侧栏中的小部件属性。转到 **Events** 部分并单击 **+ 添加处理程序**。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/color-picker/events.png" alt="ToolJet - 小部件参考 - 颜色选择器" />

</div>

### 改变

当颜色选择器上的颜色发生变化时，会触发 On change 事件。

## 布局

| 布局         | 说明                       | 期望值                                                                      |
| ------------ | -------------------------- |
| 在桌面上显示 | 打开或关闭以显示桌面视图。 | 您可以通过单击 `Fx` 以设置值 `{{true}}` 或 `{{false}}` 来以编程方式确定该值 |
| 在手机上显示 | 打开或关闭以显示移动视图。 | 您可以通过单击 `Fx` 以设置值 `{{true}}` 或 `{{false}}` 来以编程方式确定该值 |

## 风格

| 款式   | 说明                                                                                                                                                                       |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 能见度 | 打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。 |

### 动作

| 行动     | 说明       | 属性                    |
| -------- | ---------- | ----------------------- |
| 设置颜色 | 设置颜色。 | `颜色` 例如 - `#ffffff` |

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::

## 示例：从颜色选择器中选择/更改颜色并获取所选颜色的相应十六进制、rgb 和 rgba 值
- 让我们首先创建一个新应用程序，然后将拾色器小部件拖到画布上。
- 单击拾色器小部件，将出现一个拾取器弹出窗口，可以从拾取器中选择所需的颜色。
- 为了关闭出现的选择器弹出窗口，需要将鼠标从选择器弹出窗口移开，选择器弹出窗口将消失。
- 在 Inspector 中，在组件内部，寻找颜色选择器，在那里可以获得相应的 hex、rgb 和 rgba 颜色

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/color-picker/colorpickerinspector.png" alt="ToolJet - 小部件参考 - 颜色选择器" />

</div>