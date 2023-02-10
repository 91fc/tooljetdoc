---
id: run-py
title: 运行 Python 代码
---

# 运行 Python 代码

您可以编写自定义 Python 代码来与组件和查询进行交互。为此，您只需创建一个新查询并从可用数据源中选择 **运行 Python 代码**。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/custom-python/run-py.png" alt="运行 JavaScript 代码" />

</div>

#### 示例：使用 Python 代码触发组件特定操作

- 让我们将一个**按钮**和一个**文本**小部件拖到画布上。我们将在文本组件上设置一个文本，并从 Python 查询中触发按钮单击事件。
- 单击查询面板上的`+`以创建查询并从可用数据源中选择 **运行 Python 代码**
- 让我们在 **Python 编辑器** 中编写代码并保存查询：

    ```python
    class Person:
      def __init__(self, name, age):
        self.name = name
        self.age = age
        
      def myfunc(self):
        return "Hello my name is " + self.name
        
    p1 = Person(tj_globals.currentUser.firstName, 36)
    
    components.text1.setText(p1.myfunc())
    components.button1.click()
    ```
- 上面的代码有一个函数 `myfunc`，它返回一个字符串，我们使用组件特定的操作来设置 Python 查询中的**文本组件**的值。我们还使用 `components.button1.click()` 触发按钮点击

:::tip
- 可以使用 **tj_globals** 访问 ToolJet 的全局变量。例如：`tj_globals.currentUser.firstName`
- 截至目前，运行 Python 代码仅支持 [Python 标准库](https://docs.python.org/3/library/)。
:::

- 让我们编辑小部件的属性：
    - 向按钮添加事件处理程序 - 选择 **On Click** 事件、**Show alert** 操作，并设置成功消息`使用 RunPy 触发`。每当从 Python 代码触发按钮单击事件时，这将显示成功警报弹出窗口。
    - 对于文本组件，我们不必编辑任何属性，因为我们直接从 Python 代码更改值。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/datasource-reference/custom-python/runpyg.gif" alt="运行 Python 代码" />

</div>

您还可以编写自定义 Python 代码以从**外部 API** 获取数据并操作图形表示的响应。

:::info
编写自定义 Python 代码时遇到问题？在我们的 [Slack 社区](https://www.tooljet.com/slack) 中提问。
:::
