---
id: use-form-component
title: 使用表单组件
---

在本操作指南中，我们将构建一个简单的应用程序，该应用程序将利用表单组件将记录添加到数据库中。对于本指南，我们将使用 Google 表格数据源来读取和写入数据。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/how-to/use-form/final.png" alt="如何使用表单" />

</div>

- 让我们连接到数据源，即 Google 表格并授予 `读写` 权限。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-form/read.png" alt="如何使用表单" />

    </div>
- 现在，在画布上拖动一个表格并在其旁边添加表单组件。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-form/table1.png" alt="如何使用表单" />

    </div>

- 目前，表格组件使用默认情况下的示例数据填充。让我们从查询面板创建一个 **新查询** 并选择 **Google 表格** 数据源。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-form/query.png" alt="如何使用表单" />

    </div>

- 查询将从数据库中读取数据，我们将使用返回的数据填充表。转到 **table** 属性并在表数据值中输入 **{{querys.queryname.data}}** 其中 queryname 是我们在上一步中创建的查询的名称。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-form/populate.png" alt="如何使用表单" />

    </div>

- 让我们转到表单并在其中添加将记录添加到数据库所需的组件。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-form/form1.png" alt="如何使用表单" />

    </div>

- 由于我们的数据库记录有五个字段 **Id**、**Title**、**Price**、**Category** 和 **Image** 我们将在表单中添加相同的组件。表单已经带有提交按钮，所以我们不必添加它。对于 Id、Title 和 Image，我们将使用文本输入，对于价格，我们将使用数字输入，对于类别，我们可以使用下拉组件。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-form/form2.png" alt="如何使用表单" />

    </div>

- 在编辑表单属性之前，让我们对添加到其中的组件进行一些更改。首先编辑**数字输入**的属性，设置默认值、最大值和最小值，然后编辑**下拉**组件，设置选项值和选项标签。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-form/categ.png" alt="如何使用表单" />

    </div>

- 现在，我们可以编辑表单组件的属性。转到其属性，在**提交表单的按钮**中选择表单上已有的按钮 1。转到事件处理程序，对于**提交**事件，我们将**运行查询**，该查询将从表单中获取数据并将其存储到数据库中。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/use-form/event.png" alt="如何使用表单" />

    </div>

- 让我们创建一个查询，该查询将从表单中获取数据并在工作表中添加一条记录。创建一个新的 google sheeet 查询并从操作中选择 **Append data to a spreadsheet**
    ```js
    [ 
        {
            "id":"{{components.form1.data.textinput1.value}}",
            "title":"{{components.form1.data.textinput2.value}}",
            "price":"{{components.form1.data.numberinput1.value}}",
            "category":"{{components.form1.data.dropdown1.value}}",
            "image":"{{components.form1.data.textinput4.value}}"
        } 
    ]
    ```

- 完成后，保存查询并将其添加到表单的事件处理程序中。

- 现在，此应用程序可用于从 Google 表格加载数据，并且该表单可用于将更多记录附加到表格。

:::tip
- 确保启用 **Read** 查询的 **Run query on page load?** 选项，以便在每次加载应用程序时填充表格
- 您还可以在 **append** 查询上添加一个事件处理程序以在 **append** 成功时运行 **read** 查询，这将在 append 完成时更新表数据
- 详细了解连接 Google 表格数据源和可用的 CRUD **操作** [此处](/docs/data-sources/google.sheets)。
:::
