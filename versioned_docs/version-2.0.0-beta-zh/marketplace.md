---
id: marketplace
title: 市场
---
# ToolJet 市场

ToolJet 插件市场将允许用户为其 ToolJet 实例安装自定义插件（数据源）。这将允许 ToolJet 用户根据他们的要求构建自己的自定义插件，然后轻松地将它们连接到 ToolJet。

## 为您的实例启用市场

用户必须将以下环境变量添加到 [`.env`](/docs/setup/env-vars#marketplace-feature-enable--optional-) 文件以启用市场功能：

```bash
ENABLE_MARKETPLACE_FEATURE=true
```

启用市场功能后，用户可以从仪表板导航栏的下拉菜单中打开 **Marketplace** 页面。用户还可以使用 URL 直接访问市场：`https://tooljet.yourcompany.com/integrations`

:::info
登录的用户应该是**管理员**才能访问市场页面。
:::

## 安装插件

当您使用 [tooljet cli](https://www.npmjs.com/package/@tooljet/cli) [创建插件](#creating-a-marketplace-plugin) 时，会在 **该特定插件的 plugins.json** (`ToolJet/server/src/assets/marketplace/plugins.json`) 文件。

以下是为 AWS S3 插件创建的条目示例：

```json
[
  {
    "name": "AWS S3 插件",
    "description": "AWS S3 数据源插件",
    "version": "1.0.0",
    "id": "s3",
    "repo": "",
    "author": "Tooljet",
    "timestamp": "Mon, 31 Oct 2022 11:02:10 GMT"
  }
]
```

现在要将插件安装到市场，您必须将 npm 包安装到插件：

```bash
npm i <npm-package-name> --workspace=<plugin-name-in-package-json>
```

最后，运行构建命令：

```bash
npm install
npm rubuild --workspaces
```

完成后，您将在市场页面上找到该插件。


## 删除插件

要从市场中删除插件，您只需从 **plugins.json**(`ToolJet/server/src/assets/marketplace/plugins.json`) 中删除插件的对象条目，然后重新运行构建命令。

## 使用插件作为数据源

安装和使用插件作为数据源的流程非常简单。步骤是：
- 去**市场**
- 单击左侧边栏中的市场链接以查看所有可用插件。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/marketplace/marketplacemain.png" alt="市场" />

    </div>
- 单击要安装的插件的 **安装** 按钮
- 安装后，您可以从左侧栏的**已安装**查看已安装的插件。您还可以从市场的已安装部分**删除**插件。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/marketplace/installed.png" alt="已安装的插件" />

    </div>
- 现在，让我们使用已安装的插件作为应用程序的数据源。用户必须打开应用程序，转到应用程序构建器左侧栏上的**添加数据源**按钮，然后在弹出的模式中选择插件。插件部分将包括所有通过 Marketplace 安装的插件。接下来的步骤与将数据源连接到应用程序相同。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/marketplace/datasource.png" alt="安装的插件作为数据源" />

    </div>

## 创建一个市场插件

创建 Marketplace 插件的步骤与创建 [用于 ToolJet 的插件](/docs/contributing-guide/tutorials/creating-a-plugin) 的步骤类似，只是对于 Marketplace 插件，用户必须键入“是”当在 `tooljet 命令行` 中提示`Is it a marketplace integration?` 时。

创建市场插件的步骤是：

- 安装 [tooljet-cli](https://www.npmjs.com/package/@tooljet/cli):
  ```bash
  npm i -g @tooljet/cli
  ```
- 使用 cli 引导一个新插件
  ```bash
  tooljet plugin create bigquery
  ```
- 在 CLI 上，系统会提示您输入显示名称：
  ```bash
  Enter plugin display name:
  ```
- 在下一步中，系统会要求您选择插件类型 **database**、**api** 或 **cloud-storage**
- 现在通过输入“y/N”选择“是否是市场整合？”
- 如果插件托管在 GitHub 上，请输入存储库 URL，否则只需按 Enter 键即可跳至下一步
- 完成后，所有插件文件将在市场目录中生成
  ```bash
  creating plugin... done
  Plugin: bigquery created successfully
  └─ marketplace
    └─ plugin
        └─ bigquery
  ```

:::info
有关**[为 ToolJet 创建插件](/docs/contributing-guide/tutorials/creating-a-plugin)** 的更多信息，请参阅有关创建插件的文档。
:::