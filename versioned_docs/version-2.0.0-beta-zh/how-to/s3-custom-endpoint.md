---
id: s3-custom-endpoints
title: 为 s3 主机使用自定义端点
---

在本操作指南中，我们将了解如何使用自定义端点连接到不同的**S3 兼容对象存储**。在本指南中，我们使用 Minio，因为它是一个 S3 兼容的对象存储。

- 转到 ToolJet 仪表板，并创建一个新应用程序
- 在左侧边栏，转到 **Sources** 并添加一个新的 AWS S3 数据源
- 现在连接模式将弹出
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/s3-custom/connection.png" alt="自定义端点 - S3 主机" width="500" />

    </div>
- 要获取 **Credentials** 即 **Access Key** 和 **Secret Key**，您需要转到 Minio 控制台生成密钥
- 启用 **Custom Endpoint** 切换开关，并输入自定义主机 URL，即您的 Minio 服务器 API 暴露的位置
- 输入详细信息后，您可以单击 `**测试连接**` 按钮来检查连接