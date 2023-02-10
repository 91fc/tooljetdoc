---
id: pages
title: 多页
---

页面允许您在单个应用程序中拥有多个页面，从而使您的 ToolJet 应用程序更加健壮和用户友好。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/pages.gif" alt="多页应用" />

</div>

## 页面面板

您可以通过单击应用程序构建器左侧栏上的 **页面** 图标来打开 **页面面板**。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/pages-panel.png" alt="页面面板"/>

</div>

## 面板选项

- **[添加页面](#add-page)**
- **[设置](#settings)**
- **[引脚](#pin)**
- **[搜索](#search)**

＃＃＃ 添加页面

在页面管理器的标题上，**+** 按钮允许您向应用程序添加更多页面

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/add.png" alt="页面面板" width="400" />

</div>

单击 **+** 按钮，将添加一个新页面，输入页面名称并按 enter。
<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/newpage.png" alt="页面面板" width="400" />

</div>

### 设置

在 **设置** 中，您可以通过启用 **禁用菜单** 选项在查看器模式下隐藏 **页面导航侧边栏**。
<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/settings.png" alt="页面面板" width="400" />

</div>

＃＃＃ 别针

您可以通过 **Pin** 按钮固定页面面板，面板不会关闭，直到您**取消固定**它。
<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/pin.png" alt="页面面板" width="400" />

</div>

＃＃＃ 搜索

如果面板上有很多页面，那么您可以使用**搜索栏**来查找特定页面。
<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/search.png" alt="页面面板" width="400" />

</div>

## 页面选项

页面有多个可用选项。要使用这些选项，请单击页面卡片右侧的 kebab 菜单。

- **[页面句柄](#页面句柄)**
- **[重命名](#重命名])**
<!-- - **[重复](#duplicate)** -->
- **[标记主页](#标记主页)**
- **[隐藏页面](#隐藏页面)**
- **[删除页面](#删除页面)**
- **[事件处理程序](#事件处理程序)**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/options.png" alt="页面面板" width="300" />

</div>

### 页面句柄

页面句柄是添加在应用程序 URL 末尾的 slug。在创建页面时输入页面名称时，页面句柄将获得其默认值。您可以从此选项更改页面句柄。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/page-handle.png" alt="页面面板" width="300" />

</div>

### 重命名

重命名选项将允许您重命名页面。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/rename.png" alt="页面面板" width="300" />

</div>

<!--
### 复制

复制选项将创建页面的副本并将其添加到列表中。复制页面将是原始页面的副本。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/duplicate.png" alt="页面面板" width="300" />

</div>
-->

### 标记主页

标记主页选项可用于使页面成为应用程序的默认登录页面，因此无论何时加载应用程序，都会加载标记为主页的页面。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/mark-home.png" alt="页面面板" width="300" />

</div>

:::info
标记为主页的页面将在页卡左侧有一个 **主页** 图标。
<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/home-icon.png" alt="页面面板" width="300" />

</div>
:::


### 隐藏页面

隐藏页面选项可用于在查看器模式下从**页面导航侧边栏**隐藏页面。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/hide.png" alt="页面面板" width="300" />

</div>

:::info
如果某个页面被隐藏，那么您会在卡片右侧看到一个**眼睛**图标。
<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/hide-icon.png" alt="页面面板" width="300" />

</div>
:::

您可以再次转到选项并从**页面导航侧边栏**取消隐藏**该应用程序**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/unhide.png" alt="页面面板" width="300" />

</div>


### 删除页面

您可以使用此选项从应用程序中**删除**页面。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/delete.png" alt="页面面板" width="300" />

</div>

:::info
如果某个页面被**标记为主页**，那么您将无法删除并且删除页面选项将被禁用。
<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/delete-disable.png" alt="页面面板" width="300" />

</div>
:::

### 事件处理器

就像 ToolJet 上的其他事件处理程序一样，您也可以在页面中添加事件处理程序。

目前，有 **On page load** 事件可用。您可以使用此事件的所有可用操作以及专门为页面添加的新操作：
- **[切换页面](/docs/actions/switch-page)**
- **[设置页面变量](/docs/actions/set-page-variable)**
- **[取消设置页面变量](/docs/actions/unset-page-variable)**

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/v2-beta/pages/event.png" alt="页面面板" width="300" />

</div>
