---
id: oauth2-authorization
title: 使用 OAuth 2.0 的 REST API 身份验证
---

# 使用 OAuth 2.0 的 REST API 身份验证

ToolJet 的 REST API 数据源支持 OAuth 2.0 作为身份验证类型。在本指南中，我们将学习如何使用 **Google OAuth2 API** 为您的 ToolJet 应用程序委派授权和身份验证。

在 ToolJet 中设置 REST API 数据源之前，我们需要配置 **Google Cloud Platform** 以收集授权访问所需的 API 密钥。

## 设置Google Cloud Platform

Google Cloud Platform 提供对 350 多个 API 和服务的访问，这些 API 和服务可让我们从我们的 Google 帐户及其服务访问数据。让我们创建一个 OAuth 应用程序，它可以被授予使用我们的 Google 个人资料数据（例如姓名和个人资料图片）的权限。

1. 登录您的 [Google Cloud](https://cloud.google.com/) 帐户，然后从控制台创建一个新项目。
2. 导航至 **API 和服务**，然后从左侧栏打开 **OAuth 同意屏幕** 部分。
3. 输入申请详情并为您的申请选择合适的范围。我们将选择配置文件和电子邮件范围。
4. 创建 OAuth 同意屏幕后，从左侧边栏的 **Credentials** 部分为 **OAuth 客户端 ID** 创建新的凭证。
5. 选择应用类型，输入应用名称，在Authorized Redirect URIs下添加如下URI：
    1. `https://app.tooljet.com/oauth2/authorize`（如果您使用的是 ToolJet 云）
    2. `http://localhost:8082/oauth2/authorize`（如果您在本地使用 ToolJet）
6. 现在保存，然后您将获得应用程序的 **Client ID 和 Client secret**。

<img class="screenshot-full" src="/img/how-to/oauth2-authorization/gcp.png" alt="ToolJet - 如何 - 使用 OAuth 2.0 进行 REST API 身份验证" height="420"/>

## 使用 Google 的 OAuth 2.0 API 配置 ToolJet 应用程序

让我们按照以下步骤授权 ToolJet 访问您的 Google 个人资料数据：

- 从左侧边栏中选择**添加数据源**，然后从对话框窗口中选择**REST API**。

:::info
您可以通过单击其默认名称 `REST API` 来重命名数据源
:::

- 在 **URL** 字段中，输入基本 URL `https://www.googleapis.com/oauth2/v1/userinfo`；基本 URL 指定 API 服务的网络地址。
- 选择身份验证类型为 `OAuth 2.0` 
- 保留 **Grant Type**、**Add Access Token** 和 **Header Prefix** 的默认值，即分别为 `Authorization Code`、`Request Header` 和 `Bearer`。
- 输入**访问令牌 URL**：`https://oauth2.googleapis.com/token`；此令牌允许用户验证他们的身份，并作为回报，接收一个唯一的访问令牌。
- 输入我们从 [Google 控制台](http://console.developers.google.com/) 生成的 **Client ID** 和 **Client Secret**。
- 在**范围**字段中，输入`https://www.googleapis.com/auth/userinfo.profile`；范围是 OAuth 2.0 中的一种机制，用于限制应用程序对用户帐户的访问。在此处查看 [Google OAuth2 API](https://developers.google.com/identity/protocols/oauth2/scopes#oauth2) 的可用范围。
- 输入**授权网址：**`https://accounts.google.com/o/oauth2/v2/auth`；授权 URL 请求用户授权并重定向以从身份服务器检索授权代码。
- 创建三个**自定义身份验证参数：**

    | 参数          | 说明                                                                                                                                             |
    | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
    | response_type | code（`code`指的是授权码）                                                                                                                       |
    | client_id     | **client_id**                                                                                                                                    |
    | redirect_uri  | `http://localhost:8082/oauth2/authorize` 如果在本地使用 ToolJet 或者输入这个 `https://app.tooljet.com/oauth2/authorize` 如果使用 ToolJet Cloud。 |
    
- 保留 **Client Authentication** 和 **Save** 数据源的默认选择。

<img class="screenshot-full" src="/img/how-to/oauth2-authorization/restapi.png" alt="ToolJet - 如何 - 使用 OAuth 2.0 进行 REST API 身份验证"/>

## 创建查询

让我们创建一个查询来向 URL 发出 `GET` 请求，它将弹出一个新窗口并要求用户对 API 进行身份验证。

- 添加新查询并从下拉列表中选择 REST API 数据源
- 在**方法**下拉列表中选择 `GET` 并提前选项卡切换 `在页面加载时运行查询？` 
- **保存**并**运行**查询。

<img class="screenshot-full" src="/img/how-to/oauth2-authorization/oauth.gif" alt="ToolJet - 如何 - 使用 OAuth 2.0 进行 REST API 身份验证"/>

将弹出一个新窗口进行身份验证，一旦身份验证成功，您可以再次运行查询以获取用户数据，如姓名和个人资料图片。