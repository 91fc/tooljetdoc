---
id: building-queries
title: 构建查询
---

# 构建查询

查询编辑器位于页面底部。我们现在将为我们在上一步中连接的 PostgreSQL 数据源构建一个查询。

:::tip 
您可以单击“放大”图标来放大查询编辑器窗格。
:::

- 单击查询编辑器的“+”图标以创建新查询。
- 选择在上一步中创建的 PostgreSQL 数据源。
- 复制下面给出的查询并粘贴到查询区域。
- 选择 SQL 模式

```sql
SELECT * FROM customers;
```


<img className="screenshot-full" src="/img/tutorial/building-queries/query.png" alt="query" />


单击“预览”按钮可以预览查询结果。预览查询不会改变应用程序的状态。


<img className="screenshot-full" src="/img/tutorial/building-queries/preview.png" alt="preview" />



## 高级选项


<img className="screenshot-full" src="/img/tutorial/building-queries/advanced-options.gif" alt="高级选项"/>


#### 在页面加载时运行查询
如果启用此选项，则将在首次加载应用程序时运行查询。查询可以有多个触发器，即同一查询稍后可以使用按钮的单击事件或表的行选择事件或任何其他事件再次触发。

#### 在运行查询之前请求确认
启用此选项可在运行查询之前显示确认操作的提示。确认提示将如下所示：

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tutorial/building-queries/confirm.png" alt="confirm" />

</div>

#### 显示成功通知
启用此选项以在查询完成时显示自定义消息。通知的持续时间也可以设置。
