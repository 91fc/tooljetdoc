---
id: try-tooljet
title: 试用 ToolJet
---

# 试试 ToolJet
## 在本地使用 Docker

您可以运行下面的命令以立即启动并运行 ToolJet。

```bash
docker run \
  --name tooljet_try \
  --restart unless-stopped \
  -p 80:80 \
  -v tooljet_data:/var/lib/postgresql/13/main \
  wanddy/tooljettry:latest
```

#### 设置信息

- 在您机器上的端口 80 上运行 ToolJet 服务器。
- 容器中已经配置了 postgres。所有数据都将在 docker volume `tooljet_data` 中可用。
- 您可以使用 `--env` 或 `--env-file` 标志来测试[此处](/docs/setup/env-vars) 提到的各种环境配置。
- 使用 `docker stop tooljet` 停止容器，然后使用 `docker start tooljet` 启动容器。

## 在 PWD 中运行

您可以使用下面的一键部署按钮在 PWD 上免费部署 ToolJet。

  <a href="https://labs.play-with-docker.com/?stack=https://gitee.com/wanddyh/tooljet/raw/develop/deploy/docker/play-with-docker.yml" >
    在 PWD 中尝试
  </a>

#### 设置信息

- 在 docker 容器启动并运行后打开端口 80
- 访问仪表板上共享的 url 以试用 tooljet