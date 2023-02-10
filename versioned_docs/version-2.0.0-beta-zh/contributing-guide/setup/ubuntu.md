---
id: ubuntu
title: Ubuntu
---

# Ubuntu
按照以下步骤在 Ubuntu 上设置和运行 ToolJet。打开终端并运行以下命令。

## 配置

1. 搭建环境

    1.1 安装Node.js
    ```bash
    curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs

    # 确保你有正确版本的 npm，否则会导致有关 fsevents 的错误。
    # npm i -g npm@7.20.0
    ```

    1.2 安装 Postgres
    ```bash
    sudo apt install postgresql postgresql-contrib
    sudo apt-get install libpq-dev
    ```
    
    1.3 安装PostgREST（可选）

    :::info 
    只有在使用 Tooljet 数据库时才需要。

    请使用 PostgREST 版本 10.1.1.x
    :::

    请遵循安装 [PostgREST](https://postgrest.org/en/stable/install.html) 指南

    
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

    客户端会在8082端口开始运行，你可以访问客户端：[http://localhost:8082](http://localhost:8082)

8. 创建登录凭据

    访问 http://localhost:8082 会将您重定向到登录页面，单击注册链接并输入管理员登录信息和工作区信息，即可完成登录。


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