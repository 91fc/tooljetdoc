---
id: manage-users-groups
title: 管理用户和组
---

# 管理用户和组

## 管理用户

工作区的管理员可以将用户添加到工作区。要管理工作区中的用户，只需转到仪表板左侧栏中的**工作区设置**，然后单击**用户**选项。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tutorial/manage-users-groups/manageusersv2.png" alt="管理用户" />

</div>

### 邀请用户

管理员可以使用电子邮件地址邀请任何人加入工作区。邀请用户：

- 在**用户**页面上点击“邀请新用户”按钮。
  <div style={{textAlign: 'center'}}>
    
  <img className="screenshot-full" src="/img/tutorial/manage-users-groups/invitev2.png" alt="管理用户" />
    
  </div>

- 现在输入新用户的详细信息，例如名字、姓氏、电子邮件，然后单击**创建用户**。
  <div style={{textAlign: 'center'}}>
    
  <img className="screenshot-full" src="/img/tutorial/manage-users-groups/useremailv2.png" alt="添加新用户" />
    
  </div>


- 包含加入您的工作区的**邀请链接**的电子邮件将发送给创建的用户。在用户使用邀请链接成功加入您的工作区后，状态将从 **invited** 变为 **active**。

  :::tip
  您还可以通过单击已创建用户的“已邀请”状态旁边的复制图标来复制邀请网址。
  :::

  <div style={{textAlign: 'center'}}>
    
  <img className="screenshot-full" src="/img/tutorial/manage-users-groups/invitedv2.png" alt="添加新用户" />
    
  </div>

:::tip
您还可以通过编辑和上传包含所有用户详细信息的示例 CSV 文件来**批量邀请用户**。
<div style={{textAlign: 'center'}}>
    
<img className="screenshot-full" src="/img/tutorial/manage-users-groups/bulkinvite.png" alt="添加新用户" />
    
</div>
:::

### 禁止用户访问

您可以通过单击 **Archive** 按钮禁用任何活动用户对您的工作区的访问，并且用户的状态将从 **active** 更改为 **archived**。

<div style={{textAlign: 'center'}}>
    
<img className="screenshot-full" src="/img/tutorial/manage-users-groups/archivev2.png" alt="archived"/>
    
</div>

### 启用用户访问

类似于存档用户的访问权限，您可以通过单击 **Unarchive** 再次启用它。用户的状态将从 **archived** 变为 **invited** 并且用户必须使用通过电子邮件收到的邀请链接再次加入。

<div style={{textAlign: 'center'}}>
    
<img className="screenshot-full" src="/img/tutorial/manage-users-groups/unarchivev2.png" alt="status" />
    
</div>

## 管理组

在 ToolJet 上，管理员可以为工作区中添加的用户创建组，并授予他们访问具有特定权限的特定应用程序的权限。要管理组，只需转到仪表板左侧栏中的 **Workspace Settings**，然后单击 **Groups**。

<div style={{textAlign: 'center'}}>
    
<img className="screenshot-full" src="/img/tutorial/manage-users-groups/managegroupsv2.png" alt="管理群组" />
    
</div>

### 组属性

ToolJet 上的每个组都包含三个部分：

####  应用：

管理员可以为一组用户添加或删除任意数量的应用程序。要将应用程序添加到组中，请从下拉列表中选择一个应用程序，然后单击它旁边的“添加”按钮。您还可以为群组设置应用权限，例如“查看”或“编辑”。您可以为一个组中的不同应用程序设置不同的权限。

<div style={{textAlign: 'center'}}>
    
<img className="screenshot-full" src="/img/tutorial/manage-users-groups/appsv2.png" alt="apps"/>
    
</div>

#### 用户：

管理员可以在组中添加或删除任意数量的用户。只需从下拉列表中选择一个用户，然后单击“添加”按钮即可将其添加到组中。要从组中删除用户，请单击其旁边的“删除”按钮。

<div style={{textAlign: 'center'}}>
    
<img className="screenshot-full" src="/img/tutorial/manage-users-groups/usersv2.png" alt="用户" />
    
</div>

#### 权限：

管理员可以设置精细权限，例如创建/删除应用程序或为一组用户创建文件夹。

<div style={{textAlign: 'center'}}>
    
<img className="screenshot-full" src="/img/tutorial/manage-users-groups/permissionsv2.png" alt="permissions" />
    
</div>

:::tip
任何管理员或工作区中任何用户执行的所有活动都记录在“审核日志”中 - 包括与管理用户和组相关的任何活动。
:::

### 预定义组

默认情况下，每个工作区都有两个用户组：

**1.全部用户**

该组包含所有用户和管理员。

| 应用                       | 用户                                             | 权限                           |
| -------------------------- | ------------------------------------------------ | ------------------------------ |
| 您可以添加或删除应用程序。 | 禁用修改。该组将在工作区中添加所有用户和管理员。 | 您可以全局编辑所有用户的权限。 |

<div style={{textAlign: 'center'}}>
    
<img className="screenshot-full" src="/img/tutorial/manage-users-groups/allusersv2.png" alt="所有用户" />
    
</div>

**2.管理**

该组默认包含管理员。管理员可以添加更多管理员或删除该组中的用户。

| 应用                                                             | 用户                               | 权限                                                                   |
| ---------------------------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------- |
| 禁用修改。默认情况下，该组对工作区中的所有应用程序具有“编辑”权限 | 管理员可以添加或删除该组中的用户。 | 禁用修改。默认情况下，所有管理员都可以创建和删除应用程序或创建文件夹。 |

<div style={{textAlign: 'center'}}>
    
<img className="screenshot-full" src="/img/tutorial/manage-users-groups/adminv2.png" alt="admin" />
    
</div>

### 创建新组

- 单击**用户组**页面中的“创建新组”按钮。
  <div style={{textAlign: 'center'}}>
    
  <img className="screenshot-full" src="/img/tutorial/manage-users-groups/newgroup1v2.png" alt="新组" />
    
  </div>

- 输入群组名称，然后单击“创建群组”按钮。
  <div style={{textAlign: 'center'}}>
    
  <img className="screenshot-full" src="/img/tutorial/manage-users-groups/newgroup2v2.png" alt="新组 2"/>
    
  </div>

- 创建组后，您可以添加 **应用**、**用户** 并为该组设置他们的 **权限**。

### 删除组

要删除组，请单击它旁边的“删除”。它会确认您是否要删除它，单击“是”删除该组。

<div style={{textAlign: 'center'}}>
    
<img className="screenshot-full" src="/img/tutorial/manage-users-groups/deletev2.png" alt="删除群组" width="400"/>
    
</div>
