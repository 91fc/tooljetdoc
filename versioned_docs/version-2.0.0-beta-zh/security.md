---
id: security
title: 安全
slug: /security
---

# 安全

## 数据存储

ToolJet 不存储从您的数据源返回的数据。 ToolJet 服务器充当代理并将数据原样传递给 ToolJet 客户端。数据源的凭据由服务器处理，永远不会暴露给客户端。例如，如果您正在发出 API 请求，则查询是从服务器而不是从前端运行的。

## 数据源凭据
所有数据源凭据都使用“`aes-256-gcm`”进行安全加密。凭据永远不会暴露给前端（ToolJet 客户端）。

## 其他安全功能
- **TLS**：如果您使用的是 ToolJet 云，则所有连接都使用 TLS 加密。我们还有为 ToolJet 的自托管安装设置 TLS 的文档。
- **审计日志**：审计日志在 ToolJet 企业版上可用。每个用户操作都与 IP 地址和用户信息一起记录。
- **请求记录**：记录所有对服务器的请求。如果自托管，您可以轻松扩展 ToolJet 以使用您首选的日志记录服务。 ToolJet 带有内置的 Sentry 集成。
- **列入白名单的 IPs**：如果您使用的是 ToolJet 云，您可以将我们的 IP 地址 (3.129.198.40) 列入白名单，这样您的数据源就不会暴露给公众。
- **备份**：ToolJet 云托管在 AWS 上，使用具有自动缩放和定期备份功能的 EKS。

如果您发现安全漏洞，请发送电子邮件至 `security@tooljet.com` 告知团队。