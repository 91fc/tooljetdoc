---
id: v2-migration-guide
title: V2 迁移指南
---
# 版本 2 迁移指南

ToolJet 版本 2 具有一系列令人兴奋的功能，其中主要功能包括：
1. 多页
2. 多环境
3. 表单小部件
4. [数据库](/docs/tooljet-database)（需要选择加入）
5. [Marketplace](/docs/marketplace)（需要选择加入）

在 [此处](https://github.com/ToolJet/ToolJet/releases) 查看 v2 的最新变更日志。

## 部署

根据您在我们的 [setup doc](/docs/setup/) 中选择的部署方法，您可以直接部署 v2，而无需对默认设置进行任何额外配置。

只有上面提到的选择加入功能才需要额外的配置。您可以查看这些功能的相应文档以了解所需的配置更改。

:::info
服务器可能需要一些时间才能准备好处理 HTTP 请求，因为 v2 更改需要为初始部署进行一些数据迁移。这是作为服务器启动的一部分自动触发的。
:::

## 弃用

#### 部署
- 不推荐使用 [auto SSL](/docs/1.x.x/setup/docker) 的 Docker 组合部署

## 帮助和支持
- 欢迎加入我们高度活跃的 **[Slack 社区](https://join.slack.com/t/tooljet/shared_invite/zt-r2neyfcw-KD1COL6t2kgVTlTtAV5rtg)** 或者您也可以发送电子邮件至 **你好@tooljet.com**。
- 如果您发现错误，请为此创建一个 **[GitHub 问题](https://github.com/ToolJet/ToolJet/issues)**。
