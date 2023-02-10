---
id: adding-a-datasource
title: 添加数据源
---

# 添加数据源

:::tip
数据源是在应用程序级别而不是工作区级别创建的。
:::

**数据源管理器** 位于应用程序构建器的左侧栏中。要添加新数据源，请单击<br/> `添加数据源` 按钮。


<img className="screenshot-full" src="/img/tutorial/adding-datasource/add-datasource.png" alt="添加数据源" />


系统将提示您选择要添加的数据源。在本教程中，我们选择 PostgreSQL。然后，您需要提供 PostgreSQL 数据库的凭据。标记为“已加密”的字段在保存到 ToolJet 的数据库之前将被加密。

<div style={{textAlign: 'center'}}>

![ToolJet - 教程 - 添加数据源](/img/tutorial/adding-datasource/datasources.png)

</div>

数据源的名称必须是唯一的（在应用程序内），并且可以通过单击提示顶部的数据源名称来更改。单击“测试连接”按钮以验证连接，这可能需要几分钟时间。验证后，保存数据源。

:::tip
如果您使用的是 ToolJet 云并且您的数据源不可公开访问，请将我们的 IP 地址列入白名单（在创建新数据源时显示）。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tutorial/adding-datasource/postgres.png" alt="postgre 添加数据源" />

</div>