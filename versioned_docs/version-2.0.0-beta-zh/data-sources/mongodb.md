---
id: mongodb
title: MongoDB
---

# MongoDB

ToolJet 可以连接到 MongoDB 来读写数据。

## 连接

如果您有自托管的 ToolJet，请确保可以从您的 VPC 访问数据库的主机/IP。如果您使用的是 ToolJet 云，请将我们的 IP 列入白名单。

要添加新的 MongoDB，请单击应用程序编辑器左下角数据源面板上的`+`按钮。从弹出的模式中选择 MongoDB。

ToolJet 需要以下内容才能连接到您的 MongoDB。

- **Host**
- **Port**
- **Username**
- **Password**

建议创建一个新的 MongoDB 用户，以便您可以控制 ToolJet 的访问级别。

<img className="screenshot-full" src="/img/datasource-reference/mo-connect.png" alt="ToolJet - Mongo 连接" height="250"/>

单击`测试连接`按钮以验证凭据是否正确以及 ToolJet 服务器是否可以访问数据库。单击`保存`按钮以保存数据源。

## 查询 MongoDB

单击编辑器底部面板中查询管理器的`+`按钮，然后选择上一步添加的数据库作为数据源。选择您要执行的操作，然后单击`保存`以保存查询。

<img className="screenshot-full" src="/img/datasource-reference/mo-query.png" alt="ToolJet - Mongo 查询" height="250"/>



单击`运行`按钮运行查询。注意：查询应在运行前保存。

:::tip
可以使用转换来转换查询结果。阅读我们的转换文档以了解如何操作：**[链接](/docs/tutorial/transformations)**
:::

### 支持的操作

- [MongoDB](#mongodb)
  - [连接](#连接)
  - [查询 MongoDB](#查询-mongodb)
    - [支持的操作](#支持的操作)
      - [List Collections](#list-collections)
      - [Fine One](#fine-one)
      - [Fine Many](#fine-many)
      - [Total Count](#total-count)
      - [Count](#count)
      - [Distinct](#distinct)
      - [Insert One](#insert-one)
      - [Insert Many](#insert-many)
      - [Update One](#update-one)
      - [Update Many](#update-many)
      - [Replace One](#replace-one)
      - [Find One and Update](#find-one-and-update)
      - [Find One and Replace](#find-one-and-replace)
      - [Find One and Delete](#find-one-and-delete)
      - [Aggregate](#aggregate)
      - [Delete One](#delete-one)
      - [Delete Many](#delete-many)
      - [Bulk Operations](#bulk-operations)
    - [动态查询](#动态查询)
#### List Collections
返回集合列表
#### Fine One
返回满足给定过滤器和选项的文档。 [参考](https://docs.mongodb.com/drivers/node/v4.0/usage-examples/findOne)
#### Fine Many
返回满足给定过滤器和选项的文档列表。 [参考](https://docs.mongodb.com/drivers/node/v4.0/usage-examples/find/)
#### Total Count
根据集合元数据返回对集合中文档数量的估计。 [参考](https://mongodb.github.io/node-mongodb-native/4.0/classes/collection.html#estimateddocumentcount)
#### Count
返回基于过滤器的文档数。 [参考](https://mongodb.github.io/node-mongodb-native/4.0/classes/collection.html#countdocuments)
#### Distinct
根据过滤器检索字段的不同值列表。 [参考](https://docs.mongodb.com/drivers/node/v4.0/usage-examples/distinct/)
#### Insert One
插入文档。 [参考](https://docs.mongodb.com/drivers/node/v4.0/usage-examples/insertOne/)
#### Insert Many
插入文件清单。 [参考](https://docs.mongodb.com/drivers/node/v4.0/usage-examples/insertMany/)
#### Update One
根据过滤器更新文档。 [参考](https://docs.mongodb.com/drivers/node/v4.0/usage-examples/updateOne/)
#### Update Many
根据过滤器更新许多文档。 [参考](https://docs.mongodb.com/drivers/node/v4.0/usage-examples/updateMany/)
#### Replace One
根据过滤器替换文档。 [参考](https://docs.mongodb.com/drivers/node/v4.0/usage-examples/replaceOne/)
#### Find One and Update
如果您的应用程序在更新后需要文档，请使用它而不是 `Update One`。 [参考](https://mongodb.github.io/node-mongodb-native/4.0/classes/collection.html#findoneandupdate)
#### Find One and Replace
如果您的应用程序在更新后需要文档，请使用它而不是`替换一个`。 [参考](https://mongodb.github.io/node-mongodb-native/4.0/classes/collection.html#findoneandreplace)
#### Find One and Delete
如果您的应用程序在删除后需要文档，请使用它而不是`Delete One`。 [参考](https://mongodb.github.io/node-mongodb-native/4.0/classes/collection.html#findoneanddelete)
#### Aggregate
聚合操作是可用于生成缩减和汇总结果的表达式。 [参考](https://docs.mongodb.com/drivers/node/v4.0/fundamentals/aggregation/)
#### Delete One
根据过滤器删除记录。 [参考](https://docs.mongodb.com/drivers/node/v4.0/usage-examples/deleteOne/)
#### Delete Many
根据过滤器删除许多记录。 [参考](https://docs.mongodb.com/drivers/node/v4.0/usage-examples/deleteMany/)
#### Bulk Operations
执行批量操作。 [参考](https://docs.mongodb.com/drivers/node/v4.0/usage-examples/bulkWrite/)

### 动态查询
```javascript
{ amount: { $lt: '{{ components.textinput1.value }}' }}

// Dates 
// supported: Extended JSON syntax
{ createdAt: { $date: '{{ new Date('01/10/2020') }}'} }
// not supported: MongoDB classic syntax
{ createdAt: new Date('01/10/2020') }
```
参考 [mongodb extended JSON](https://docs.mongodb.com/manual/reference/mongodb-extended-json/) 支持的数据类型
