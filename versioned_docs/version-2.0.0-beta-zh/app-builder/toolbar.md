---
id: toolbar
title: 工具栏
---

工具栏位于应用程序构建器的顶部，用于配置应用程序设置。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/toolbar/toolbar.png" alt="App Builder: 工具栏"/>

</div>

### 应用名称

可以从 ToolJet 徽标旁边的工具栏左侧编辑应用程序名称。

创建新应用时，默认情况下其名称设置为 **Untitled app**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/toolbar/name.png" alt="App Builder: 工具栏"/>

</div>

### 全局设置

要配置应用程序的全局设置，请单击应用程序名称左侧的烤肉串菜单（三个垂直点）。全局设置包括：

- **隐藏已启动应用程序的标题**：启用此选项可在应用程序启动时隐藏 tooljet 的标题
- **维护模式**：开启此选项可将应用程序置于维护模式。当处于**维护模式**时，在启动应用程序时，用户将收到一条错误消息，指出**应用程序正在维护**。
- **画布最大宽度**：以**px**或 **%**为单位修改画布的宽度。默认宽度为 1292 像素。
- **画布最大高度**：以**px**或 **%**为单位修改画布的宽度。默认高度为 2400 像素，目前是最大高度限制。
- **画布背景色**：输入十六进制颜色代码或从选择器中选择一种颜色来更改画布的背景色。您还可以单击 **Fx** 以编程方式设置值。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/toolbar/globalset.png" alt="App Builder: 工具栏"/>

</div>

### 桌面或移动布局

从工具栏切换移动或桌面布局中的画布模式。

#### 将现有组件添加到移动布局

单击组件句柄以打开右侧的组件配置检查器。向下滚动到 **Layout** 部分并启用 Mobile Layout。小部件的宽度将被调整以适应移动布局。

#### 向移动布局添加新组件

通过单击工具栏上的按钮将布局切换到移动设备。将组件拖放到画布上。除非从组件配置检查器启用**在桌面上显示**，否则此小部件不会显示在桌面布局上。

:::info
在应用程序查看器中查看应用程序时，组件的宽度将自动调整以适应屏幕。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/toolbar/view.png" alt="App Builder: 工具栏"/>

</div>

### 撤消或重做

使用工具栏中的撤消或重做按钮撤消或重做画布上的任何更改。

您还可以**[键盘快捷键](/docs/tutorial/keyboard-shortcuts)** 来执行此类操作。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/toolbar/undo.png" alt="App Builder: 工具栏"/>

</div>

### 版本管理器

从版本管理器创建或删除应用程序的版本。您还可以从编辑按钮编辑版本名称。

当许多开发人员在开发应用程序时，**版本控制**允许他们保存自己的应用程序版本。这也可以防止开发人员覆盖其他开发人员的工作。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/toolbar/version.png" alt="App Builder: 工具栏"/>

</div>

### 评论

在画布上的任意位置发表评论并与工作区中的其他用户协作。单击评论按钮以启用它，然后将评论放在画布上的任意位置。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/toolbar/comments.png" alt="App Builder: 工具栏"/>

</div>

### 分享

使用自动生成的唯一 URL 共享您的应用程序或编辑 URL slug 以对其进行个性化设置。

- 当 **公开应用** 关闭并共享 URL 时，用户将必须登录 ToolJet 才能使用该应用程序。打开该选项，互联网上的任何人都可以在不登录 ToolJet 的情况下访问该应用程序。
- ToolJet 生成可用于在网页上嵌入应用程序的**嵌入式链接**。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/toolbar/share.png" alt="App Builder: 工具栏"/>

</div>

### 预览

单击 **预览** 按钮将在新选项卡中打开当前打开的应用程序版本。当应用程序开发人员想要立即检查生产中的应用程序预览时，这非常方便。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/toolbar/preview.png" alt="App Builder: 工具栏"/>

</div>

### 发布

发布应用程序以发布应用程序的当前版本并将更改推送到生产环境中。

:::caution
ToolJet 将阻止编辑已发布版本的应用程序，并会提示创建新版本以进行更改。这是为了防止意外将未完成的应用程序推送到实时版本。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/app-builder/toolbar/release.png" alt="App Builder: 工具栏"/>

</div>