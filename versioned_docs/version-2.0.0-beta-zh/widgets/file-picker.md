---
id: file-picker
title: 文件选择器
---
# 文件选择器

Filepicker 小部件允许用户通过浏览文件系统并选择目录中的一个或多个文件来拖放文件或上传文件。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/filepicker/picker.png" alt="ToolJet - 小部件参考 - 文件选择器" />

</div>

:::info
 根据输入元素规范，文件类型必须是有效的 [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) 类型或有效的文件扩展名。

 要接受任何/所有文件类型，请将 `接受文件类型` 设置为空值。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/filepicker/file-type.gif" alt="ToolJet - 小部件参考 - 文件选择器" />

</div>

:::tip
[MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) 跨平台类型确定不可靠。例如，CSV 文件在 macOS 下报告为 text/plain，但在 Windows 下报告为 application/vnd.ms-excel。
:::

## 活动

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/filepicker/events.png" alt="ToolJet - 小部件参考 - 文件选择器" />

</div>

### 在选择的文件上

On file selected event is triggered when one or more files are selected by the selector dialogue box.

### 在文件加载时

在浏览器中加载文件时触发文件加载事件。

### 在文件上取消选择

当一个或多个文件从选取器中删除时，可以触发文件选择事件。

:::info
查看 [Action Reference](/docs/category/actions-reference) 文档以获取有关所有 **Actions** 的详细信息。
:::

## 特性

### 说明文字

可以设置说明文本以提供有关文件选择器的信息。

### 使用拖放区

创建一个拖放区。可以将文件拖放到 `拖放` 区域。

### 使用文件选择器

单击它会调用默认的操作系统文件提示。

### 选择多个文件

允许拖放（或从文件对话框中选择）多个文件。默认情况下禁用 `选择多个文件` 。

### 最大文件数

最大接受文件数默认值为 `2` 。

### 接受文件类型

通过提供类型，您可以使放置区接受特定文件类型并拒绝其他文件类型。

### 最大尺寸限制

最大文件大小（以字节为单位）。

### 最小大小限制

最小文件大小（以字节为单位）。

:::tip
可以根据文件类型、最大文件数、最大文件大小（以字节为单位）和最小文件大小（以字节为单位）接受或拒绝文件。
如果 `Pick multiple files` 设置为 false 并删除其他文件，则除第一个文件外的所有文件都将被拒绝。
任何大小不在 `最大大小限制` 和 `最小大小限制` 范围内的文件都将被拒绝。
:::

## 选项

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/filepicker/options.png" alt="ToolJet - 小部件参考 - 文件选择器" />

</div>

### 解析内容

解析选中的文件，支持**CSV**、**xls**、**xlsx**文件。

### 文件类型

如果启用了**解析内容**，则自动检测文件和解析内容或解析选定文件类型的选项。

:::info
- 如果 **Parse content** 选项被关闭，**File Type** 选项将不可用。
- 如果 **Parse content** 选项打开，它只解析下一个选择的文件，而不是已经选择的文件。
:::

### 一般的
#### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - 文件选择器" />

</div>

## 布局

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/filepicker/layout.png" alt="ToolJet - 小部件参考 - 文件选择器" />

</div>

### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。
### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/filepicker/styles.png" alt="ToolJet - 小部件参考 - 文件选择器" />

</div>

### 可见性

这是为了控制小部件的可见性。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。它只能有布尔值，即 `{{true}}` 或 `{{false}}`。默认情况下，它设置为 `{{true}}` 。

### 禁用

此属性只接受布尔值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。

### 边框半径

使用此属性修改文件选择器小部件的边框半径。该字段只需要从 `1` 到 `100` 的数值，默认为 `0` 。

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::

## 动作

| 行动           | 说明             | 属性 |
| -------------- | ---------------- | ---- |
| `clearFiles()` | 它将清除所选文件 | 无   |
