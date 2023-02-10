---
id: smtp
title: SMTP
---

# SMTP

SMTP 插件可以将 ToolJet 应用程序连接到 **SMTP 服务器** 以发送电子邮件。

## 连接

可以使用以下凭据连接 SMTP 服务器：
- **Host**
- **Port**
- **User**
- **Password**

:::info
您还可以在保存配置之前通过单击`测试连接`按钮来测试您的连接。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/smtp/connect.png" alt="smtp connect" />

</div>

## 查询SMTP

转到编辑器底部面板的查询管理器，然后单击左侧的`+`按钮创建一个新查询。从数据源下拉列表中选择`SMTP`。

要创建发送电子邮件的查询，您需要提供以下属性：
  - **From** `必填` : 发件人的电子邮件地址
  - **From Name**：发件人姓名
  - **To** `必填` : 收件人的电子邮件地址
  - **Subject**：电子邮件的主题


<img className="screenshot-full" src="/img/datasource-reference/smtp/query1.png" alt="smtp query1" />


  - **Body**：您可以在各自的字段中以`原始文本`或`html`的形式输入正文文本。
  - **Attachments**：可以通过在附件字段中引用`文件选择器`组件中的文件，将附件添加到 SMTP 查询中。
  
  例如，您可以将 `Attachments` 字段值设置为 `{{ components.filepicker1.file }}` 或者您可以传递一个数组 `{{ name: 'filename.jpg', dataURL: '..... .' }}` 对象来完成这个。


<img className="screenshot-full" src="/img/datasource-reference/smtp/query2.png" alt="smtp query2" />
