---
id: transformations
title: 转换
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 转换

可以对查询启用转换以转换查询结果。 ToolJet 允许您使用两种编程语言转换查询结果：

- **[JavaScript](#使用-javascript-转换)**
- **[Python](#使用-python-转换)**

:::caution
- 每个转换的范围都限于为其编写的查询。
- 不能在转换中调用操作和 CSA（组件特定操作），它们只能在 **[RunJS](/docs/data-sources/run-js)** 查询或 **[RunPy](/ docs/data-sources/run-py)** 查询。
:::

## 使用 JavaScript 转换

假设查询返回带有 `name` 行的客户数据，那么我们将编写一个简单的转换来计算所有客户的 `first_name` 和 `last_name` 。

```javascript
// 在这里写你的代码
// 返回值将被设置为数据，原始数据将作为 rawData 提供
return data.map((row) => {
  return {
    ...row,
    first_name: row.name.split(' ')[0],
    last_name: row.name.split(' ')[1],
  };
});
```

查询现在看起来像这样：

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tutorial/transformations/jstransformv2.png" alt="转换" />

</div>

## 使用 Python 转换

让我们使用 Python 转换为我们在上一步中获取的所有客户计算 `first_name` 和 `last_name` 。

```python
return list(map(lambda row: {
  **row,
  'first_name': row['name'].split(' ')[0],
  'last_name': row['name'].split(' ')[1],
}, data))
```

#### 例子

- 让我们看一下 RESTAPI 返回的数据（此处使用模拟数据）：
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/tutorial/transformations/ogdata.png" alt="原始数据" />

  </div>

- 现在我们将使用 Python 转换返回的数据，Python 将在返回的数据中附加一个名为 `user` 的新键，该用户将拥有来自 ToolJet 公开的全局变量的值，即 `globals.currentUser.email` 
  ```python
  return list(map(lambda item: {**item, "user": f"{globals['currentUser']['email']}"}, data))
  ```

- 现在，您可以点击预览按钮查看转换后的数据。
  <div style={{textAlign: 'center'}}>

  <img className="screenshot-full" src="/img/tutorial/transformations/tdata.png" alt="原始数据" />

  </div>

---

单击 `保存` 按钮创建查询。可以使用查询面板右上角的 `运行` 按钮运行已保存的查询。使用运行按钮运行的查询将表现得就像它是由按钮单击等应用程序事件触发的一样，因此将改变应用程序的状态。您可以使用应用程序构建器左侧栏中的状态检查器查看查询结果。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tutorial/transformations/run.png" alt="result"/>

</div>

我们可以看到，`first_name` 和 `last_name` 被添加到查询的 `data` 对象中的所有行中。如果您需要查询的原始数据，它将在查询的 `rawData` 对象中可用。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tutorial/transformations/rawdata.png" alt="原始数据" />

</div>
