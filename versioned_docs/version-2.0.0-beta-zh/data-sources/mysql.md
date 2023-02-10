---
id: mysql
title: MySQL
---

# MySQL

ToolJet 可以连接到 MySQL 数据库以读取和写入数据。

## 连接

ToolJet 需要以下内容才能连接到您的 MySQL 数据库。如果您有自托管的 ToolJet，请确保可以从您的 VPC 访问数据库的主机/IP。如果您使用的是 ToolJet 云，请将我们的 IP 列入白名单。

要添加新的 MySQL 数据库，请单击应用程序编辑器左侧栏数据源面板上的`+`按钮。从弹出的模式中选择 MySQL。

ToolJet 需要以下内容才能连接到您的 MySQL 数据库。

- **Host**
- **Port**
- **Username**
- **Password**

建议创建一个新的 MySQL 数据库用户，以便您可以控制 ToolJet 的访问级别。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/mysql/mysql.png" alt="mysql"/>

</div>

单击 **测试连接** 按钮以验证凭据是否正确以及 ToolJet 服务器是否可以访问数据库。单击**保存**按钮以保存数据源。

## 查询 MySQL

添加 MySQL 数据源后，单击查询管理器的`+`按钮创建新查询。查询 SQL 有两种模式：

  1. **[SQL模式](/docs/data-sources/mysql#sql模式)**
  2. **[GUI模式](/docs/data-sources/mysql#gui模式)**

#### SQL模式

SQL 模式可用于编写原始 SQL 查询。从下拉列表中选择 SQL 模式并在编辑器中输入 SQL 查询。单击`运行`按钮运行查询。

**注意**：查询应在运行前保存。


<img className="screenshot-full" src="/img/datasource-reference/mysql/mysql-sqlmode.png" alt="mysql 模式" />



#### GUI模式

无需编写查询，即可使用 GUI 模式查询 MySQL 数据库。从下拉列表中选择 GUI 模式，然后选择操作**使用主键批量更新**。输入**表**名称和**主键列**名称。现在，在编辑器中以对象数组的形式输入记录。

**示例**：`{{ [ {id: 1, channel: 33}, {id:2, channel:24} ] }}`


<img className="screenshot-full" src="/img/datasource-reference/mysql/mysql-guimode.png" alt="mysql gui 模式" />


单击 **run** 按钮运行查询。 **注意**：查询应在运行前保存。

:::tip
可以使用转换来转换查询结果。阅读我们的转换文档以了解如何操作：**[链接](/docs/tutorial/transformations)**
:::