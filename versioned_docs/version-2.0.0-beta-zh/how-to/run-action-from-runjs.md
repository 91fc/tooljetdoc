---
id: run-actions-from-runjs
title: 从 RunJS 查询运行操作
---

# 从 RunJS 查询运行 `Actions`

现在，您可以从 RunJS 查询中触发 ToolJet 中可用的所有 `操作` 。本指南包括每个操作的语法以及示例。

### 运行查询

**句法：**

```js
queries.queryName.run()
```
或者
```js
await actions.runQuery('queryName') 
```

**示例：** 在下面的屏幕截图中，我们使用可用于 `运行查询` 操作的两种不同语法触发两个不同的查询 `客户` 和 `getData` 。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 从 RunJS 查询运行操作](/img/how-to/run-actions-from-runjs/runquery.png)

</div>

### 设置变量

**句法：**

```javascript
actions.setVariable(variableName, variableValue)
```

**示例：** 在下面的屏幕截图中，我们正在设置两个变量 `test` 和 `test2`。 `test` 变量包含一个数值，因此我们没有将其括在引号中，但变量 `test2` 是一个字符串，因此我们将其括在引号中。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 从 RunJS 查询运行操作](/img/how-to/run-actions-from-runjs/setvariable.png)

</div>

### 取消设置变量

**句法：**

```javascript
actions.unSetVariable(变量名)
```

**示例：** 在下面的屏幕截图中，我们正在取消设置我们在上一步中创建的变量 `test2`。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 从 RunJS 查询运行操作](/img/how-to/run-actions-from-runjs/unsetvariable.png)

</div>

### 登出

**句法：**

```javascript
actions.logout()
```

**示例：** 触发 `actions.logout()` 将从 ToolJet 注销当前登录的用户，并将重定向到登录页面。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 从 RunJS 查询运行操作](/img/how-to/run-actions-from-runjs/logout.png)

</div>

### 显示模态

**句法：**

```javascript
actions.showModal('modalName')
```

**示例：** 在下面的屏幕截图中，画布上有一个模态框（将其从 `modal1` 重命名为 `formModal`），我们使用 RunJS 查询来显示模态框。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 从 RunJS 查询运行操作](/img/how-to/run-actions-from-runjs/showmodal.png)

</div>

### 关闭模式

**句法：**

```javascript
actions.closeModal('modalName')
```

**示例：** 在下面的屏幕截图中，我们使用 RunJS 查询来关闭我们在上一步中显示的模式。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 从 RunJS 查询运行操作](/img/how-to/run-actions-from-runjs/closemodal.png)

</div>

### 设置本地存储

**句法：**

```javascript
actions.setLocalStorage('key','value')
```

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 从 RunJS 查询运行操作](/img/how-to/run-actions-from-runjs/setlocalstorage.png)

</div>

### 复制到剪贴板

**句法：**

```javascript
actions.copyToClipboard('contentToCopy')
```

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 从 RunJS 查询运行操作](/img/how-to/run-actions-from-runjs/copytoclipboard.png)

</div>

### 生成文件

**句法：**

```javascript
actions.generateFile('fileName', 'fileType', 'data')
```

**示例：** `fileName` 是您要给文件的名称（字符串），`fileType` 可以是 `csv` 或 `text`，而 `data` 是您要存储在文件。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 从 RunJS 查询运行操作](/img/how-to/run-actions-from-runjs/generatefile.png)

</div>

### 转到应用程序

**句法：**

```javascript
actions.goToApp('slug',queryparams) 
```

- `slug` 可以在 `application/` 之后的已发布应用程序的 URL 中找到，或者在 `Share` 模式中找到
- `queryparams` 可以像这样提供 `[{"key":"value"}, {"key2":"value2"}]`

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 从 RunJS 查询运行操作](/img/how-to/run-actions-from-runjs/gotoapp1.png)

</div>

### 显示警报

**句法：**

```javascript
actions.showAlert(alert type , message ) // 警报类型有 info, success, warning, and danger
```

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 从 RunJS 查询运行操作](/img/how-to/run-actions-from-runjs/showalert.png)

</div>









