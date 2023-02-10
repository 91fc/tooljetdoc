---
id: restapi
title: REST API 
---

# REST API 

ToolJet 可以连接到任何可用的 REST 端点。

## 连接

要添加新的 REST API 数据源，请单击应用程序构建器左侧栏上的数据源管理器图标，然后单击`添加数据源`按钮，然后从弹出的模式中选择 REST API。
单击`保存`按钮以保存数据源。

<img class="screenshot-full" src="/img/datasource-reference/rest-api/rest-api.gif" alt="ToolJet - 数据源 - REST API" height="420"/>

ToolJet 需要以下内容才能连接到 REST API 数据源。

- REST 端点的 URL

还支持以下可选参数：

   | 类型    | 说明                          |
   | ------- | ----------------------------- |
   | URL参数 | 附加查询字符串参数            |
   | headers | REST API 源需要的任何标头     |
   | body    | REST API 源需要的任何值或字段 |

:::info
支持的 REST HTTP 方法有 **GET、POST、PUT、PATCH 和DELETE**。
:::

<img class="screenshot-full" src="/img/datasource-reference/rest-api/rest-api-values.gif" alt="ToolJet - 数据源 - REST API" height="420"/>

## 查询 REST API
单击编辑器底部面板中查询管理器的`+`按钮，然后选择在上一步中添加的 REST API 端点作为数据源。

单击`运行`按钮运行查询。

:::note
注意：查询应在运行前保存。
:::

:::tip
可以使用转换来转换查询结果。阅读我们的转换文档以了解如何操作：[链接](/docs/tutorial/transformations)
:::
