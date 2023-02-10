---
id: tooljet-database
title: ToolJet 数据库
---

使用 ToolJet 托管的数据库更快地构建应用程序，并轻松管理您的数据。 ToolJet 数据库无需设置，并为您提供了一个强大的用户界面来管理您的数据。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/db.png" alt="ToolJet 数据库" />

</div>

## 为您的实例启用 ToolJet 数据库

要求：
- PostgREST 服务器
- ToolJet 服务器的附加配置

此功能仅在 [`ENABLE_TOOLJET_DB`](/docs/setup/env-vars#tooljet-database-feature-enable--optional-) 设置为 `true` 时启用。

### PostgREST 服务器

PostgREST 是一个独立的 Web 服务器，可将您的 PostgreSQL 数据库直接转换为用于 Tooljet 数据库的可查询 RESTful API。该服务器仅与 ToolJet 服务器通信，因此不必公开。

:::tip
如果安装了 openssl，则可以运行以下命令 openssl rand -hex 32 来生成 PGRST_JWT_SECRET 的值。

如果未指定此参数，则 PostgREST 拒绝身份验证请求。
:::

| 变量             | 说明                             |
| ---------------- | -------------------------------- |
| PGRST_JWT_SECRET | 提供 JWT 令牌客户端用于身份验证  |
| PGRST_DB_URI     | tooljet 数据库的数据库连接字符串 |
| PGRST_LOG_LEVEL  | `信息`                           |

:::info
请确保 DB_URI 的格式为 `postgres://[USERNAME]:[PASSWORD]@[HOST]:[PORT]/[DATABASE]`
:::

#### 额外的 ToolJet 服务器配置


| 变量              | 说明                            |
| ----------------- | ------------------------------- |
| ENABLE_TOOLJET_DB | `true` 或 `false`               |
| TOOLJET_DB        | 默认值为`tooljet_db`            |
| TOOLJET_DB_HOST   | 数据库主机                      |
| TOOLJET_DB_USER   | 数据库用户名                    |
| TOOLJET_DB_PASS   | 数据库密码                      |
| TOOLJET_DB_PORT   | 数据库端口                      |
| PGRST_JWT_SECRET  | 提供 JWT 令牌客户端用于身份验证 |
| PGRST_HOST        | postgrest 数据库主机            |


如果您打算对上述配置进行更改。请参考 [PostgREST 配置文档](https://postgrest.org/en/stable/configuration.html#environment-variables)。

:::tip
启用此功能后，为“`TOOLJET_DB`”提供的数据库名称将用于在我们所有生产部署设置的服务器启动过程中创建新数据库。
如果您想手动触发它，请在 ToolJet 服务器上使用命令“`npm run db:create`”。
:::

## 特征

ToolJet 数据库允许您：

- **[维护数据表](#访问-tooljet-数据库)** 在一个安全的数据库中，该数据库只能在您的 ToolJet 组织内访问。
- **[使用类似电子表格的界面编辑、搜索、过滤、排序和过滤](#数据库编辑器)** 数据。
- **[快速构建应用程序和编写查询](#从-tooljet-数据库中查询数据)** 与 ToolJet 数据库交互，就像任何其他数据源一样，但无需任何设置。

## 访问 ToolJet 数据库

登录到您的 ToolJet 帐户后，您可以从仪表板的左侧栏导航到 **ToolJet 数据库**。

ToolJet 数据库可用于：**[ToolJet Cloud](https://tooljet.com)**、**[Self-Host](/docs/setup/)** 和 **Enterprise Edition**。您可以使用**数据库编辑器 UI** 查看和管理您的数据库及其包含的数据。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/dbeditor.png" alt="ToolJet 数据库编辑器" width="700"/>

</div>

## 数据库编辑器

您可以直接从数据库编辑器管理 ToolJet 数据库。 ToolJet 数据库将数据组织成可以具有不同结构的**表**。所有的表都会在左侧按字典顺序列出，点击任意一个表可以查看表数据。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/tables.png" alt="ToolJet 数据库编辑器" width="700"/>

</div>

### 添加表

要在 ToolJet 数据库中创建新表，请单击数据库编辑器左上角的 **添加表** 按钮。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/addtable.png" alt="ToolJet 数据库编辑器" width="500"/>

</div>

单击**添加表格**按钮时，右侧会打开一个抽屉，您可以在其中输入新表格的详细信息。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/addtable1.png" alt="ToolJet 数据库编辑器"/>

</div>

#### 要创建新表，您需要：
- 输入一个**表名**
- 添加**列**（任何一列都需要设置为主键）

#### 支持的数据类型
- **varchar**: varchar 数据类型用于存储不定长度的字符
- **serial**：serial 用于生成整数序列，通常用作表的主键。
- **int**：是一种数字数据类型，用于存储整数，即没有小数部分的数字。
- **float**：float 也是一种数字数据类型，用于存储不精确的可变精度值。
- **boolean**：布尔数据类型可以包含 true、false 和 null 值。

单击 **创建** 按钮创建一个新表。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/addtable2.png" alt="ToolJet 数据库编辑器" width="600"/>

</div>

### 搜索表

您可以输入搜索词来搜索数据库中的所有表。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/search.png" alt="ToolJet 数据库编辑器" width="600"/>

</div>

### 添加列

您可以通过单击数据库编辑器顶部的 **添加新列** 按钮向现有表中添加新列。

右侧的抽屉将打开，您可以在其中通过输入新列的值来创建新列，例如：
- **列名**：列的名称（键）
- **数据类型**：检查可用数据类型 [此处](#supported-data-types)
- **默认值** 列的任何默认值（非强制性）

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/newcol.png" alt="ToolJet 数据库编辑器"/>

</div>

### 筛选

您可以通过单击数据库编辑器顶部的 **筛选** 按钮向表中添加任意数量的过滤器。

#### 对表数据添加过滤器
- 从“列”下拉列表中选择一个**列**
- 选择一个 **[操作](#可用的操作是)**
- 为所选操作输入一个**值**

#### 可用的操作是：
- **equals**
- **greater than**
- **greater than or equal**
- **less than**
- **less than or equal**
- **not equal**
- **like**
- **ilike**
- **match**
- **imatch**
- **in**
- **contains**
- **contained**
- **not**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/filter.png" alt="ToolJet 数据库编辑器" width="700" />

</div>

### 排序

要对表格数据进行排序，请单击顶部的**排序**按钮，从下拉列表中选择一个**列**，然后选择顺序**升序**或**降序**。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/sort.png" alt="ToolJet 数据库编辑器" width="700" />

</div>

### 添加新行

要向现有表格数据添加新行，请单击 **添加新行** 按钮。右侧会打开一个抽屉，您可以在其中**输入新行的值**。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/newrow.png" alt="ToolJet 数据库编辑器" width="700" />

</div>

### 删除记录

要删除一条或多条记录/行，请选中要删除的一条或多条记录右侧的复选框。选择单条记录后，顶部会出现删除记录的按钮，点击**删除记录**按钮即可删除选中的记录。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/delrec.png" alt="ToolJet 数据库编辑器" width="700" />

</div>

### 删除列

要删除特定列，只需单击列名，就会出现**删除**按钮，单击它即可删除该列。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/delcol.png" alt="ToolJet 数据库编辑器" width="700" />

</div>

### 编辑或删除表

当您单击表格名称右侧的烤肉串菜单（三个垂直点图标）时，您将看到两个选项：编辑和删除。
- **编辑** 将允许您重命名表格
- **删除** 将允许您永久删除表格

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/database/deltable.png" alt="ToolJet 数据库编辑器" width="500" />

</div>

## 从 ToolJet 数据库中查询数据

查询 ToolJet 数据库与查询 ToolJet 上的任何其他数据源一样简单。

- 转到**查询面板**，然后单击**+添加**按钮添加新查询，然后选择**运行ToolJetDb查询**
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/database/newquery.png" alt="ToolJet 数据库编辑器" />

    </div>

- 输入要查询的表的**名称**，从下拉列表中选择一个**操作**，**创建**查询，然后**运行**查询以获取响应。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/v2-beta/database/users.png" alt="ToolJet 数据库编辑器" />

    </div>

:::info
- 查询面板上的**预览**按钮返回查询响应而不执行查询。单击后，响应将显示在查询面板的预览部分，可以在 JSON 或 Raw 中查看。
- 创建新查询时，默认情况下查询名称设置为“tooljetdbN”（其中 N 是一个数字）- 您可以通过单击查询名称或从查询面板的左侧栏重命名查询。
:::

### 可用操作

#### 列出行
此操作返回表中所有记录的列表

#### 可选参数
- **过滤器**：通过设置列、操作和值向查询响应添加过滤器。
- **排序**：通过设置列和方向为查询响应添加排序。
- **限制**：限制查询响应。此参数需要一个数值。例如：5

#### 创建行
此操作在表中创建一条新记录

#### 必需的参数
- **列**：从下拉列表中选择一个列并为新记录输入一个值。

#### 更新行
此操作更新表中的现有记录

#### 必填参数
- **过滤器**：通过选择列、操作和更新特定记录的值来添加条件。

#### 删除行
该操作从表中删除一条记录

#### 必需的参数
- **过滤器**：通过选择列、操作和删除特定记录的值来添加条件。

:::info
如果您对 **ToolJet 数据库** 有任何其他问题或反馈，请通过 hello@tooljet.com 联系我们或加入我们的 **[Slack 社区](https://www.tooljet.com)**
:::
