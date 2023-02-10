---
id: workspace-environment-variables
title: 工作区变量
---

工作区变量是具有某些值（通常是令牌/密钥/API 密钥）的变量，可以在同一工作区的不同应用程序中使用。

## 我们如何将这些变量添加到工作区？

假设您想要在同一工作区的多个应用程序的查询或小部件中使用一个 `API 密钥` 或一个值，那么工作区管理员或具有权限的用户可以添加一个环境变量。

#### 添加环境变量
- 转到 ToolJet 仪表板，然后单击导航栏上的下拉菜单以显示 `工作区` 选项
- 选择 `管理环境变量` 
- 点击 `添加新变量` 按钮
- 给变量一个 `Name`，设置值，选择 `Type`，切换 `Encryption`，然后点击 **Add Variable** 按钮
- 现在这个变量可以在这个工作区的任何应用程序中使用

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tutorial/use-env-org-vars/work-var.gif" alt="添加变量" />

</div>

### 变量类型

- **客户端**：客户端变量可用于小部件和查询。

- **服务器**：服务器变量可用于除 `RunJS` 之外的所有查询。我们不允许服务器变量与小部件一起使用的原因是这些变量仅在运行时解析，因此它们是高度安全的。

:::info
变量类型一旦创建就无法更改。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tutorial/use-env-org-vars/variable-type.png" alt="变量类型" width="700"/>

</div>

### 加密

此功能使我们能够添加带和不带 `加密` 的客户端变量。默认情况下，服务器变量总是加密的。

### 在应用中使用变量

让我们使用我们在 [此处](Workspace-environment-variables#adding-the-environment-variable) 创建的变量。如果您以前使用过 ToolJet，那么您就会知道，为了从任何变量中获取值，我们使用 JS 符号，即 `{{}}`，但是对于使用工作区变量，我们有不同的开始和结束符号 `%% %%`。环境变量在 js 代码 `{{}}` 中不起作用。

因此，使用我们之前创建的变量的语法将是 `%%client.pi%%` 

**客户端变量使用示例：**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tutorial/use-env-org-vars/variable-usage.png" alt="variable-usage" width="700"/>

</div>

**服务器变量使用示例：**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tutorial/use-env-org-vars/server-variable-usage.png" alt="server-variable-usage" width="700" />

</div>
