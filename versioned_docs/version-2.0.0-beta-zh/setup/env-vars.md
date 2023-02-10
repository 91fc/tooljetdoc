---
id: env-vars
title: 环境变量
---

# 环境变量

ToolJet 服务器和客户端都需要一些环境变量才能开始运行。

## ToolJet 服务器

#### ToolJet 主机（必需）

| 变量         | 说明                                                      |
| ------------ | --------------------------------------------------------- |
| TOOLJET_HOST | ToolJet 客户端的公共 URL（例如：https://app.tooljet.com） |

#### 密码箱配置（必填）

ToolJet 服务器使用密码箱来加密数据源凭据。您应该使用 32 字节的十六进制字符串设置环境变量`LOCKBOX_MASTER_KEY`。

#### 应用程序机密（必填）

ToolJet 服务器使用安全的 64 字节十六进制字符串来加密会话 cookie。您应该设置环境变量`SECRET_KEY_BASE`。

:::tip
如果安装了 `openssl`，则可以运行以下命令来生成 `LOCKBOX_MASTER_KEY` 和 `SECRET_KEY_BASE` 的值。

对于 `LOCKBOX_MASTER_KEY` 使用 `openssl rand -hex 32`
对于 SECRET_KEY_BASE 使用 openssl rand -hex 64
:::

#### 数据库配置（必填）

ToolJet 服务器使用 PostgreSQL 作为数据库。

| 变量    | 说明                |
| ------- | ------------------- |
| PG_HOST | postgres 数据库主机 |
| PG_DB   | 数据库名称          |
| PG_USER | 用户名              |
| PG_PASS | 密码                |
| PG_PORT | 端口                |

:::tip
如果您使用的是 docker-compose 设置，则可以将 PG_HOST 设置为 postgres ，它将由 docker 解析 DNS
:::

### 禁用数据库和扩展创建（可选）

默认情况下，ToolJet 尝试基于 `PG_DB` 变量集创建数据库，另外我尝试创建 postgres 扩展。这需要 postgres 用户具有 CREATEDB 权限。如果这不能被授予，您可以通过将 `PG_DB_OWNER` 设置为 `false` 来禁用此行为，并且必须手动运行它们。

#### 检查更新（可选）

ToolJet 的自托管版本每 24 小时 ping 我们的服务器以获取最新的产品更新。您可以通过将`CHECK_FOR_UPDATES`环境变量的值设置为`0`来禁用此功能。默认情况下启用此功能。

#### 评论功能启用（可选）

使用此环境变量启用/禁用允许您在画布上添加评论的功能。

| 变量                   | 值                |
| ---------------------- | ----------------- |
| COMMENT_FEATURE_ENABLE | `true` 或 `false` |

#### 多人游戏功能启用（可选）

使用此环境变量启用/禁用允许用户在画布上协作工作的功能。

| 变量               | 值                |
| ------------------ | ----------------- |
| 启用_多人游戏_编辑 | `true` 或 `false` |

#### 市场功能启用（可选）

使用此环境变量启用/禁用允许用户使用 [marketplace](/docs/marketplace) 的功能。

| 变量                       | 值                |
| -------------------------- | ----------------- |
| ENABLE_MARKETPLACE_FEATURE | `true` 或 `false` |

#### 启用 ToolJet 数据库（可选）

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

使用 ENABLE_TOOLJET_DB 启用/禁用允许用户使用内置数据存储来构建应用程序的功能。为了设置它，[按照此处的说明](/docs/tooljet-database#enabling-the-tooljet-database-for-your-instance)。

:::tip
启用此功能后，为`TOOLJET_DB`提供的数据库名称将用于在我们所有生产部署设置的服务器启动过程中创建新数据库。
如果您想手动触发它，请在 ToolJet 服务器上使用命令`npm run db:create`。
:::

#### 服务器主机（可选）

如果后端托管在另一台服务器上，则可以为后端指定不同的服务器。

| 变量       | 值                                                                         |
| ---------- | -------------------------------------------------------------------------- |
| 服务器主机 | 为服务器配置一个主机名作为代理通行证。如果未设置任何值，则默认为`服务器`。 |

#### 禁用多工作区（可选）

如果要禁用多工作区功能，请将环境变量`DISABLE_MULTI_WORKSPACE`设置为`true`。

### 隐藏账户设置链接

如果您想在管理用户页面中对管理员隐藏帐户设置链接，请将环境变量`HIDE_ACCOUNT_SETUP_LINK`设置为`true`，请确保您已配置 SMTP 以接收用户的欢迎邮件。仅当 `DISABLE_MULTI_WORKSPACE` 不是 `true` 时才有效。

#### 禁用注册（可选）

仅当启用多工作区时才会启用注册。如果您想限制注册并仅允许新用户通过邀请，请将环境变量`DISABLE_SIGNUPS`设置为`true`。

:::tip
您仍然可以看到注册页面，但无法成功提交表单。
:::

#### 将客户端作为服务器端点（可选）

默认情况下，将取消设置 `SERVE_CLIENT` 变量，服务器将在其 `/` 端点为客户端提供服务。
您可以将`SERVE_CLIENT`设置为`false`以禁用此行为。

#### 在子路径上服务客户端

如果 ToolJet 托管在域子路径上，您可以设置环境变量 `SUB_PATH` 来支持它。
请注意，子路径将设置为尾随 `/` 并且仅在服务器为前端客户端提供服务时才适用。

#### SMTP 配置（可选）

ToolJet 使用 SMTP 服务发送电子邮件（例如：将新用户添加到工作区时的邀请电子邮件）。

| 变量               | 说明                                    |
| ------------------ | --------------------------------------- |
| DEFAULT_FROM_EMAIL | 来自由 ToolJet 触发的电子邮件的电子邮件 |
| SMTP_USERNAME      | 用户名                                  |
| SMTP_PASSWORD      | 密码                                    |
| SMTP_DOMAIN        | 域名或主机                              |
| SMTP_PORT          | 港口                                    |

#### Slack配置（可选）

如果您的 ToolJet 安装需要 Slack 作为数据源，您需要创建一个 Slack 应用程序并设置以下环境变量：

| 变量                | 说明                      |
| ------------------- | ------------------------- |
| SLACK_CLIENT_ID     | Slack应用程序的客户端 ID  |
| SLACK_CLIENT_SECRET | Slack应用程序的客户端秘密 |

#### 谷歌 OAuth（可选）

如果您的 ToolJet 安装需要访问 Google 表格等数据源，您需要从 Google Cloud Console 创建 OAuth 凭据。

| 变量                 | 说明     |
| -------------------- | -------- |
| GOOGLE_CLIENT_ID     | 客户编号 |
| GOOGLE_CLIENT_SECRET | 客户秘密 |

#### 谷歌地图配置（可选）

如果您的 ToolJet 安装需要`地图`小部件，您需要为 Google 地图 API 创建一个 API 密钥。

| 变量                | 说明              |
| ------------------- | ----------------- |
| GOOGLE_MAPS_API_KEY | 百度地图 API 密钥 |

#### APM 供应商（可选）

指定应用程序监控供应商。当前支持的值 - `sentry`。

| 变量       | 说明             |
| ---------- | ---------------- |
| APM_供应商 | 应用性能监控厂商 |

#### SENTRY DNS（可选）

| 变量       | 说明                                                             |
| ---------- | ---------------------------------------------------------------- |
| SENTRY_DNS | DSN 告诉 Sentry SDK 将事件发送到哪里，以便事件与正确的项目相关联 |

#### 哨兵调试（可选）

打印哨兵日志。

| 变量         | 说明                                |
| ------------ | ----------------------------------- |
| SENTRY_DEBUG | `true` 或 `false`。默认值为 `false` |

#### 服务器 URL（可选）

这用于设置 CSP 标头并将跟踪信息用于 APM 供应商。

| 变量               | 说明                                                     |
| ------------------ | -------------------------------------------------------- |
| TOOLJET_SERVER_URL | ToolJet 服务器的 URL（例如：https://server.tooljet.com） |

#### 发布版本（可选）

设置后，任何支持与发布隔离的 APM 提供商都将对其进行跟踪。

#### NODE_EXTRA_CA_CERTS（可选）

需要为自定义 CA 证书配置 Tooljet，以便能够信任并通过 https 建立连接。这需要您配置一个额外的环境变量 `NODE_EXTRA_CA_CERTS` 以获得您的 CA 证书的绝对路径。这个名为 `cert.pem` 的文件需要是 PEM 格式，并且可以有多个证书。

| 变量                | 说明                                                  |
| ------------------- | ----------------------------------------------------- |
| NODE_EXTRA_CA_CERTS | 证书 PEM 文件的绝对路径（例如：/ToolJet/ca/cert.pem） |


####禁用遥测（可选）

Ping 我们的服务器以每 24 小时更新一次总用户数。您可以通过将`DISABLE_TOOLJET_TELEMETRY`环境变量的值设置为`true`来禁用此功能。默认情况下启用此功能。

#### 密码重试限制（可选）
用户登录密码的最大重试次数默认设置为5次，登录失败5次后将被锁定。使用下面提到的变量来控制此行为：

| 变量                         | 说明                                                                |
| ---------------------------- | ------------------------------------------------------------------- |
| DISABLE_PASSWORD_RETRY_LIMIT | (true/false) 要禁用密码重试检查，如果值为 `true` 则密码重试没有限制 |
| PASSWORD_RETRY_LIMIT         | 更改默认密码重试限制 (5)                                            |

#### SSO 配置（可选）
实例级 SSO 的配置。仅当 `DISABLE_MULTI_WORKSPACE` 不是 `true` 时才有效。

| 变量                         | 说明                                          |
| ---------------------------- | --------------------------------------------- |
| SSO_GOOGLE_OAUTH2_CLIENT_ID  | 谷歌 OAuth 客户端 ID                          |
| SSO_GIT_OAUTH2_CLIENT_ID     | GitHub OAuth 客户端 ID                        |
| SSO_GIT_OAUTH2_CLIENT_SECRET | GitHub OAuth 客户端密码                       |
| SSO_GIT_OAUTH2_HOST          | GitHub OAuth 主机名（如果 GitHub 是自托管的） |
| SSO_ACCEPTED_DOMAINS         | 支持 SSO 身份验证的逗号分隔电子邮件域         |
| SSO_DISABLE_SIGNUPS          | 如果经过身份验证的用户不存在，则禁用用户注册  |

## ToolJet 客户端

#### 服务器 URL（可选）

单独构建客户端时需要。

| 变量               | 说明                                                     |
| ------------------ | -------------------------------------------------------- |
| TOOLJET_SERVER_URL | ToolJet 服务器的 URL（例如：https://server.tooljet.com） |


#### 服务器端口（可选）

这可用于本地开发，它将像这样设置服务器 url：`http://localhost:<TOOLJET_SERVER_PORT>`

| 变量                | 说明                               |
| ------------------- | ---------------------------------- |
| TOOLJET_SERVER_PORT | ToolJet 服务器的端口（例如：3000） |


#### 资产路径（可选）

当要从其他地方（例如：CDN）加载客户端的资产时，这是必需的。
这可以是绝对路径，也可以是相对于主 HTML 文件的路径。

| 变量     | 说明                                             |
| -------- | ------------------------------------------------ |
| 资产路径 | 网站的资产路径（例如：https://app.tooljet.com/） |


#### 将客户端作为服务器端点（可选）

默认情况下，客户端构建将完成以使用 ToolJet 服务器提供服务。
如果您打算单独使用客户端，则可以将 `SERVE_CLIENT` 设置为 `false`。

## PostgREST 服务器（可选）

| 变量             | 说明                             |
| ---------------- | -------------------------------- |
| PGRST_JWT_SECRET | 提供 JWT 令牌客户端用于身份验证  |
| PGRST_DB_URI     | tooljet 数据库的数据库连接字符串 |
| PGRST_LOG_LEVEL  | `info`                           |

如果您打算对上述配置进行更改。请参考 [PostgREST 配置文档](https://postgrest.org/en/stable/configuration.html#environment-variables)。

:::tip
如果安装了 openssl，则可以运行以下命令 openssl rand -hex 32 来生成 PGRST_JWT_SECRET 的值。

如果未指定此参数，则 PostgREST 拒绝身份验证请求。
:::

:::info
请确保 DB_URI 的格式为 `postgrest://[USERNAME]:[PASSWORD]@[HOST]:[PORT]/[DATABASE]`
:::
