---
id: oracledb
title: Oracle DB
---

# Oracle数据库

ToolJet 可以连接到 Oracle 数据库以读取和写入数据。

## 连接

可以使用以下凭据连接 Oracle 数据库：
- **Host**
- **Port**
- **SID / Service Name**（数据库名称必须是 SID/服务名称）
- **Database Name**
- **SSL**
- **Username**
- **Password**
- **Client Library Path**（仅本地设置需要）

<div style={{textAlign: 'center'}}>

![ToolJet - 数据源 - OracleDB](/img/datasource-reference/oracledb/oracleauth.png)

</div>

单击 **测试连接** 按钮以验证凭据是否正确以及 ToolJet 服务器是否可以访问数据库。单击**保存**按钮以保存数据源。

## 查询 Oracle 数据库

添加 Oracle DB 数据源后，单击查询管理器的`+`按钮创建新查询。查询 SQL 有两种模式：

  1. **[SQL模式](/docs/data-sources/oracledb#sql模式)**
  2. **[GUI模式](/docs/data-sources/oracledb#gui模式)**

#### SQL模式

SQL 模式可用于编写原始 SQL 查询。从下拉列表中选择 SQL 模式并在编辑器中输入 SQL 查询。单击`运行`按钮运行查询。

**注意**：查询应在运行前保存。

#### GUI模式


无需编写查询，即可使用 GUI 模式查询 Oracle 数据库。从下拉列表中选择 GUI 模式，然后选择操作**使用主键批量更新**。输入**表**名称和**主键列**名称。现在，在编辑器中以对象数组的形式输入记录。

**示例**：`{{ [ {id: 1, channel: 33}, {id:2, channel:24} ] }}`

单击 **run** 按钮运行查询。 **注意**：查询应在运行前保存。

:::tip
可以使用转换来转换查询结果。阅读我们的转换文档以了解如何操作：**[链接](/docs/tutorial/transformations)**
:::