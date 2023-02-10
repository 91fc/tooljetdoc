---
id: client
title: 部署 ToolJet 客户端
---

# 部署 ToolJet 客户端

ToolJet 客户端是一个独立的应用程序，可以部署在 Netlify、Firebase、S3/Cloudfront 等静态网站托管服务上。

您可以使用以下命令构建独立客户端：
```bash
SERVE_CLIENT=false npm run build
```

## 在 Firebase 上部署 ToolJet 客户端

:::tip
您应该在构建前端时设置环境变量`TOOLJET_SERVER_URL`（服务器的 URL），并在独立客户端构建时将`SERVE_CLIENT`设置为`false`。

例如：`SERVE_CLIENT=false TOOLJET_SERVER_URL=https://server.tooljet.com npm run build && firebase deploy`
:::

1. 初始化firebase项目
   ```bash
    firebase init
   ```
   选择 Firebase Hosting 并将 build 设置为静态文件目录
2. 将客户端部署到Firebase
   ```bash
    firebase deploy
   ```

## 使用 Google Cloud Storage 部署 ToolJet 客户端

:::tip
在构建前端时，您应该设置环境变量 `TOOLJET_SERVER_URL`（服务器的 URL）。


例如：`SERVE_CLIENT=false TOOLJET_SERVER_URL=https://server.tooljet.io npm run build`
:::

#### 使用负载均衡器

Tooljet 客户端可以从 Cloud Storage 存储桶托管，就像托管任何其他静态网站一样。
按照 [此处](https://cloud.google.com/storage/docs/hosting-static-website) 中的 google 文档中的说明进行操作。

总结以下步骤：
1. 创建一个 bucket 并在 build 文件夹中上传文件，使 `index.html` 位于 bucket 根目录。

2. 编辑存储桶的权限，将*新主体*分配为`allUsers`，角色为`Storage Object Viewer`，并允许对存储桶进行公共访问。

3. 从[buckets browser](https://console.cloud.google.com/storage/browser?_ga=2.180838119.1530169400.1637242882-657891227.1637242882)点击*Edit website configuration*并将主页指定为`index.html `

4. 按照[说明](https://cloud.google.com/storage/docs/hosting-static-website#lb-ssl) 创建用于托管静态网站的负载平衡器。

5. 或者，创建 Cloud CDN 以与分配给负载均衡器的后端存储桶一起使用。

6. 创建负载均衡器后，将为其分配一个 IP。尝试点击它以检查网站是否正在加载。

7. 使用负载均衡器 IP 作为域 A 记录的静态 IP。

#### 使用谷歌应用引擎

1. 将构建文件夹上传到存储桶中

2. 使用以下配置将 `app.yaml` 文件上传到存储桶中

   ```yaml
   runtime: python27
   api_version: 1
   threadsafe: true

   handlers:
   - url: /
     static_files: build/index.html
     upload: build/index.html

   - url: /(.*)
     static_files: build/\1
     upload: build/(.*)
   ```

3. 在您的浏览器上激活云外壳并创建构建文件夹
   ```bash
   mkdir tooljet-assets
   ```

4. 将上传的文件复制到要提供的资产文件夹中
   ```bash
   gsutil rsync -r gs://your-bucket-name/path-to-assets ./tooljet-assets
   ```

5. 部署要服务的静态资产
   ```bash
   cd tooljet-assets && gcloud app deploy
   ```