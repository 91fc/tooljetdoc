---
id: canvas
title: 画布
---

画布是构建应用程序的 ToolJet 应用程序构建器的中心区域。您可以通过从组件库（右侧栏）中拖动它们来排列 **组件**。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/canvas/canvas.png" alt="App Builder: Canvas"/>

</div>

### 排列组件

所有组件在编辑器模式下都是完全交互的——为了防止交互，您可以**单击并按住****[组件句柄](docs/app-builder/components-library)** 来更改组件的位置。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/canvas/arrange.png" alt="App Builder: Canvas"/>

</div>

### 调整组件大小

画布上的组件可以从边缘调整大小。

单击组件句柄后，您可以使用键盘箭头键精确设置所选组件的位置。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/canvas/resize.gif" alt="App Builder: Canvas"/>

</div>

### 组组件

ToolJet 带有灵活的组件，可以将其他组件组合在一起，例如 **Container** 和 **Form**。当您将组件拖放到容器/表单中时，它们会创建一组嵌套组件。所有组件都可以以这种方式嵌套。

### 隐藏或禁用组件

通过将其 **Visibility** 或 **Disabled** 属性设置为 `true` 来隐藏或禁用组件。单击组件句柄以在右侧打开 **config inspector**。这些值也可以根据真值评估为真。例如，您可以使用一个组件的属性来动态切换另一个组件的 Visibility 属性，您只需要编写一个条件语句。

例如：我们想在选中复选框时禁用按钮，因此我们可以简单地在按钮的 **Disable** 属性中使用 `{{components.checkbox1.value}}`。当复选框被选中时，`{{components.checkbox1.value}}` 的计算结果为 `true`，未选中时为 false。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/canvas/hide.gif" alt="App Builder: Canvas"/>

</div>

### 克隆组件

您可以通过 **cmd/ctrl + d** 克隆画布上的现有组件。检查其他 **[键盘快捷键](/docs/tutorial/keyboard-shortcuts)**

