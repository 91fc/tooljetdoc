---
id: openapi
title: OpenAPI
---

# OpenAPI

ToolJet 有一个数据源，用于从 OpenAPI 规范生成 REST API 操作。

## 连接
- 连接是根据 OpenAPI 规范生成的。目前支持Basic Auth、API Key、Bearer Token、OAuth 2.0

- 还支持具有多重身份验证的规范
  
  [阅读更多](https://swagger.io/docs/specification/authentication/)

## 查询 OpenAPI
- 操作将根据规范生成，每个操作都将不同于其他操作

### 公共字段
- 主机（基本 URL）
  
  一些规范可以有一个或多个基本 URL/服务器，特定操作可能有单独的基本 URL。所以你可以从主机选择中选择 URL

- 操作