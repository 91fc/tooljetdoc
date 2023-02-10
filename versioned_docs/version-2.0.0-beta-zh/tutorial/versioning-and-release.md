---
id: versioning-and-release
title: 版本控制和发布
---

# 版本控制和发布

版本控制和发布让您可以对应用程序进行版本控制并将应用程序更改发布给用户。

## 版本控制

如果多个开发人员正在开发一个应用程序，则版本控制非常有用，它允许他们保存自己的应用程序版本。这也可以防止开发人员覆盖其他开发人员的工作。

### 创建一个版本

您可以从右上角的 **App Version Manager** 创建新版本。它显示您当前使用的应用程序版本，可用于在不同版本的应用程序之间切换。要创建新版本：

- 从工具栏转到 **App Version Manager**，然后单击下拉菜单。它将显示已创建的应用程序的所有版本。
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/tutorial/versioning-and-release/appversionv2.png" alt="app version" width="700"/>

  </div>

- 单击 **Create Version**，将弹出一个模式。输入 **版本名称** 并单击 **从以下位置创建版本** 下拉列表，其中将包括应用程序的所有版本，选择您要用于新版本的版本，然后单击 `创建版本` 。
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/tutorial/versioning-and-release/modalv2.png" alt="modal" width="400"/>

  </div>

## 发布

发布让您发布应用程序并将更改推送到生产环境。

### 发布一个版本

要发布一个版本：

- 转到 **App Version Manager** 并从下拉列表中选择要发布的 `版本` 。
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/tutorial/versioning-and-release/versiondropdownv2.png" alt="version dropdown" width="300" />

  </div>

- 单击右上角的 `发布` 按钮。
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/tutorial/versioning-and-release/releasev2.png" alt="release" width="700"/>

  </div>


:::tip
ToolJet 将阻止编辑应用程序的 `已发布版本` ，并会提示创建新版本以进行更改。这是为了防止意外将未完成的应用程序推送到实时版本。
<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tutorial/versioning-and-release/promptv2.png" alt="release" width="400" />

</div>
:::





