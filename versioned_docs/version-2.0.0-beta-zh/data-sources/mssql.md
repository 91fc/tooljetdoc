---
id: mssql
title: MS SQL Server / Azure SQL 数据库
---

# MS SQL Server / Azure SQL 数据库


ToolJet 可以连接到 MS SQL Server 和 Azure SQL 数据库来读取和写入数据。

## 连接

如果您有自托管的 ToolJet，请确保可以从您的 VPC 访问数据库的主机/IP。如果您使用的是 ToolJet 云，请将我们的 IP 列入白名单。

要添加新的 MS SQL Server / Azure SQL 数据库，请单击应用程序编辑器左下角数据源面板上的`+`按钮。从弹出的模式中选择`SQL Server`。

ToolJet 需要以下内容才能连接到您的 PostgreSQL 数据库。

- **Host**
- **Port**
- **Username**
- **Password**
- **Azure** - 如果您使用的是 Azure SQL 数据库，请选择此选项。

建议创建一个新的数据库用户，以便您可以控制 ToolJet 的访问级别。

单击`测试连接`按钮以验证凭据是否正确以及 ToolJet 服务器是否可以访问数据库。单击`保存`按钮以保存数据源。

<img className="screenshot-full" src="/img/datasource-reference/mssql/connect.gif" alt="ToolJet - Redis 连接" height="420"/>


## 查询 SQL Server / Azure SQL 数据库
单击编辑器底部面板中查询管理器的`+`按钮，然后选择在上一步中添加的数据库作为数据源。

单击`运行`按钮运行查询。注意：查询应在运行前保存。

<img className="screenshot-full" src="/img/datasource-reference/mssql/query.gif" alt="ToolJet - Redis 连接" height="420"/>


:::tip
可以使用转换来转换查询结果。阅读我们的转换文档以了解如何操作：**[链接](/docs/tutorial/transformations)**
:::
