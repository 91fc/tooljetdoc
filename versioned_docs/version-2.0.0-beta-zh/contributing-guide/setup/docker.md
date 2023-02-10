---
id: docker
title: Docker
---

# Docker

Docker compose 是在本地设置 ToolJet 服务器和客户端的最简单方法。

:::info
如果您想通过 docker 在本地试用 ToolJet，可以按照[此处](https://docs.tooljet.com/docs/setup/docker-local) 中的步骤操作。
:::

## 先决条件

确保安装了最新版本的 `docker` 和 `docker-compose`。

[官方docker安装指南](https://docs.docker.com/desktop/)

[官方docker-compose安装指南](https://docs.docker.com/compose/install/)

我们推荐：

```bash
docker --version
Docker version 19.03.12, build 48a66213fe

docker-compose --version
docker-compose version 1.26.2, build eefe0d31
```

## 配置

:::tip
如果您在 Windows 机器上设置，我们建议您使用 WSL2 设置 Docker 桌面。
请在 [此处](https://docs.docker.com/desktop/windows/wsl/) 查找更多信息。
:::

1. 克隆存储库
   ```bash
   git clone https://github.com/tooljet/tooljet.git
   ```

2. 通过复制 `.env.example` 创建一个 `.env` 文件。 [环境变量参考](/docs/setup/env-vars) 中提供了有关可以设置的变量的更多信息
   ```bash
   cp .env.example .env
   cp .env.example .env.test
   ```

3. 填充 `.env` 和 `.env.test` 文件中的密钥
   :::info
   `SECRET_KEY_BASE` 需要一个 64 字节的密钥。 （如果您安装了 `openssl`，运行 `openssl rand -hex 64` 来创建一个 64 字节的安全随机密钥）

   `LOCKBOX_MASTER_KEY` 需要一个 32 字节的密钥。 （运行 `openssl rand -hex 32` 来创建一个 32 字节的安全随机密钥）
   :::
   :::tip 
   如果您在 Windows 机器上进行设置。请确保 .env 文件行结尾为 LF，因为默认情况下它将为 CRLF，除非为 Windows 机器配置。
   :::
   
   例子：

   ```bash
    cat .env
    TOOLJET_HOST=http://localhost:8082
    LOCKBOX_MASTER_KEY=13c9b8364ae71f714774c82498ba328813069e48d80029bb29f49d0ada5a8e40
    SECRET_KEY_BASE=ea85064ed42ad02cfc022e66d8bccf452e3fa1142421cbd7a13592d91a2cbb866d6001060b73a98a65be57e65524357d445efae00a218461088a706decd62dcb
    NODE_ENV=development
    # DATABASE CONFIG
    PG_HOST=postgres
    PG_PORT=5432
    PG_USER=postgres
    PG_PASS=postgres
    PG_DB=tooljet_development
    ORM_LOGGING=all
   ```

   ```bash
    cat .env.test
    TOOLJET_HOST=http://localhost:8082
    LOCKBOX_MASTER_KEY=13c9b8364ae71f714774c82498ba328813069e48d80029bb29f49d0ada5a8e40
    SECRET_KEY_BASE=ea85064ed42ad02cfc022e66d8bccf452e3fa1142421cbd7a13592d91a2cbb866d6001060b73a98a65be57e65524357d445efae00a218461088a706decd62dcb
    NODE_ENV=test
    # DATABASE CONFIG
    PG_HOST=postgres
    PG_PORT=5432
    PG_USER=postgres
    PG_PASS=postgres
    PG_DB=tooljet_test
    ORM_LOGGING=error
   ```

4. 构建docker镜像

   ```bash
   docker-compose build
   docker-compose run --rm plugins npm run build:plugins
   ```

5. 运行 ToolJet

   ```bash
   docker-compose up
   ```
   ToolJet 现在应该在“http://localhost:8082”本地提供。

6. 要关闭容器，
   ```bash
   docker-compose stop
   ```

## 修改代码库

如果您对代码库进行任何更改/从上游拉取最新更改，tooljet 服务器容器将在您不执行任何操作的情况下热重新加载应用程序。

警告：

1. 如果更改包括数据库迁移或在 package.json 中添加新的 npm 包，则需要通过运行 `docker-compose restart server` 重新启动 ToolJet 服务器容器。

2. 如果您需要向容器本身添加新的二进制文件或系统库，则需要在 `docker/server.Dockerfile.dev` 中添加这些依赖项，然后重建 ToolJet 服务器映像。您可以通过运行 `docker-compose build server` 来做到这一点。完成后，您可以使用 `docker-compose up` 正常启动所有内容。

例子：
假设您需要在 ToolJet 服务器的容器中安装 `imagemagick` 二进制文件。然后，您需要确保 `apt` 在构建图像时安装了 `imagemagick`。服务器的 `docker/server.Dockerfile.dev` 中的 Dockerfile 看起来像这样：
```
FROM node:16.19.0-buster

RUN apt update && apt install -y \
  build-essential  \
  postgresql \
  freetds-dev \
  imagemagick

RUN mkdir -p /app
WORKDIR /app

COPY ./server/package.json ./server/package-lock.json ./
RUN npm install

ENV NODE_ENV=development

COPY ./server/ ./

COPY ./docker/ ./docker/

COPY ./.env ../.env

RUN ["chmod", "755", "entrypoint.sh"]

```

更新 Dockerfile 后，通过运行 `docker-compose build server` 重建镜像。构建新镜像后，通过运行 docker-compose up 启动服务。

## 运行测试

测试配置从项目根目录的 .env.test 文件中获取配置。

运行以下命令为测试数据库创建和迁移数据

```bash
docker-compose run --rm -e NODE_ENV=test server npm run db:create
docker-compose run --rm -e NODE_ENV=test server npm run db:migrate
```

运行单元测试
```bash
docker-compose run --rm server npm run --prefix server test
```

运行端到端测试
```bash
docker-compose run --rm server npm run --prefix server test:e2e
```

运行特定的单元测试

```bash
docker-compose run --rm server npm --prefix server run test <文件路径>
```

## 故障排除

如果遇到，请在 https://github.com/ToolJet/ToolJet/issues 打开一个新问题或加入我们的 Slack 频道 (https://join.slack.com/t/tooljet/shared_invite/zt-r2neyfcw-KD1COL6t2kgVTlTtAV5rtg) 尝试在本地运行 ToolJet 时出现任何问题。
