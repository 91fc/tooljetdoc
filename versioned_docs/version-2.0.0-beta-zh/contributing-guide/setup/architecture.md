---
id: architecture
title: 结构
---
# 介绍

ToolJet 有两个主要组件：**ToolJet 服务器** 和**ToolJet 客户端**。

### 1. ToolJet 服务器

ToolJet 服务器是一个 Node.js API 应用程序。服务器负责身份验证、授权、保留应用程序定义、运行查询、安全地存储数据源凭据等等。

**依赖项：**
- **PostgreSQL** - ToolJet 服务器将数据保存到 postgres 数据库。
- **电子邮件服务** (SMTP/Sendgrid/Mailgun/etc) - 需要发送用户邀请和密码重置电子邮件。
- **PostgREST（可选）** - 将 PostgreSQL 数据库转换为 Tooljet 数据库的可查询 RESTful API 的独立 Web 服务器。
    
### 2. ToolJet 客户端

ToolJet 客户端是一个 ReactJS 应用程序。客户端负责可视化编辑应用程序、构建和编辑查询、呈现应用程序、执行事件及其触发器等。

## 要求

1. **Node 版本 16.x**
