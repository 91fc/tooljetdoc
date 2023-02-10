---
id: run-js
title: 运行JavaScript代码
---

# 运行JavaScript代码

您可以编写自定义 JavaScript 代码来与组件和查询进行交互。为此，您只需创建一个新查询并从数据源下拉列表中选择**运行 JavaScript 代码**。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/custom-javascript/run-js.png" alt="运行 JavaScript 代码" />

</div>

#### 示例：显示随机数

- 让我们在容器小部件中拖动一个**按钮**和一个**文本**小部件。
- 单击查询面板上的`+`以创建查询并从可用数据源中选择**运行 JavaScript 代码**
- 在 **JavaScript 编辑器** 中编写代码并保存查询：
```jsx
const a = Math.floor(Math.random() * (10 - 1)) + 1;
return a;
```
:::tip
- `return` 语句用于结束代码，指定给 `return` 语句的值将存储在查询的 `data` 属性中。
例如：`{{queries.runjs1.data}}`
- 您不能在运行 JavaScript 代码中使用 `console.log`
:::

- 让我们编辑小部件的属性：
    - 向按钮添加事件处理程序 - 选择 **On Click** 事件、**Run Query** 操作，然后选择我们创建的`runjs1`查询。这将在每次单击按钮时运行 JavaScript 代码。
    - 编辑文本小部件的属性 - 在文本字段中输入**随机数：`{{queries.runjs1.data}}`**。它将输出显示为随机数：*来自 JS 代码的结果*


<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/custom-javascript/jsrandom.gif" alt="运行 JavaScript 代码" />

</div>

您还可以编写自定义 JavaScript 代码以从**外部 API** 获取数据并操作图形表示的响应。这是关于我们如何使用自定义 JavaScript 代码构建应用程序的[教程](https://blog.tooljet.com/build-github-stars-history-app-in-5-minutes-using-low-code/)使用 GitHub API。

### 库

ToolJet 允许您在内部使用这些库：

| 名称   | 文档                                                                   |
| ------ | ---------------------------------------------------------------------- |
| Moment | [https://momentjs.com/docs/](https://momentjs.com/docs/)               |
| Lodash | [https://lodash.com/docs/](https://lodash.com/docs/)                   |
| Axios  | [https://axios-http.com/docs/intro](https://axios-http.com/docs/intro) |

:::info
编写自定义 JavaScript 代码时遇到问题？在我们的 [Slack 社区](https://join.slack.com/t/tooljet/shared_invite/zt-r2neyfcw-KD1COL6t2kgVTlTtAV5rtg) 中提问。
:::