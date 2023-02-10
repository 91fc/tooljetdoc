---
id: redis
title: Redis
---

# Redis
ToolJet 可以在您的 Redis 实例上运行 Redis 命令。

## 连接

ToolJet 需要以下内容才能连接到您的 Redis 实例。

<img class="screenshot-full" src="/img/redis/connect.png" alt="ToolJet - Redis 连接" height="250"/>

- **Host**
- **Port** - Redis 服务器的默认端口是 6379
- **Username**
- **Password**

单击`测试`按钮测试连接并单击`保存`以保存数据源。

## Redis 查询

支持的命令列表：[Redis官方文档](https://redis.io/commands)

### 例子

`PING` 命令来测试 Redis 连接。如果连接准备就绪，Redis 服务器将响应 `PONG`。

```shell
PING
```

`SET` 命令可用于设置键的值

```shell
SET key value
```

`GET` 命令可用于检索键的值

```shell
GET key
```
