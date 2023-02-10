---
id: upload-files-aws
title: 在 AWS S3 存储桶上上传文件
---

# 在 AWS S3 存储桶上上传和下载文件

本指南将帮助您快速构建用于从 AWS S3 存储桶上传或下载文件的基本 UI。

在构建 UI 之前，请查看 **[AWS S3 数据源文档](/docs/data-sources/s3)** 以了解如何设置 AWS S3 和添加数据源。

成功添加 AWS 数据源后，使用以下小部件构建基本 UI：
- **下拉**：用于选择 S3 存储中的存储桶。
- **表格**：用于在下拉列表中列出所选存储桶内的所有对象。
- **文本输入**：用于获取要上传的文件的路径。
- **文件选择器**：用于上传文件。
- **按钮**：这将用于触发上传查询。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 在 AWS S3 存储桶上上传文件](/img/how-to/upload-files-aws/ui.png)

</div>

## 查询

我们将创建以下查询：

1. **获取桶**
2. **列表对象**
3. **上传到S3**
4. **下载**

### 获取桶

此查询将获取 S3 中所有存储桶的列表。只需创建一个新查询，选择 AWS S3 数据源，然后选择 **List buckets** 操作。将查询命名为 **getBuckets** 并单击 **Save**。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 在 AWS S3 存储桶上上传文件](/img/how-to/upload-files-aws/getBuckets.png)

</div>

现在，让我们编辑 **dropdown** 小部件的属性。

- **Label**：设置标签为Bucket。
- **选项值**：将选项值设置为`{{queries.getBuckets.data.Buckets.map(bucket => bucket['Name'])}}`。我们正在映射查询返回的数据，因为返回的数据是对象数组。
- **选项标签**：将选项值设置为`{{queries.getBuckets.data.Buckets.map(bucket => bucket['Name'])}}`。这将显示与选项值相同的选项标签。

您可以稍后添加一个事件处理程序，以便在从下拉列表中选择一个选项时运行 **listObject** 查询。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 在 AWS S3 存储桶上上传文件](/img/how-to/upload-files-aws/dropdown.png)

</div>

### 列表对象

此查询将在下拉列表中列出所选 Bucket 内的所有对象。选择 **List objects in a bucket** 操作，在 Bucket 字段中输入 `{{components.dropdown1.value}}` - 这将从下拉列表中的选定选项动态获取字段值。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 在 AWS S3 存储桶上上传文件](/img/how-to/upload-files-aws/listObjects.png)

</div>

编辑 **table** 小部件的属性：
- **表数据**：`{{queries.listObjects.data['Contents']}}`
- **添加列**：
  - **Key**：将**列名**设置为`Key`，将**Key**设置为`Key`
  - **Last Modified**：将 **Column Name** 设置为 `Last Modified` 并将 **Key** 设置为 `LastModified`
  - **Size**：将 **Column Name** 设置为 `Size` 并将 **Key** 设置为 `Size`
- 添加一个**操作按钮**：将按钮文本设置为**复制签名 URL**，向此按钮添加一个处理程序，用于单击事件和操作以复制到剪贴板，在文本字段中输入`{{queries.download .data.url}}` - 这将从我们接下来创建的 **download** 查询中获取下载 url。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 在 AWS S3 存储桶上上传文件](/img/how-to/upload-files-aws/table.png)

</div>

### 下载

创建一个新查询并选择 **Signed URL for download** 操作。在 Bucket 字段中，输入 `{{components.dropdown1.value}}` 并在 Key 中输入 `{{components.table1.selectedRow.Key}}`。

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 在 AWS S3 存储桶上上传文件](/img/how-to/upload-files-aws/download.png)

</div>

编辑表的**属性**，添加一个事件处理程序，用于运行 `Row clicked` 事件的 `download` 查询。每次单击表格中的一行时，这将生成一个签名的 url 供下载。

### 上传到S3

创建一个新查询，选择**上传对象**操作。在各自的字段中输入以下值：
- **桶**：`{{components.dropdown1.value}}`
- **Key**: {{ components.textinput1.value + '/' +components.filepicker1.file[0].name}}`
- **内容类型**：`{{components.filepicker1.file[0].type}}`
- **上传数据**：`{{components.filepicker1.file[0].base64Data}}`
- **编码**：`base64`

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 在 AWS S3 存储桶上上传文件](/img/how-to/upload-files-aws/uploadToS3.png)

</div>

#### 配置文件选择器：

单击小部件句柄以编辑文件选择器属性：

- 将 **Accept file types** 更改为 `{{"application/pdf"}}` 以便选择器仅接受 pdf 文件或`{{"image/*"}}` 以便选择器仅接受图像文件.在下面的屏幕截图中，我们已将接受的文件类型属性设置为 `{{"application/pdf"}}` 因此它将只允许选择 pdf 文件：

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 使用 GCS 上传文件](/img/how-to/upload-files-gcs/result-filepicker.png)

</div>

- 将**最大文件数**更改为 `{{1}}` ，因为我们一次只上传 1 个文件。

- 选择一个 pdf 文件并将其保存在文件选择器中。

:::info
 文件类型必须是有效的 **[MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)** 根据输入元素规范或有效的文件扩展名类型.

 要接受任何/所有文件类型，请将 `接受文件类型` 设置为空值。
:::

<div style={{textAlign: 'center'}}>

![ToolJet - 如何 - 使用 GCS 上传文件](/img/how-to/upload-files-gcs/config-filepicker.png)

</div>

最后一步，转到 **uploadToS3** 查询的 **Advanced** 选项卡并添加一个查询以运行 **listObjects** 查询，以便每当上传文件时刷新表格。