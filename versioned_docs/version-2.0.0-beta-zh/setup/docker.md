---
id: docker
title: Docker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 Docker Compose 部署 ToolJet

按照以下步骤使用 Docker Compose 在服务器上部署 ToolJet。 ToolJet 需要一个 PostgreSQL 数据库来存储应用程序定义、数据源的（加密）凭证和用户身份验证数据。

:::info
如果您想在本地计算机上使用 Docker 试用 ToolJet，可以按照[此处](/docs/setup/docker) 中的步骤操作。
:::
### 安装 Docker 和 Docker Compose
在服务器上安装 docker 和 docker-compose。
   - [Docker 安装]文档(https://docs.docker.com/engine/install/)
   - [Docker Compose 安装]文档(https://docs.docker.com/compose/install/)

### 部署选项

使用 Docker Compose 部署 ToolJet 有两种选择：
1. **使用外部 PostgreSQL 数据库**。如果您想使用 AWS RDS 或 Google Cloud SQL 等托管 PostgreSQL 服务，建议使用此设置。
2. **使用内置的 PostgreSQL 数据库**。此设置使用 PostgreSQL 的官方 Docker 映像。

对选择哪种设置感到困惑？欢迎通过 Slack 向社区提问：https://tooljet.com/slack。

:::info
我们建议在生产环境中使用托管 PostgreSQL 服务，以便于管理、安全和管理（备份、监控等）。
如果您想要使用持久卷运行 postgres，请为下一步共享的备用 docker compose 文件卷曲。
:::

<Tabs>
  <TabItem value="with-external-postgres" label="使用外部 PostgreSQL" default>

  1. 设置 PostgreSQL 数据库并确保数据库可访问。

  2. 将我们的生产 docker-compose 文件下载到服务器中。
  ```bash
  curl -LO https://gitee.com/wanddyh/tooljet/raw/develop/deploy/docker/docker-compose.yaml
  ```

  3. 在当前目录（下载 docker-compose.yaml 文件的位置）创建 .env 文件：

  ```bash
  curl -LO https://gitee.com/wanddyh/tooljet/raw/develop/deploy/docker/.env.example
  mv .env.example .env
  ```

  按照 [环境变量参考](/docs/setup/env-vars) 中的说明在 .env 文件中设置环境变量

  `TOOLJET_HOST` 环境变量可以是您服务器的公共 ipv4 地址，也可以是您要使用的自定义域。

  例子：
  `TOOLJET_HOST=http://12.34.56.78` 或
  `TOOLJET_HOST=https://yourdomain.com` 或
  `TOOLJET_HOST=https://tooljet.yourdomain.com`

  :::info
  请确保 `TOOLJET_HOST` 以 `http://` 或 `https://` 开头
  :::

  :::info
  如果有 Tooljet 需要连接的自签名 HTTPS 端点，请确保将`NODE_EXTRA_CA_CERTS`环境变量设置为包含证书的绝对路径。
  :::

  4. 填充 .env 文件后，运行

  :::note
  如果您打算使用 tooljet 数据库，请取消注释 [docker-compose.yaml](https://gitee.com/wanddyh/tooljet/raw/develop/deploy/docker/docker-compose.yaml) 中的 PostgREST 服务。
  :::

  ```bash
  docker-compose up -d
  ```

  启动所有必需的服务。

  :::info
  如果您运行的是 Linux 服务器，`docker` 可能需要 sudo 权限。在这种情况下，您可以运行：
  `sudo docker-compose up -d`
  或者
  按照此处编写的说明将 docker 设置为在没有 root 权限的情况下运行 https://docs.docker.com/engine/install/linux-postinstall/
  :::

  5. 如果您为 `TOOLJET_HOST` 设置了自定义域，请在您的 DNS 设置中添加一个 `A 记录` 条目以指向服务器的 IP 地址。


  </TabItem>
  <TabItem value="with-in-built-postgres" label="使用内置的 PostgreSQL">

  1. 将我们的生产 docker-compose 文件下载到服务器中。
  ```bash
  curl -LO https://gitee.com/wanddyh/tooljet/raw/develop/deploy/docker/docker-compose-db.yaml
  mv docker-compose-db.yaml docker-compose.yaml
  mkdir postgres_data
  ```

  2. 在当前目录（下载 docker-compose.yaml 文件的地方）创建 .env 文件：

  ```bash
  curl -LO https://gitee.com/wanddyh/tooljet/raw/develop/deploy/docker/.env.example
  mv .env.example .env
  ```

  按照 [环境变量参考](/docs/setup/env-vars) 中的说明在 .env 文件中设置环境变量

  `TOOLJET_HOST` 环境变量可以是您服务器的公共 ipv4 地址，也可以是您要使用的自定义域。

  例子：
  `TOOLJET_HOST=http://12.34.56.78` 或
  `TOOLJET_HOST=https://yourdomain.com` 或
  `TOOLJET_HOST=https://tooljet.yourdomain.com`

  :::info
  请确保 `TOOLJET_HOST` 以 `http://` 或 `https://` 开头
  :::

  :::info
  如果有 Tooljet 需要连接的自签名 HTTPS 端点，请确保将`NODE_EXTRA_CA_CERTS`环境变量设置为包含证书的绝对路径。
  :::

  3. 填充 .env 文件后，运行

  :::note
  如果您打算使用 tooljet 数据库，请取消注释 [docker-compose.yaml](https://gitee.com/wanddyh/tooljet/raw/develop/deploy/docker/docker-compose-db.yaml) 中的 PostgREST 服务。
  :::

  ```bash
  docker-compose up -d
  ```

  启动所有必需的服务。

  :::info
  如果您在 Linux 服务器上运行，`docker` 可能需要 sudo 权限。在这种情况下，您可以运行：
  `sudo docker-compose up -d`
  或者
  按照此处编写的说明将 docker 设置为在没有 root 权限的情况下运行 https://docs.docker.com/engine/install/linux-postinstall/
  :::

  4. 如果您为 `TOOLJET_HOST` 设置了自定义域，请在您的 DNS 设置中添加一个 `A 记录` 条目以指向服务器的 IP 地址。



  </TabItem>
</Tabs>

