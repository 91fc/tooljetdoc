---
id: circular-progress-bar
title: 圆形进度条
---
# 圆形进度条

圆形进度条小部件可用于在进度圈中显示进度。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/circular-progressbar/cpb.png" alt="ToolJet - 小部件参考 - 圆形进度条" />

</div>

## 特性

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/circular-progressbar/prop.png" alt="ToolJet - 小部件参考 - 圆形进度条" />

</div>

| 属性 | 说明                         | 期望值                                                       |
| ---- | ---------------------------- | ------------------------------------------------------------ |
| 文字 | 我们可以在进度圈内设置文字。 | 它需要一个`String`，你也可以使用js随着进度变化动态更新文本。 |
| 进度 | 它可用于设置小部件的进度。   | 进度应该是 0 到 100 之间的整数。                             |

### 一般的
#### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - 圆形进度条" />

</div>

## 布局

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/circular-progressbar/layout.png" alt="ToolJet - 小部件参考 - 圆形进度条" />

</div>

| 布局         | 说明                                                                                                        |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| 在桌面上显示 | 打开或关闭以在桌面视图中显示小部件。您可以通过单击 Fx 设置值 `{{true}}` 或 `{{false}}` 以编程方式确定该值。 |
| 在手机上显示 | 打开或关闭以在移动视图中显示小部件。您可以通过单击 Fx 设置值 `{{true}}` 或 `{{false}}` 以编程方式确定该值。 |

## 风格

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/circular-progressbar/styles.png" alt="ToolJet - 小部件参考 - 圆形进度条" />

</div>

| 属性     | 说明                                 | 期望值                                                                                                                                     |
| -------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 颜色     | 定义描边颜色。                       | `HEX 颜色代码` 或从颜色选择器中选择颜色。                                                                                                  |
| 文字颜色 | 定义圆形进度条内文本的颜色。         | `HEX 颜色代码` 或从颜色选择器中选择颜色。                                                                                                  |
| 文字大小 | 定义文本的大小                       | 值必须在 0-100 之间。                                                                                                                      |
| 笔划宽度 | 定义笔画的宽度                       | 值必须在 0-100 之间。                                                                                                                      |
| 逆时针   | 是否逆时针旋转进度条。               | 它接受`{{true}}`和`{{false}}`，默认值为`false`。                                                                                           |
| 圆比     | 要定义进度条应使用的全圆直径的比率。 | 它接受数值，默认值为 `1` 。                                                                                                                |
| 能见度   | 打开或关闭以控制小部件的可见性。     | 您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。 |

:::info
圆形进度条小部件使用 [react-circular-progress](https://github.com/kevinsqi/react-circular-progressbar) 包。查看存储库以获取有关属性和样式的更多详细信息。
:::