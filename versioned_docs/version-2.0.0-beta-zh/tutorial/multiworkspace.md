---
id: multiworkspace
title: 多工作区
---

# 多工作区

用户可以创建自己的工作区，创建工作区的用户将拥有工作区的管理员权限。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/multiworkspace/multiwork.gif" alt="多工作空间" />

</div>

## 等级制度

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/multiworkspace/Tooljet-workspace.png" alt="tooljet workspace" />

</div>

## 权限

:::tip
请查看有关 **[权限](/docs/org-management/permissions)** 的详细文档。
:::

- 管理员可以管理每个工作区的[用户和组](/docs/tutorial/manage-users-groups)
- 应用程序和设置不能在工作区之间共享
- 授权登录 Tooljet 的用户将无权访问所有工作区，应邀请或注册用户登录工作区。

## 启用多工作区

将环境变量 **DISABLE_MULTI_WORKSPACE** 值设置为 **false** 以启用该功能，设置 **true** 以禁用它。

### 启用时

- 启用多工作区功能后，用户应使用用户名和密码登录才能登录 Tooljet。
- 管理员可以为其工作区配置身份验证方法。
- 如果启用密码登录，则无需任何其他授权即可切换到工作区，因为用户已获得密码登录授权。
- 登录到 Toojet 并尝试切换到启用 SSO 且禁用密码登录的工作区的用户将被重定向到工作区登录页面并显示启用的 SSO 选项
- 用户可以使用工作区登录 URL 直接登录到工作区，管理员可以查看 URL **管理 SSO -> 常规设置 -> 登录 URL**。

### 禁用时

- 如果禁用多工作区，则创建工作区功能将不可用。
- 没有单独的工作区登录页面和为工作区配置的 SSO 将反映到主登录页面/登录。