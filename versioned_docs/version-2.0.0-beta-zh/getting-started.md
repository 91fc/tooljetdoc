---
id: getting-started
title: 入门
description: ToolJet 是一个开源低代码框架，用于构建和部署自定义内部工具。 ToolJet 可以连接到您的数据源，例如数据库（PostgreSQL、MongoDB、MS SQL Server、Snowflake、BigQuery 等）、API/GraphQL 端点、SaaS 工具（Airtable、Stripe、Google Sheets 等）和云对象存储服务（ AWS S3、谷歌云存储和 Minio）。连接数据源后，ToolJet 可以对这些数据源运行查询以获取和更新数据。从数据源获取的数据可以使用表格、图表、表单等 UI 小部件进行可视化和修改。
slug: /
---

# 欢迎使用 ToolJet 文档

---

## 什么是 ToolJet

ToolJet 是一个**开源低代码框架**，用于构建和部署自定义内部工具。

ToolJet 附带其名为 **[ToolJet DB](/docs/tooljet-database)** 的内置数据库（建立在 PostgreSQL 之上）。您还可以连接到**外部数据源**，例如**数据库**（PostgreSQL、MongoDB、MS SQL Server、Snowflake、BigQuery 等）、**API/GraphQL 端点**、**SaaS 工具**（Airtable、Stripe、Google Sheets 等）和**云对象存储服务**（AWS S3、Google Cloud Storage 和 Minio）。

连接数据源后，ToolJet 可以在这些数据源上运行**查询**以获取和更新数据。从数据源获取的数据可以使用 UI 小部件（例如表格、图表、表单等）**可视化和修改**。您还可以使用 **[Javascript](/docs/data-sources/run-js) ** 或 **[Python](/docs/data-sources/run-py)** 用于编写业务逻辑或与应用程序的用户界面交互的查询。

<img src="/img/v2-beta/getting_started/intro.png" alt="入门演示应用程序" />

<!-- 为什么 ToolJet 部分被注释掉了。

## 为什么选择 ToolJet

当您构建内部工具时，有很多工具和框架可用。但是使用 ToolJet，您可以让开发人员在几分钟内构建全栈业务应用程序，从而节省开发人员的时间。

- **开源**：ToolJet 是开源的，您可以在 **[GitHub](https://github.com/ToolJet/ToolJet)** 上查看 ToolJet 代码库，或者您可以**部署 ToolJet在您的基础设施上**。
- **全栈平台**：ToolJet有一个**[内置数据库](/docs/tooljet-database)**，**[外部数据源](/docs/data-sources/airtable)**和一个前端构建器，这样您就可以在其中构建一个全栈应用程序。 ToolJet 附带自定义组件，用于导入您自己的 **react 组件**，并能够编写自定义 **JavaScript** 和 **Python** 代码。
- **可扩展**：没有找到适合您的应用程序要求的**组件**或**数据源**？您始终可以使用我们的 **插件开发工具包** 构建您自己的 **组件** 和 **数据源**。
- **强大的应用程序**：借助 ToolJet，开发人员可以为其支持、运营和销售团队快速构建强大的自定义内部工具。构建 CRUD 应用程序、仪表板、管理面板、CRM 等等。

-->

## ToolJet 的工作原理

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/getting_started/howtjworks.png" alt="ToolJet 的工作流程" />

</div>

**使用 ToolJet，您可以通过 3 个简单步骤构建应用程序：**

1. **连接到数据源：**连接到 ToolJet 的内置数据库 **[ToolJet DB](/docs/tooljet-database)**（建立在 PostgreSQL 之上）或您现有的数据源，例如 PostgreSQL， MySQL、Firestore、Stripe、Google Sheets、API 端点等。

2. **构建查询：** ToolJet 为所有支持的数据源提供了查询构建器。您还可以编写 **[Javascript](/docs/data-sources/run-js)** 或 **[Python](/docs/data-sources/run-js)** 查询或使用 **[Transformations ](/docs/tutorial/transformations)** 转换查询响应。

3. **构建用户界面：** ToolJet 的可视化 **[App Builder](/docs/app-builder/overview)** 允许您快速拖放组件（例如：表格、图表、表单等）构建应用程序的用户界面。组件具有诸如“点击”、“选择行”、“页面更改”等事件。ToolJet 应用程序可以在浅色和深色模式下使用。

    :::tip
    ToolJet 将数据源、查询和组件绑定在一起，将业务逻辑转换为自定义应用程序。您还可以使用 **[Group & Permissions](/docs/org-management/permissions)** 和 **[Audit Logging](/docs/Enterprise/audit_logs)** 保护您的 ToolJet 应用程序。
    :::
## 选择您的 ToolJet

根据您打算如何使用它，有几种不同的方法来设置 ToolJet：

- **[ToolJet Cloud](https://www.tooljet.com)**：托管解决方案，只需免费注册并在几秒钟内开始构建应用程序。
- **[本地部署](/docs/setup/)**：推荐用于生产或定制用例的方法。您会找到流行平台（AWS、GCP、Kubernetes 等）的服务器设置指南和一键式部署指南（Heroku、DigitalOcean 等）。
- **[在本地机器上试用 ToolJet](/docs/setup/try-tooljet/)**：使用 docker 在计算机上试用 ToolJet 的最快方法。

:::info
- 数据安全是 ToolJet 的重中之重，请阅读我们的**[此处的数据安全](/docs/security)**。
:::

## 非常快速的快速入门

假设您是一家电子商务公司，您的**客户支持/运营**团队需要一个**支持工具/管理**面板来管理订单、更新库存以及跟踪收入和指标。本快速入门将指导您在 5 分钟内构建您的第一个自定义内部工具。

你会：
- **[创建数据库](#创建数据库)**
- **[创建一个新的应用](#创建一个新的应用)**
- **[构建用户界面](#构建用户界面)**
- **[构建查询并将数据绑定到 UI](#构建查询并将数据绑定到-ui)**
- **[预览、发布和分享应用](#预览发布和分享应用)**

:::tip
在进入快速入门之前，请在 **[ToolJet](https:///www.tooljet.com)** 上注册并创建您的帐户。
:::

### 创建数据库

1. 从仪表板的左侧栏导航到 **ToolJet DB Editor**
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/getting_started/quickstart/11c.png" alt="入门：快速入门" />

    </div>

2. 点击**添加表格**按钮，从右侧滑动的抽屉中输入**表格名称**和**添加列**。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/getting_started/quickstart/table.png" alt="入门：快速入门" />

    </div>

3. 创建表后，单击**添加新行**按钮将数据添加到表中，然后单击**创建**。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/getting_started/quickstart/row.png" alt="入门：快速入门" />

    </div>

:::info
详细了解**[此处为 ToolJet 数据库](/docs/tooljet-database)**
:::

### 创建一个新的应用

1. 要创建新的 ToolJet 应用程序，请转至 **仪表板** -> **从头开始新建应用程序**。

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/getting_started/quickstart/newapp.png" alt="入门：快速入门" />

    </div>

    :::info
    您还可以为您的应用程序使用现有的 UI **模板**，或将应用程序**导入**您的工作区。
    :::

2. 当您点击创建新应用时，**App-builder** 将打开。您可以将您的应用程序从 `untitled` 重命名为 app-builder 左上角的 **Support Tool**。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/getting_started/quickstart/name_app.png" alt="入门：快速入门" />

    </div>

### 构建用户界面

1. 让我们通过在画布上拖放组件来构建应用程序的 UI。
2. 要构建 UI，我们将使用：
    1. **表格**用于显示客户数据
    2. **Text**组件为应用的Title和description作为header
    3. **文本输入**组件，用于获取用户输入的产品名称
    4. **Number Input** 组件，用于获取用户输入的产品数量和价格
    5. **Button** 组件，将用于触发使用按钮的 **OnClick** 事件处理程序在数据库中插入行的查询
    
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/getting_started/quickstart/ui.png" alt="入门：快速入门" />

    </div>

:::info
ToolJet 应用程序的用户界面是使用表格、表单、图表或按钮等组件构建的。查看**组件目录**以了解更多信息。
:::

### 构建查询并将数据绑定到 UI

1. 我们可以从应用程序构建器左侧栏上的 **数据源管理器** 添加新数据源，但由于我们使用的是 **ToolJet 数据库**，我们不需要添加任何外部数据源。转到 **查询面板 -> 运行 ToolJetDb 查询**
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/getting_started/quickstart/querypanel.png" alt="入门：快速入门" />

    </div>

    :::info
    ToolJet 可以连接到多个数据库、API 和外部服务以获取和修改数据。查看 **数据源目录** 以了解更多信息。
    :::

2. 从下拉列表中选择一个 **Table**，从 **Operation** 下拉列表中选择 **List rows** 选项，您可以保留其他查询参数。向下滚动并启用 **Run this query on application load** - 这将在加载应用程序时触发查询。

3. 单击**Create** 创建查询，然后单击**Run** 触发查询并获得响应。您还可以通过单击 **Preview** 按钮而不触发查询来检查查询响应。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/getting_started/quickstart/query.png" alt="入门：快速入门" />

    </div>

4. 通过单击组件句柄转到**表格属性**，并将查询返回的数据绑定到**表格数据**属性中。在 ToolJet 中构建应用程序时，`{{}}` 中的任何内容都是 JavaScript，我们使用 javascript 点符号从查询中获取数据并使用 **{{queries.tooljetdb1.data}}** 填充表。输入表格数据后，表格将自动填充。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/getting_started/quickstart/tabledata.png" alt="入门：快速入门" />

    </div>

5. 让我们创建另一个查询，它将从**输入字段**获取数据，并将在 tooljet 数据库中添加一个新行。 **创建新查询** -> **选择表（客户）** -> **选择操作（创建行）** -> 添加具有相应值的以下列：
    1. **id** - `{{components.textinput1.value}}`
    2. **数量** - `{{components.numberinput1.value}}`
    3. **价格** - `{{components.numberinput2.value}}`
    4. **created_at** - `{{moment().format("DD/MM/YYYY hh:mm A")}}`（我们正在使用 **momentjs 库** 从系统中获取当前日期而不是让用户输入）

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/getting_started/quickstart/query2.png" alt="入门：快速入门" />

    </div>

    :::Tip
    您还可以将事件处理程序添加到此查询以获取 **On Success** 事件，以运行填充表的“tooljetdb1”查询，以便在成功时刷新表。
    :::

6. 现在，让我们将此查询绑定到 **Add Product** 按钮。单击按钮句柄以打开其属性，**添加处理程序** -> **选择事件（单击时）** -> **选择操作（运行查询）** -> **选择查询（tooljetdb2） **。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/getting_started/quickstart/event.png" alt="入门：快速入门" />

    </div>

:::info
- 您可以使用 **Transformations** 操作查询返回的数据
- 您还可以**运行 JS 查询**或**Python 查询**以在 ToolJet 中执行自定义行为
:::

### 预览、发布和分享应用

1. 点击app builder右上角的**Preview**，可以立即查看当前打开的production app版本。
2. 点击 **Release** 按钮发布应用程序的当前版本并将更改推送到生产环境。
3. **分享**选项允许您与其他用户分享应用程序的**已发布版本**，或者您也可以将应用程序设为**公开**，任何知道 URL 的人都可以使用该应用程序。

:::tip
您可以使用 **Org Management** 控制用户对您的 ToolJet 应用程序和资源的访问权限。
:::

## 我可以用 ToolJet 做什么

如果您正在为您的组织构建内部工具，这里有一些示例用例教程供您入门：

- **[构建功能请求管理应用程序](https://youtu.be/c2sbFTDUMzs)**
- **[使用 Baserow 和 ToolJet 构建工单分类应用程序](https://blog.tooljet.com/build-a-ticket-triaging-app-with-baserow-and-tooljet/)**
- **[构建 MinIO 文件浏览器应用程序](https://blog.tooljet.com/building-a-minio-file-explorer-app-in-30-minutes/)**
- **[构建谷歌云存储 (GCS) 文件资源管理器应用程序](https://blog.tooljet.com/build-internal-file-explorer-application-using-google-cloud-storage-gcs-and-tooljet /)**
- **[构建 AWS S3 文件资源管理器应用程序](https://blog.tooljet.com/building-an-app-to-view-and-upload-files-in-aws-s3-bucket/)**
- **[构建 Stripe 退款应用程序](https://blog.tooljet.com/build-a-stripe-refund-tool-using-low-code/)**
- **[构建 WhatsApp CRM](https://blog.tooljet.com/build-a-whatsapp-crm-using-tooljet-within-10-mins/)**
- **[构建加密货币仪表板](https://blog.tooljet.com/how-to-build-a-cryptocurrency-dashboard-in-10-minutes/)**
- **[构建 Redis GUI](https://blog.tooljet.com/building-a-redis-gui-using-tooljet-in-5-minutes/)**

在我们的 **[博客](https://blog.tooljet.com/)** 上查找更多教程。

## 对于 ToolJet 贡献者

要为 ToolJet 代码、插件和文档做出贡献，请参阅我们的 **[贡献指南](/docs/category/contributing-guide)**。

[![GitHub 贡献者](https://img.shields.io/github/contributors/tooljet/tooljet)](https://github.com/ToolJet/ToolJet/contributors)
[![GitHub 问题](https://img.shields.io/github/issues/ToolJet/ToolJet)](https://github.com/ToolJet/ToolJet/issues)
[![GitHub stars](https://img.shields.io/github/stars/ToolJet/ToolJet)](https://github.com/ToolJet/ToolJet/stargazers)
[![GitHub 许可证](https://img.shields.io/github/license/ToolJet/ToolJet)](https://github.com/ToolJet/ToolJet)

<a href="https://github.com/tooljet/tooljet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tooljet/tooljet&max=300&columns=20" />
</a>

## 帮助和支持
- 我们已经广泛记录了 ToolJet 的功能，但如果您遇到困难，请随时发送电子邮件至 **hello@tooljet.com**
- 如果您使用的是 ToolJet 云，请单击左下角的聊天图标以获得即时帮助。
- 如果您发现错误，请为此创建一个**[GitHub 问题](https://github.com/ToolJet/ToolJet/issues)**。
- 欢迎加入我们高度活跃的 **[Slack 社区](https://www.tooljet.com/slack)**。
