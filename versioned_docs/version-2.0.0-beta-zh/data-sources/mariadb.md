---
id: mariadb
title: MariaDB
---

# MariaDB

ToolJet 可以连接到 MariaDB 来读写数据。

## 连接

要添加新的 MariaDB 数据源，请单击应用程序构建器左侧栏数据源面板上的`+`按钮。从弹出的模式中选择 MariaDB。

ToolJet 需要以下内容才能连接到您的 DynamoDB。

- **Host**
- **Username**
- **Password**
- **Connection Limit**
- **Port**
- **Database**
- **SSL**
- **SSL Certificate**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/mariadb/connection.png" alt="MariaDB" />

</div>

单击 **测试连接** 按钮以验证凭据是否正确以及 ToolJet 服务器是否可以访问数据库。单击**保存**按钮以保存数据源。

## 查询 MariaDB

单击构建器底部面板中查询管理器的``+``按钮，然后选择在上一步中添加的 MariaDB 数据源。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/mariadb/query.png" alt="MariaDB 查询" />

</div>

单击 **运行** 按钮运行查询。

**注意**：查询应在运行前保存。

:::tip
可以使用转换来转换查询结果。阅读我们的转换文档以了解如何操作：**[链接](/docs/tutorial/transformations)**
:::
