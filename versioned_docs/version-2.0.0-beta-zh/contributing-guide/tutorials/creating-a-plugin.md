---
id: creating-a-plugin
title: 创建插件
---

# 为 ToolJet 创建插件

## 什么是插件

ToolJet 在构建时考虑到了可扩展性。插件允许开发人员使用 JavaScript 扩展 ToolJet 的功能。插件此时只能是连接器。例如，将 PostgreSQL、MySQL、Twilio、Stripe 等数据源连接器构建为插件。

在本指南中，我们将引导您在 `tooljet` cli 的帮助下为 ToolJet 构建插件。

`tooljet` cli 是为轻松构建插件而构建的命令行工具。我们将在本指南中为 BigQuery 构建一个简单的插件。

### 插件是什么样子的？

所有插件都位于 `/plugins` 目录下。插件的结构如下所示：

```
  my-awesome-plugin/
    package.json
    lib/
      icon.svg
      index.ts
      operations.json
      manifest.json
```

- manifest.json 应包含插件名称、描述等信息。
- operations.json 应该包含插件支持的所有操作的元数据。
- index.ts 是主文件。它为插件定义了一个`QueryService`。 `QueryService` 处理查询运行、测试连接、缓存连接等。
- icon.svg 是插件的图标。
- package.json 由 cli 自动生成。

## 入门

1. 安装 [tooljet-cli](https://www.npmjs.com/package/@tooljet/cli)：
  ```bash
  npm i -g @tooljet/cli
  ```

2. 使用 cli 引导一个新插件
  ```bash
  tooljet plugin create bigquery
  ```

  ```bash
  creating plugin... done
  Plugin: bigquery created successfully
  └─ plugins
    └─ packages
        └─ bigquery
  ```

3. 将BigQuery的npm包添加到插件依赖中
  ```bash
  tooljet plugin install @google-cloud/bigquery --plugin bigquery
  ```

4. 现在我们新插件的目录应该如下所示：

  ```bash
  plugins/
    package.json
    packages/
      bigquery/
        __tests__
          bigquery.test.js
        package.json
        lib/
          icon.svg
          index.ts
          operations.json
          manifest.json
  ```

5. 将数据源配置参数添加到manifest.json

  我们的 BigQuery 插件需要 GCP 服务帐户的私钥才能连接到 BigQuery。让我们添加 `private_key` 作为数据源的属性。

  ```json
  {
    "$schema": "https://json-schema.org/",
    "$id": "https://tooljet.io/BigQuery.schema.json",
    "title": "BigQuery datasource",
    "description": "A schema defining BigQuery datasource",
    "type": "api",
    "source": {
      "name": "BigQuery",
      "kind": "bigquery",
      "exposedVariables": {
        "isLoading": false,
        "data": {},
        "rawData": {}
      },
      "options": {
        "private_key": { "encrypted": true }
      }
    },
    "defaults": {
      "private_key": { "value": "" }
    },
    "properties": {
      "private_key": {
        "label": "Private key",
        "key": "private_key",
        "type": "textarea",
        "description": "Enter JSON private key for service account"
      }
    },
    "required": ["private_key"]
  }

  ```

6. 导入npm包BigQuery到index.ts
  ```javascript
  const { BigQuery } = require('@google-cloud/bigquery');
  ```

7. 编辑 index.ts 以包含创建连接的逻辑。 
  ```javascript
  async getConnection(sourceOptions: any, _options?: object): Promise<any> {
    const privateKey = JSON.parse(sourceOptions['private_key']);
    const client = new BigQuery({
      projectId: privateKey['project_id'],
      credentials: {
        client_email: privateKey['client_email'],
        private_key: privateKey['private_key'],
      },
    });

    return client;
  }
  ```

7. 编辑 index.ts 以包含测试连接的逻辑。
  将新数据源添加到 ToolJet 应用程序时，可以测试连接。

  :::info
  注意：每个数据源可能都无法测试连接。如果不适用于您的数据源，您可以通过将 `"customTesting": true,` 添加到插件的 `manifest.json` 来禁用测试连接功能。
  :::

8. 为操作添加清单条目

    在此示例中，让我们为 BigQuery 插件添加两个操作。
    - *List databases* - 列出所有数据库。
    - *查询数据库* - 查询特定的数据库。

    我们需要将条目添加到 `operations.json` 中。 `operations.json` 现在应该如下所示：
    ```json
    {
      "$schema": "https://json-schema.org/",
      "$id": "https://tooljet.io/dataqueries/Bigquery.schema.json",
      "title": "Dynamodb datasource",
      "description": "Operations for BigQuery plugin",
      "type": "object",
      "defaults": {},
      "properties": {
          "operation": {
              "label": "Operation",
              "key": "operation",
              "type": "dropdown-component-flip",
              "description": "Single select dropdown for operation",
              "list": [
                  {
                      "value": "list_datasets",
                      "name": "List Datasets"
                  },
                  {
                      "value": "query",
                      "name": "Query"
                  }
              ]
          },
          "query": {
              "query": {
                  "label": "Query",
                  "key": "query",
                  "type": "codehinter",
                  "description": "",
                  "height": "150px"
              }
          }
      }
    }

    ```

8. 在 `index.ts` 中处理运行查询的逻辑

  `QueryService` 接收数据源的元数据，包括用于连接的凭据和配置以及运行的查询的参数。在我们的示例中，“sourceOptions”将具有与查询关联的 BigQuery 数据源的`private_key`。 `queryOptions` 将具有特定查询的配置和参数。例如，`queryOption.operation` 将给出当前操作的 id。
  
  ```javascript
    export default class BigQueryQueryService implements QueryService {
      async run(sourceOptions: any, queryOptions: any, _dataSourceId: string): Promise<QueryResult> {
        const operation = queryOptions.operation;
        const client = await this.getConnection(sourceOptions);
        let result = {};

        try {
          switch (operation) {
            case 'list_datasets':
                result = await client.getDatasets();
                break;
          }
        } catch (error) {
          throw new QueryError('Query could not be completed', error.message, {});
        }

        return {
          status: 'ok',
          data: result,
        };
      }
    }
  ```

9. 由于这是添加处理`query` 操作逻辑的简单步骤，因此跳过它。

10. 测试文件在创建插件时由cli 生成。您可以使用 `jest` 来编写测试。

可以使用命令`tooljet plugin test --bigquery`运行针对特定插件的测试

11. 插件现在准备好了！
