---
id: minio
title: MinIO
---

# MinIO

ToolJet 可以连接到 minio 并对其执行各种操作。

## 支持的操作

- **Read object**
- **Put object**
- **Remove object**
- **List buckets**
- **List objects in a bucket**
- **Presigned url for download**
- **Presigned url for upload**


## 连接

要添加新的 minio 源，请单击应用程序编辑器左侧栏中的 **添加或编辑数据源** 图标，然后单击`添加数据源`按钮。从弹出的模式中选择 Minio。

ToolJet 需要以下内容才能连接到您的 DynamoDB：

- **Host**
- **Port**
- **Access key**
- **Secret key**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/minio-connect.png" alt="miniIo connect" />

</div>

单击 **测试连接** 按钮以验证凭据是否正确以及 ToolJet 服务器是否可以访问数据库。单击**保存**按钮以保存数据源。

## 查询Minio

点击编辑器底部面板**查询管理器**的`+`按钮，选择上一步添加的数据源作为数据源。选择要执行的操作并单击**保存**以保存查询。

<img className="screenshot-full" src="/img/datasource-reference/minio-query.png" alt="miniIo query" />

单击 **运行** 按钮运行查询。
**注意**：查询应在运行前保存。

:::tip
可以使用转换来转换查询结果。阅读我们的转换文档以了解如何操作：[链接](/docs/tutorial/transformations)
:::
