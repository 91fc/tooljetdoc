---
id: tooljet-subpath
title: 在子路径上部署 ToolJet
---

ToolJet 现在可以部署在子路径而不是公共域的根目录 (`/`)。示例子路径安装 URL：**`http://www.yourcompany.com/apps/tooljet`**

如果 ToolJet 安装在域子路径上，则需要设置以下环境变量：

| 变量         | 值                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| TOOLJET_HOST | 公共 URL（例如：https://www.yourcompany.com）                                                                          |
| SERVE_CLIENT | 默认情况下，此变量将被取消设置，服务器将在其`/`端点为客户端提供服务。您可以将`SERVE_CLIENT`设置为`false`以禁用此行为。 |
| SUB_PATH     | 设置此变量的子路径。子路径将设置为尾随 `/` 并且仅在服务器为前端客户端服务时适用。 （例如：`/apps/tooljet/`）           |


:::info
在此处查看所有 **[环境变量](/docs/setup/env-vars)**。
:::


