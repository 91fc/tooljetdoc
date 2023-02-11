---
id: qr-scanner
title: 二维码扫描器
---
# 二维码扫描器
使用设备相机扫描二维码并保存它们携带的数据。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/qr-scanner/qr-scanner.jpeg" alt="ToolJet - 小部件参考 - QR 扫描仪" />

</div>

:::caution 已知问题
您可能不得不坚持使用 IOS 中的 Safari 浏览器，因为第三方浏览器的相机访问受到限制。
:::

## 暴露的变量
### lastDetectedValue

此变量保存小部件最后扫描的 QR 码中包含的数据。要获取数据，请使用 `{{components.qrscanner1.lastDetectedValue}}` 。

## 活动
### onDetected

只要小部件成功扫描 QR 码，就会触发此事件。

:::info
查看 [Action Reference](/docs/category/actions-reference) 文档以获取有关所有 **Actions** 的详细信息。
:::

:::caution 调试提示

浏览器摄像头 API 将此小部件限制为只能在 `localhost` 或 `https` 中工作。

因此，如果您要对其进行测试，请务必使用 `localhost` 或 `https`。
:::

## 一般的
### 工具提示

工具提示通常用于在用户将鼠标悬停在
将鼠标指针悬停在小部件上。

在 **通用** 折叠栏下，您可以设置字符串格式的值。
现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - QR 扫描仪" />

</div>

## 布局

### 在桌面上显示

打开或关闭以在桌面视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。
### 在手机上显示

打开或关闭以在移动视图中显示小部件。您可以通过单击 `Fx` 来设置值 `{{true}}` 或 `{{false}}` ，以编程方式确定该值。

## 风格

### 可见性

打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。

### 禁用

默认情况下这是 `关闭` ，切换 `打开` 开关以锁定小部件并使其无法运行。您还可以通过单击旁边的 `Fx` 按钮以编程方式设置该值。如果设置为 `{{true}}`，小部件将被锁定并变得无法使用。默认情况下，它的值设置为 `{{false}}` 。
