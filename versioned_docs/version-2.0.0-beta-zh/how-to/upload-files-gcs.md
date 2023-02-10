---
id: upload-files-gcs
title: 使用 GCS 上传文件
---

# 使用 GCS 上传文件

在本指南中，我们将创建一个将 PDF 上传到 Google Cloud Storage 的界面。

在添加新数据源之前，我们需要有一个用于 GCS 存储桶的私钥，并确保该密钥具有适当的权限。

## 设置谷歌云存储数据源

1. 转到左侧栏中的数据源管理器，然后单击 `+` 按钮。
2. 从弹出的模式中的 **APIs** 部分添加一个新的 GCS 数据源。
3. 输入**服务账户的 JSON 私钥**并测试连接。
4. 点击**保存** 添加数据源。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 使用 GCS 上传文件](/img/how-to/upload-files-gcs/adding-account.png)

</div>

## 添加文件选择器

1. 将**文件选择器**小部件拖放到画布上
2.配置文件选择器：
  - 将 **Accept file types** 更改为 `{{"application/pdf"}}` 以便选择器仅接受 pdf 文件。在下面的屏幕截图中，我们已将接受的文件类型属性设置为 `{{"application/pdf"}}` 因此它将只允许选择 pdf 文件：

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 使用 GCS 上传文件](/img/how-to/upload-files-gcs/result-filepicker.png)

</div>

  - 将**最大文件数**更改为 `{{1}}` ，因为我们一次只上传 1 个文件。

3. 选择一个 pdf 文件并将其保存在文件选择器中。

:::info
 文件类型必须是有效的 **[MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)** 根据输入元素规范或有效的文件扩展名类型.

 要接受任何/所有文件类型，请将 `接受文件类型` 设置为空值。
:::

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 使用 GCS 上传文件](/img/how-to/upload-files-gcs/config-filepicker.png)

</div>

## 创建查询

1. 点击编辑器底部面板查询管理器的`+`按钮，选择GCS数据源
2. 选择**上传文件**操作，输入需要的参数：
- 存储桶：`gs://test-1`
- 文件名：`{{components.file1.file[0]['name']}}`
- 内容类型：`{{components.file1.file[0]['type']}}`
- 上传数据：`{{components.file1.file[0]['base64Data']}}`
- 编码：`base64`
3. 点击**保存**创建查询

## 运行查询
1. 添加一个**按钮**，用于触发上传文件的查询
2. 编辑按钮的属性并添加一个**事件处理程序**以在**点击**事件上**运行查询**。
3. 单击**按钮** 触发查询，这将上传您之前通过文件选择器选择的 pdf 文件，并将其上传到 GCS。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 使用 GCS 上传文件](/img/how-to/upload-files-gcs/final-result.png)

</div>