---
id: access-cellvalue-rowdata
title: 更改表格列中的文本颜色
---

# 通过访问表中的 `cellValue` 和 `rowData` 更改列中的文本颜色

在此操作指南中，我们将构建一个应用程序，该应用程序将使用示例 RestAPI 来显示表中的数据，然后我们将根据条件更改列的文本颜色。

- 让我们从创建一个新应用程序开始，然后将一个表格小部件添加到画布中。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 更改表格列中的文本颜色](/img/how-to/change-text-color/newapp.gif)

</div>

- 现在转到应用程序编辑器底部的**查询面板**，然后单击 `+` 按钮。
- 选择 **RestAPI** 数据源

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 更改表格列中的文本颜色](/img/how-to/change-text-color/restapi.png)

</div>

- 现在我们将使用示例 RestAPI 端点 - 我使用了 **coinstats.app** 提供的 API，API-URL：
https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=USD
- 选择 `GET` 方法，输入请求 URL（上一步中的 API URL），为查询命名 - 我将其命名为 `crypto`，然后**创建**查询

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 更改表格列中的文本颜色](/img/how-to/change-text-color/apiendpoint.png)

</div>

- 现在点击查询名称旁边的 **Run** 按钮来运行查询。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 更改表格列中的文本颜色](/img/how-to/change-text-color/runquery.png)

</div>

- 运行查询后，您可以在左侧边栏的**检查器**中检查查询返回的数据。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 更改表格列中的文本颜色](/img/how-to/change-text-color/inspectord.png)

</div>

- 现在我们已经得到了数据，我们将把它显示在表格上。为此，请单击表格的小部件句柄以在右侧栏中打开其属性。
- 在表数据字段中，输入 `{{queries.crypto.data.coins}}` - 正如您在检查器的屏幕截图中看到的，数据位于 `coins` 数组中。您将在字段下方的预览（绿色框）中看到数据。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 更改表格列中的文本颜色](/img/how-to/change-text-color/data.png)

</div>

- 让我们添加要在表格上显示的列。转到 **Columns** 部分，添加列，设置它们的名称，并为每列设置 **key**。我添加了 5 列：**Rank**、**Name**、**Symbol**、**Price** 和 **Market Cap**。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 更改表格列中的文本颜色](/img/how-to/change-text-color/columns.png)

</div>

- 添加列后，您将获得如下表格：

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 更改表格列中的文本颜色](/img/how-to/change-text-color/table.png)

</div>

### 使用 cellValue 改变列文本颜色

现在我们在表格中有了数据，我们将更改 **Price** 和 **Market Cap** 列中的文本颜色。

- 编辑表格属性，转到 **Columns**，然后单击 Price Column 以打开其属性。
- 对于 **Price** 列，我们希望将值大于 1000 的单元格的颜色更改为红色，如果小于 1000，则更改为绿色。为此，我们将在 ** 中设置条件此列的文本颜色**属性：`{{cellValue >= 1000 ? '红色'：'绿色'}}`

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 更改表格列中的文本颜色](/img/how-to/change-text-color/price.png)

</div>

- 同样，我们将为 **Market Cap** 列做。我们想将那些值大于 60000000000 的单元格的文本颜色更改为红色，如果小于 60000000000 则更改为绿色。因此条件将为 `{{cellValue >= 60000000000？ '红色'：'绿色'}}`
- 现在列中单元格的文本颜色将被更新。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 更改表格列中的文本颜色](/img/how-to/change-text-color/cellvalue.png)

</div>

:::info
您也可以使用 Hex Color Code 而不是在平面文本中提及颜色。
:::

### 使用 rowData 改变列文本颜色

- 要使用 `rowData` 变量更改文本的颜色，需要提及我们将在条件中比较其单元格值的列名。让我们通过更改 **Symbol** 列的文本颜色来查看。
- 我们将添加一个条件来查看行数据，如果该行具有名为 `name` 的列，其值为 `Solana` ，那么它应该将颜色更改为红色，否则颜色应为绿色。
- 编辑 Symbol 列的属性，将 **Text Color** 字段值设置为 `{{rowData.name === 'Solana' ? '红色'：'绿色'}}`。
- 您会看到，在 Symbols 列中，除了名称列中具有 Solana 的值外，所有值都变为绿色。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 更改表格列中的文本颜色](/img/how-to/change-text-color/rowData.png)

</div>