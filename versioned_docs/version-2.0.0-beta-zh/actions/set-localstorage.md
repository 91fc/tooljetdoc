---
id: set-localstorage
title: Set local storage 设置本地存储
---

# 设置本地存储

此操作允许您指定要存储在 localStorage 中的 `键` 及其对应的 `值` 。

## 示例：将名称存储在 localStorage 中并在重新加载时显示的应用程序

1.如图所示添加一个输入框、按钮和一个文本

<div style={{textAlign: 'center'}}>

![ToolJet - Action reference -Set local storage sample app](/img/actions/localstorage/1.png)

</div>

2. 选择按钮并添加一个 `Set localStorage` 操作，其中 `key` 设置为 `name` 并且 value 指向文本字段的值

<div style={{textAlign: 'center'}}>

![ToolJet - Action reference -Set local storage sample app](/img/actions/localstorage/2.png)

</div>

3.选择我们添加的文本标签，并将其值设置为localStorage中的名称项

<div style={{textAlign: 'center'}}>

![ToolJet - Action reference -Set local storage sample app](/img/actions/localstorage/3.png)

</div>


4. 现在保存应用程序，这很重要，因为我们即将重新加载页面。

5. 在输入框中输入任何内容，然后单击按钮

<div style={{textAlign: 'center'}}>

![ToolJet - Action reference -Set local storage sample app](/img/actions/localstorage/5.png)

</div>


6. 重新加载页面，你会看到存储在本地存储中的值被持久化并显示在屏幕上！

<div style={{textAlign: 'center'}}>

![ToolJet - Action reference -Set local storage sample app](/img/actions/localstorage/6.png)

</div>