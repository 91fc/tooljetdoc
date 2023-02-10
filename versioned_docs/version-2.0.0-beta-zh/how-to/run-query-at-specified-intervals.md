---
id: run-query-at-specified-intervals
title: 以指定的时间间隔运行查询
---

在本操作指南中，我们将学习如何在特定时间间隔触发查询。

- 让我们转到 ToolJet 仪表板并**创建一个新应用程序**
- 打开应用程序构建器后，将 **table** 组件拖到画布上
- 现在，从应用程序构建器底部的查询面板创建一个新的 REST API 查询。我们将使用来自模拟 **REST API** 的数据，然后将数据加载到表中。让我们创建一个 REST API，从下拉列表中选择 `GET` 方法，输入端点 `(https://jsonplaceholder.typicode.com/posts)` ，将查询命名为 `post` ，然后**保存并运行**它
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/setinterval/query.png" alt="REST API 查询" width="600" />

    </div>
- 转到 **表属性** 并通过向 **表数据** 属性添加值来将查询数据连接到表，该属性是 `{{queries.post.data}}`
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/setinterval/data.png" alt="REST API query" width="300" />

    </div>

- 现在，我们将创建一个 RunJS 查询，该查询将首先设置一个名为 interval 的变量，该变量将包含 setInterval() 方法返回的值，该方法以指定的时间间隔调用函数 countdown 。倒计时函数具有触发我们在上一步中创建的 `post` 查询的代码。
    
    ```js
    actions.setVariable('interval',setInterval(countdown, 5000));
    function countdown(){
	    queries.post.run()
    }
    ```
- 转到查询的**高级**选项卡，启用 `在页面加载时运行查询？` 这将在加载应用程序时触发此 RunJS 查询。将查询命名为 `set` 并**保存**。请注意，您必须保存查询而不是 `保存并运行` ，因为这样做会触发查询并且您将无法停止查询，除非您重新加载页面或返回仪表板。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/setinterval/set.png" alt="REST API 查询" width="700" />

    </div>
- 为了防止查询无限期地触发，我们将创建另一个将使用 clearInterval() 方法的 RunJS 查询。在这个方法中，我们将从我们在 set 查询中创建的变量中获取值。将此查询保存为 `clear` 。
    ```js
    clearInterval(variables.interval)
    ```
- 最后，让我们在画布上添加一个**按钮**，并将**事件处理程序**添加到按钮以运行 `清除` 查询。
- 现在，无论何时加载应用程序，都会触发 **set** 查询，并将以指定的时间间隔继续触发 `post` 查询。每当用户想要 **停止** 查询时，他们可以单击 **按钮** 来触发 **clear** 查询，这将清除间隔。
