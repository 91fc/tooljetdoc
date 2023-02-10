---
id: macos 
title: Mac OS
---

# Mac OS
按照以下步骤在 macOS 上设置和运行 ToolJet 以用于开发目的。打开终端并运行以下命令。我们建议在继续之前阅读我们关于 ToolJet [架构](/docs/contributing-guide/setup/architecture) 的指南。

## 配置

1. 搭建环境

    1.1 安装自制软件
    ```bash
    /bin/bash -c“（curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh）”
    ```
    1.2 安装Node.js（版本：v14.17.3）和npm（版本：v7.20.0）
    ```bash
    brew install nvm
    export NVM_DIR=~/.nvm
    source $(brew --prefix nvm)/nvm.sh
    nvm install 14.17.3
    nvm use 14.17.3
    npm install -g npm@7.20.0
    ```

    1.3 安装 Postgres
    :::tip
    ToolJet 使用 postgres 数据库作为持久存储，用于存储与用户和应用程序相关的数据。我们不打算支持其他数据库，例如 MySQL。
    :::

    ```bash
    brew install postgresql
    ```
    
    1.4 安装PostgREST（可选）

    :::info 
    只有在使用 Tooljet 数据库时才需要。

    请使用 PostgREST 版本 10.1.1.x
    :::

    ```bash
    brew install postgrest --version 10.1.1.20221215
    ```

    1.5 克隆存储库
    ```bash
    git clone https://github.com/tooljet/tooljet.git
    ```

2. 设置环境变量

    通过复制 .env.example 创建一个 .env 文件。 [环境变量参考](/docs/setup/env-vars) 中提供了有关可以设置的变量的更多信息
    ```bash
    cp .env.example .env
    ```

3. 填充 env 文件中的密钥
   :::info
   `SECRET_KEY_BASE` 需要一个 64 字节的密钥。 （如果您安装了 `openssl`，运行 `openssl rand -hex 64` 来创建一个 64 字节的安全随机密钥）

   `LOCKBOX_MASTER_KEY` 需要一个 32 字节的密钥。 （运行 `openssl rand -hex 32` 来创建一个 32 字节的安全随机密钥）
   :::

   例子：
   ```bash
   cat .env
   TOOLJET_HOST=http://localhost:8082
   LOCKBOX_MASTER_KEY=1d291a926ddfd221205a23adb4cc1db66cb9fcaf28d97c8c1950e3538e3b9281
   SECRET_KEY_BASE=4229d5774cfe7f60e75d6b3bf3a1dbb054a696b6d21b6d5de7b73291899797a222265e12c0a8e8d844f83ebacdf9a67ec42584edf1c2b23e1e7813f8a3339041
   NODE_ENV=development
   # DATABASE CONFIG
   PG_HOST=postgres
   PG_PORT=5432
   PG_USER=postgres
   PG_PASS=postgres
   PG_DB=tooljet_development
   ORM_LOGGING=all
   ```

4. 安装并构建依赖
    ```bash
    npm install
    npm install --prefix server
    npm install --prefix frontend
    npm run build:plugins
    ```



5. 在watch模式下运行插件编译
    ```bash
    cd ./plugins && npm start
    ```

6. 运行服务器
    ```bash
    cd ./server && npm run start:dev
    ```

7. 运行客户端
    ```bash
    cd ./frontend && npm start
    ```

    客户端会在8082端口启动，你可以访问客户端：[https://localhost:8082](https://localhost:8082)

8. 创建登录凭据

    访问 [https://localhost:8082](https://localhost:8082) 会将您重定向到登录页面，单击注册链接并输入您的电子邮件。开发环境中服务器发送的电子邮件被捕获并在您的默认浏览器中打开。单击电子邮件预览中的邀请链接以设置帐户。

## 运行测试

测试配置需要在项目的根目录下存在 .env.test 文件。

运行单元测试
```bash
npm run --prefix server test
```

运行端到端测试
```bash
npm run --prefix server test:e2e
```

运行特定的单元测试
```bash
npm run --prefix server test <文件路径>
```
