---
id: tracking
title: 追踪
slug: /tracking
---

# 追踪

:::tip
ToolJet 不存储从数据源获取的任何数据。 ToolJet 充当代理，来自数据源的数据不存储地发送到客户端应用程序。
:::

## 服务器

:::tip
ToolJet 的自托管版本每 24 小时 ping 我们的服务器以获取最新的产品更新。您可以通过将“`CHECK_FOR_UPDATES`”环境变量的值设置为“`0`”来禁用此功能。默认情况下启用此功能。
:::

## 客户

ToolJet 跟踪匿名使用数据，例如页面加载和点击。 ToolJet 仅跟踪事件，不从数据源捕获数据。

可以通过将值环境变量“`ENABLE_TRACKING`”设置为“`0`”来禁用跟踪。