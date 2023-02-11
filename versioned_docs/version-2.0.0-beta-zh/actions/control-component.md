---
id: control-component
title: Control component 控制组件
---

控制组件动作调用组件特定动作。组件特定操作是特定小部件的独占操作。可以通过事件处理程序或运行 JavaScript 代码查询来触发特定于组件的操作。

:::info
查看 **[现场演示](https://youtu.be/JIhSH3YeM3E)** 在我们的一个社区电话中演示的组件特定操作。
:::

## 可用的组件特定操作

| 小工具     | 组件特定操作                                     |
| ---------- | ------------------------------------------------ |
| 按钮       | 单击、设置标签、禁用、可见性、加载               |
| 文字       | 设置文本，设置可见性                             |
| 文字输入   | 设置文本、清除、设置焦点、设置模糊、禁用、可见性 |
| 文本区     | 设置文本，清除                                   |
| 模态       | 显示、关闭                                       |
| 表格       | 设置页面                                         |
| 下拉       | 选择选项                                         |
| 多选       | 选择选项，取消选择选项，清除选择                 |
| 地图       | 设置位置                                         |
| 复选框     | 设置勾选                                         |
| 单选按钮   | 选择选项                                         |
| 标签       | 设置选项卡                                       |
| 颜色选择器 | 设置颜色                                         |
| 文件选择器 | 清除文件                                         |

:::info
目前，只有上面列出的小部件支持特定于组件的操作。我们正在努力为剩余的小部件带来组件特定的操作。
:::

## 使用组件特定的操作

### 使用按钮的事件处理程序为文本输入小部件设置一个值

- 将 **Text Input** 和 **Button** 小部件拖到画布上。

- 转到左侧边栏的 **Inspector** 以检查可用于 `components` 下的 `textinput1` 小部件的公开变量。您会看到变量 `value` 是一个空字符串，因为文本输入小部件的字段值现在是空的。

<div style={{textAlign: 'center'}}>

![ToolJet - 动作参考 - 控制组件](/img/actions/controlcomponent/inspector.png)

</div>

- 现在在文本输入小部件中输入一些值，您会看到检查器中的 `值` 已更新。

<div style={{textAlign: 'center'}}>

![ToolJet - 动作参考 - 控制组件](/img/actions/controlcomponent/updated.png)

</div>

- 现在，单击按钮的小部件处理程序以在右侧栏中打开其属性，然后为 **On Click** 事件添加事件处理程序以触发 **Control Component** 操作。在组件下拉列表中选择 `textinput1` ，将 `设置文本` 设置为 `操作` ，然后在 `文本` 字段中输入要在字段值中更新的文本。

<div style={{textAlign: 'center'}}>

![ToolJet - 动作参考 - 控制组件](/img/actions/controlcomponent/button.png)

</div>

- 现在，当您单击按钮时，您会看到文本输入小部件的字段值已更新为您设置的值。

<div style={{textAlign: 'center'}}>

![ToolJet - 动作参考 - 控制组件](/img/actions/controlcomponent/set.png)

</div>


### 使用 JavaScript 查询清除文本输入小部件的值

- 让我们使用运行 JavaScript 代码清除我们在上一节中设置的值。创建一个新的运行 JavaScript 代码查询并调用该组件和该组件提供的 CSA。

**句法：**
```js
等待 components.textinput1.clear()
```

<div style={{textAlign: 'center'}}>

![ToolJet - 动作参考 - 控制组件](/img/actions/controlcomponent/jsoption.png)

</div>


<div style={{textAlign: 'center'}}>

![ToolJet - 动作参考 - 控制组件](/img/actions/controlcomponent/clear.png)

</div>

- 最后，点击**保存并运行**查询按钮启动查询，您会看到文本输入小部件的字段值已被清除。

