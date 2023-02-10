---
id: loading-image-pdf-from-db
title: 从 base64 字符串加载图像/PDF
---

在本操作指南中，我们将了解如何使用数据库中可用的 base64 字符串加载图像或 PDF 文件。在本操作指南中，我们使用了 postgres 数据库，该数据库已经具有图像或可用 PDF 文件的 base64 字符串。

- 让我们将一个 **filepicker** 组件拖到画布上，然后选择一个图像和一个 pdf 文件
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/load-base64/filepicker.png" alt="从 base64 字符串加载图像" width="700" />

    </div>

- 现在，创建一个从文件选择器插入图像的查询。正如您在下面的屏幕截图中看到的，我们正在使用 filepicker 组件的 **exposed 变量** 来检索上传文件的 **base64** 数据。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/load-base64/insert.png" alt="从 base64 字符串加载图像" width="500"/>

    </div>

- 创建另一个查询以从数据库返回数据，我们将使用此查询中返回的 base64 数据显示在图像和 pdf 组件上。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/load-base64/get.png" alt="从 base64 字符串加载图像" width="500"/>

    </div>

- 在画布上拖动图像和 PDF 组件。编辑 PDF 组件的属性并在 **文件 URL** 中输入：
    ```js
    {{'data:image/png;base64,' + queries.get.data[7].pdf}}
    ```
    同样对于图像组件：
    ```js
    {{'data:image/jpeg;base64,' + queries.get.data[7].image}}
    ```
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/load-base64/pdf.png" alt="从 base64 字符串加载图像" />

    </div>

:::info
您还可以在查询响应中使用转换并将 data:image/jpeg;base64 连接到 base64 数据。
:::