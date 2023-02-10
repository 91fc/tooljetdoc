---
id: bulk-update-multiple-rows
title: 批量更新表中的多行
---

# 批量更新表中的多行

目前，ToolJet 中的数据源具有**批量更新（GUI 模式）** 操作，但仅适用于单行中所做的更改。我们很快将添加一个新操作来批量更新多行，但现在我们可以通过创建自定义 JS 查询来批量更新多行。

在本指南中，我们假设您已成功连接数据源。对于本指南，我们将使用 PostgreSQL 数据源作为示例数据库，目前，此解决方法只能用于 PostgreSQL 和 MySQL。

## 1. 创建查询从数据库中获取数据

让我们创建将从数据库中获取数据的查询：

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 批量更新表格中的多行](/img/how-to/bulk-update-multiple/postgres1.png)

</div>

## 2.显示表上的数据

- 在画布上拖动一个 **Table** 小部件，然后单击其手柄以打开左侧栏中的属性
- 编辑**表数据**字段值并输入**`{{queries.postgresql1.data}}`**

<div style={{textAlign: 'center'}}>

![ToolJet - 操作方法 - 批量更新表格中的多行](/img/how-to/bulk-update-multiple/showData.png)

</div>

## 3. 使列可编辑

- 转到 **Columns**，添加或编辑列部分并输入要在表格上显示的 **Column Name** 和 **Key** 名称。键是数据库中列的名称。
- 为您想要编辑的列启用 **Make editable** 的切换。

<div style={{textAlign: 'center'}}>

![ToolJet - 操作方法 - 批量更新表格中的多行](/img/how-to/bulk-update-multiple/columns.png)

</div>

## 4. 为表格小部件启用批量更新选项

- 转到**选项**部分并启用**显示更新按钮**。启用此功能将在表格底部添加两个按钮 - **保存更改** 和 **放弃更改**，仅当表格中的任何单元格被编辑时。
- 您还可以启用突出显示所选行。（**可选**）

<div style={{textAlign: 'center'}}>

![ToolJet - 操作方法 - 批量更新表格中的多行](/img/how-to/bulk-update-multiple/options.png)

</div>

## 5. 创建自定义 JS 查询

我们将创建一个新的自定义 JS 查询 (**runjs1**)，它将生成用于更新多行的 SQL 查询。

```js
const uniqueIdentifier = "id"
const cols = Object.values(components.table1.changeSet).map((col, index) => {
  return {
    col: Object.keys(col),
    [uniqueIdentifier]: Object.values(components.table1.dataUpdates)[index][uniqueIdentifier],
    values: Object.values(col),
  };
});

const sql = cols.map((column) => {
  const { col, id, values } = column;
  const cols = col.map((col, index) => `${col} = '${values[index]}'`);
  return `UPDATE users SET ${cols.join(", ")} WHERE id = '${id}';`;
});

return sql
```
:::info
这里的**唯一标识符**是**id**，这是用来标识数据库中行的列名。
如果您使用不同的列名称，请更新 **唯一标识符**。
:::
<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 批量更新表格中的多行](/img/how-to/bulk-update-multiple/runjs1.png)

</div>

## 6. 创建更新查询

让我们创建一个新的 PostgreSQL 查询并将其命名为 `update` 。在**SQL模式**下，输入`{{queries.runjs1.data.join(' ')}}`并**保存**。

<div style={{textAlign: 'center'}}>

![ToolJet - 操作方法 - 批量更新表格中的多行](/img/how-to/bulk-update-multiple/update.png)

</div>

## 7. 为查询创建流

- 单击 **Table** 小部件的句柄以打开其属性
- 转到**事件**，并添加一个处理程序
- 在Events中选择**Bulk Update**，在Actions中选择**Run Query**，然后在Query中选择**runjs1** query。现在，只要用户编辑表格并点击 **Save Changes** 按钮，runjs1 就会运行。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 批量更新表格中的多行](/img/how-to/bulk-update-multiple/event.png)

</div>

- 现在，转到 **runjs1** 的 **Advanced** 选项卡并添加一个处理程序以运行 **Query Success** 事件的更新查询。现在，无论何时运行 runjs1 查询，都会对数据库执行更新操作。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 批量更新表中的多行](/img/how-to/bulk-update-multiple/success.png)

</div>