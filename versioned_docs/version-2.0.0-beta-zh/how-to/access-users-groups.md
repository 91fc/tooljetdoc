---
id: access-currentuser
title: 使用当前用户的属性启用/禁用组件
---

# 使用当前用户的属性启用/禁用组件

我们看一下当前用户属性的暴露变量：

- **email** ：可以使用 `{{globals.currentUser.email}}` 访问该值
- **firstName** ：可以使用 `{{globals.currentUser.firstName}}` 访问该值
- **lastName** ：可以使用 `{{globals.currentUser.lastName}}` 访问该值
- **lastName** ：可以使用 `{{globals.currentUser.lastName}}` 访问该值
- **groups** : 默认情况下，admin 将在 `all_users` 和 `admin` 这两个组中，默认情况下，任何不是 admin 的用户将始终在 `all_users` 组中。由于 **groups** 是一个数组，您必须提供索引（[0]、[1] 等）以返回组名称。可以使用 `{{globals.currentUser.groups[1]}}` 访问该值。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/how-to/access-currentuser/props.png" alt="当前用户的属性" />

</div>

### 示例：如果用户不是管理员，则禁用按钮

- 单击 **Button** 手柄以打开其属性，在 **Styles** 选项卡上转到 **Disable** 属性。

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/access-currentuser/button.png" alt="按钮属性" />

    </div>

- 在禁用字段上设置条件，以便如果正在使用该应用程序的用户在 **groups** 数组的第一个索引中没有 **admin** 值，则返回 **true**。条件可以是：

    ```javascript
    {{globals.currentUser.groups[1] !== "admin" ? true : false}}
    ```

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/access-currentuser/disable.png" alt="禁用按钮属性" />

    </div>

- 现在，当您**发布**应用程序时，如果用户不是管理员，该按钮将被禁用。

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/access-currentuser/released.png" alt="当用户不是管理员时禁用释放按钮" />

    </div>

:::info
在此操作指南中，我们使用了**当前用户**的**组**属性。您可以根据您的用途使用上述任何公开的变量。
:::
