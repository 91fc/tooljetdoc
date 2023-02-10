---
id: creating-widget
title: 创建小部件
---

# 创建小部件

这些是传递给小部件的一些最有用的属性和函数

### 特性

`properties` 对象将包含小部件的可配置属性，这些属性最初是从其在 `widgetConfig.js` 上的定义中获得的。
每当开发人员对 ToolJet 编辑器的检查面板进行更改时，`properties` 中的值就会发生变化。

### 暴露变量

`exposedVariables` 对象将包含在 `widgetConfig.js` 中配置的所有公开变量的值。

### setExposedVariable('exposedVariableName', newValue)

此函数允许您将公开变量的值更新为“newValue”。

### 验证（值）

此函数根据在检查器面板上为小部件配置的验证设置来验证传递的“值”。
它返回一个数组`[isValid, validationError]`，分别表示传递的`value`是否有效，
以及错误消息（如果有的话）。
