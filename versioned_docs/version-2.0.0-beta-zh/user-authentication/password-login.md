---
id: password-login
title: 密码登录
---

# 密码登录

默认情况下，所有工作区都启用密码登录。具有管理员权限的用户可以启用/禁用它。

- 从 ToolJet 仪表板的左侧栏转到 **工作区设置** (⚙️)
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/general/workside.png" alt="常规设置：SSO" width="500"/>

  </div>

- 从边栏中选择 `SSO` 
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/general/sso.png" alt="常规设置：SSO" width="500"/>

  </div>

- 选择**密码登录**。您可以启用/禁用它
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/sso/general/password.png" alt="常规设置：SSO" />

  </div>

## 重试限制
在预定次数的错误密码尝试后，将禁用用户密码身份验证方法。可以使用在环境变量中将 `DISABLE_PASSWORD_RETRY_LIMIT` 设置为 `true` 来禁用此功能。默认允许的重试次数为 5 次，可以通过 PASSWORD_RETRY_LIMIT 环境变量覆盖。
