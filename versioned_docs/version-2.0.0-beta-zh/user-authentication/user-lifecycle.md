---
id: user-lifecycle
title: 用户生命周期
---

# 用户生命周期

## 单工作区

### 用户注册
- 如果系统中没有用户，登录页面将有 `注册` 选项。用户可以通过输入他们的电子邮件地址进行注册。 Tooljet 将向该电子邮件地址发送一封带有激活 URL 的欢迎电子邮件。用户可以按照激活 URL 并加入 ToolJet。

  <div style={{textAlign: 'center'}}>

  ![ToolJet - 单一工作区注册](/img/user-lifecycle/single-ws-signup.png)

  </div>

- 具有管理员权限的用户可以邀请成员

  <div style={{textAlign: 'center'}}>

  ![ToolJet - 单工作区邀请用户](/img/user-lifecycle/user-invite-sw.png)

  </div>

- 受邀用户将收到带有激活 URL 的欢迎电子邮件，未注册用户可以点击链接并设置 Tooljet 帐户

  <div style={{textAlign: 'center'}}>

  ![ToolJet - 单工作区接受邀请](/img/user-lifecycle/accept-invite-sw.png)

  </div>

- 受邀用户可以通过 SSO 登录加入，无需使用邀请链接

  <div style={{textAlign: 'center'}}>

  ![ToolJet - 单工作区接受邀请](/img/user-lifecycle/sso-onboard-sw.png)

  </div>

- 如果在 SSO 常规设置中启用了 `启用注册` 选项，则用户无需邀请即可通过 SSO 登录设置帐户

  <div style={{textAlign: 'center'}}>

  ![ToolJet - 使用 SSO 注册单一工作区](/img/user-lifecycle/sso-enable-signup-sw.png)

  </div>

### 存档用户
  - 工作区管理员可以使用 `管理用户` 页面存档用户

    <div style={{textAlign: 'center'}}>

    ![ToolJet - 单工作区存档用户](/img/user-lifecycle/archive-user.png)

    </div>

### 取消归档用户
  - 工作区管理员可以使用 `管理用户` 页面取消存档用户

    <div style={{textAlign: 'center'}}>

    ![ToolJet - 单工作区取消存档用户](/img/user-lifecycle/unarchive-sw.png)

    </div>

  :::info
  存档或取消存档将影响用户登录，除非用户处于活动状态，否则用户将无法使用电子邮件 ID 和密码登录
  :::

## 多工作区

:::info
[此处](/docs/tutorial/multiworkspace) 查看多工作区文档。
:::

### 用户入职

  - 用户可以使用登录页面上提供的注册链接进行注册，用户将收到一封带有激活链接的欢迎电子邮件。将为用户创建新的工作区。

    <div style={{textAlign: 'center'}}>

    ![ToolJet - 多工作区注册](/img/user-lifecycle/signup-mw.png)

    </div>

  - 可以将用户添加到多个工作区。用户可以创建自己的工作区并对其进行管理。

    <div style={{textAlign: 'center'}}>

    ![ToolJet - 多工作区注册](/img/user-lifecycle/user-mw.png)

    </div>

  - 可以邀请处于工作区活动状态的现有用户并加入其他工作区，用户将收到一封包含加入链接的邀请电子邮件。如果系统中不存在用户，那么他们将收到一封欢迎电子邮件来设置帐户，用户可以点击链接并设置帐户，一旦完成，用户将被分配到为用户创建的新工作区。

    <div style={{textAlign: 'center'}}>

    ![ToolJet - 多工作区注册](/img/user-lifecycle/invite-link-mw.png)

    </div>

  - 受邀用户可以通过 SSO 登录登录，而无需使用来自工作区 [登录页面](/docs/user-authentication/general-settings#login-url) 的邀请链接

    <div style={{textAlign: 'center'}}>

    ![ToolJet - 单工作区接受邀请](/img/user-lifecycle/sso-onboard-sw.png)

    </div>

  - 如果在工作区的 SSO [常规设置](/docs/user-authentication/general-settings#enable-signup) 中启用了 `启用注册` 选项，则用户可以通过 SSO 登录设置帐户，而无需来自工作区的邀请 [登录页面](/docs/user-authentication/general-settings#login-url)

    <div style={{textAlign: 'center'}}>

    ![ToolJet - 使用 SSO 注册单一工作区](/img/user-lifecycle/sso-enable-signup-sw.png)

    </div>

### 存档用户
  - 工作区管理员可以使用 `管理用户` 页面存档用户

    <div style={{textAlign: 'center'}}>

    ![ToolJet - 单工作区存档用户](/img/user-lifecycle/archive-user.png)

    </div>

### 取消归档用户
  - 工作区管理员可以使用 `管理用户` 页面取消存档用户

    <div style={{textAlign: 'center'}}>

    ![ToolJet - 单工作区取消存档用户](/img/user-lifecycle/unarchive-user-mw.png)

    </div>

  :::info
  归档或取消归档不会影响用户登录，用户可以登录并使用用户处于活动状态的其他工作区。
  :::

### 在工作区之间切换

  <div style={{textAlign: 'center'}}>

  ![ToolJet - 使用 SSO 注册单一工作区](/img/user-lifecycle/switch.png)

  </div>


## 用户状态

| 状态 | 可以登录          | 如何激活                                             |
| ---- | ----------------- | ---------------------------------------------------- |
| 活跃 | 是                |                                                      |
| 邀请 | 否（使用 SSO 是） | 通过 SSO 或邀请链接登录                              |
| 存档 | 否                | 无法激活。从 `管理用户` 页面邀请，状态将更改为已邀请 |

## 多工作区 SSO 流程
  - 图表显示了如何在公共登录页面和工作区登录页面中选择 SSO 配置。实例级 SSO 在环境变量中配置，工作区级 SSO 在相应的 `管理 SSO` 页面中配置。

  <div style={{textAlign: 'center'}}>

    ![ToolJet - SSO 流程](/img/user-lifecycle/sso-flow.png)

  </div>
