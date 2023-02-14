---
id: google
title: 谷歌
---

# 谷歌单点登录

- 从 ToolJet 仪表板的左侧栏转到 **工作区设置** (⚙️)
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/general/workside.png" alt="常规设置：SSO" width="500"/>

  </div>

- 从边栏中选择 `SSO`，然后选择 **Google**。默认情况下，谷歌登录将被**禁用**，
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/google/googlessov2.png" alt="常规设置：SSO" />

  </div>

- 启用谷歌。可以看到生成了`Redirect URL`
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/google/googlesso2v2.png" alt="常规设置：SSO" />

  </div>

- 转到 **[Google 云控制台](https://console.cloud.google.com/)** 并创建一个项目。
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/google/create-project.png" alt="常规设置：SSO" width="500"/>

  </div>

- 转到 **[Google 云控制台凭据页面](https://console.cloud.google.com/apis/credentials)**，并创建一个 OAuth 客户端 ID
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/google/create-oauth.png" alt="常规设置：SSO" width="700"/>

  </div>

- 系统会要求您在同意屏幕中选择用户类型。要仅允许工作区内的用户，请选择 `内部` ，否则，
选择 `外部` 。
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/google/oauth-type.png" alt="常规设置：SSO" width="700"/>

  </div>

- 您将被带到一个应用程序注册页面，您可以在其中设置 OAuth 范围。选择 `添加或删除范围` 并添加范围
userinfo.email 和 userinfo.profile 如镜像所显示。这将允许 ToolJet 存储电子邮件和姓名
正在登录的用户
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/google/scope.png" alt="常规设置：SSO" width="700"/>

  </div>

- 将托管 ToolJet 的域设置为授权域
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/google/authorized-urls.png" alt="常规设置：SSO" width="700"/>

  </div>

- 在授权重定向 URI 下设置在管理 SSO `Google` 页面生成的`重定向 URL`
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/google/authorized-redirect-urls.png" alt="常规设置：SSO" width="700"/>

  </div>

最后，在谷歌管理 SSO 页面中设置 `client id`。该值可从您的 [Google 云控制台凭据页面](https://console.cloud.google.com/apis/credentials) 获得

如果您未启用多工作区，Google 登录按钮现在将在您的 ToolJet 登录屏幕中可用。

## 多工作区
如果您启用了 Multi-Workspace，则可以如上所述配置 Google SSO，以便为实例使用环境变量设置默认 SSO。

| 变量                        | 说明                 |
| --------------------------- | -------------------- |
| SSO_GOOGLE_OAUTH2_CLIENT_ID | 谷歌 OAuth 客户端 ID |

重定向 URL 应该是 `<host>/sso/google`
