---
id: github
title: GitHub
---

# GitHub 单点登录

- 从 ToolJet 仪表板的左侧栏转到 **工作区设置** (⚙️)
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/general/workside.png" alt="常规设置：SSO" width="500"/>

  </div>

- 从边栏中选择`SSO`，然后选择**GitHub**。默认情况下，GitHub 登录将被**禁用**，
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/git/gitssov2.png" alt="常规设置：SSO" />

  </div>

- 启用 GitHub。可以看到生成了`Redirect URL`
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/git/gitsso2v2.png" alt="常规设置：SSO" />

  </div>

- 转到 **[GitHub 开发人员设置](https://github.com/settings/developers)** 并导航到 `OAuth Apps` 并创建一个项目。 `Authorization callback URL`应该是Git管理SSO页面中生成的`Redirect URL`。
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/git/create-project.png" alt="常规设置：SSO" width="500" />

  </div>

- 打开申请详情，可以看到`Client ID`
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/git/client-id.png" alt="常规设置：SSO" width="700"/>

  </div>

- 然后通过单击 `生成新的客户端密码` 来创建 `客户端密码` 
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/git/client-secret.png" alt="常规设置：SSO" width="700"/>

  </div>

最后在GitHub管理SSO页面输入**Client Id**和**Client Secret**并保存。

如果您尚未启用多工作区，则 GitHub 登录按钮现在将在您的 ToolJet 登录屏幕中可用。

:::info
如果您使用的是 GitHub Enterprise 自托管，则应配置 `主机名` 。主机名应为 URL，不应以 `/` 结尾，例如：`https://github.tooljet.com`
:::

## 多工作区
如果启用了多工作区，则可以如上所述配置 GitHub SSO，以便为实例使用环境变量设置默认 SSO。

| 变量 | 说明 |
| ---- | ---- |---------- |
| SSO_GIT_OAUTH2_CLIENT_ID | GitHub OAuth 客户端 ID |
| SSO_GIT_OAUTH2_CLIENT_SECRET | GitHub OAuth 客户端密码 |
| SSO_GIT_OAUTH2_HOST | GitHub OAuth 主机名（如果 GitHub 是自托管的） |

重定向 URL 应该是 `<host>/sso/git`