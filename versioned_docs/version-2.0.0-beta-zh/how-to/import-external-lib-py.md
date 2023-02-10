---
id: import-external-libraries-using-runpy
title: 使用 RunPy 导入外部库
---

ToolJet 允许您通过使用 [RunPy 查询](/docs/data-sources/run-py) 导入它们来在您的应用程序中使用 python 包。
在本操作指南中，我们将导入一些包并在应用程序中使用它。

:::注意不支持的模块
Pyodide 当前不支持的模块是那些具有依赖于系统库的 C 或 C++ 扩展的模块。这些模块不能在 Pyodide 中使用，因为它在 Web 浏览器中运行，无法访问 C 或 C++ 扩展所依赖的底层系统库。此外，Pyodide 使用已编译为 WebAssembly 的 Python 版本，它不支持与常规版本的 Python 相同的系统调用。因此，任何需要访问系统库或系统调用的模块都无法在 Pyodide 中运行。
:::

- 创建一个新的应用程序，然后从查询面板创建一个新的 RunPy 查询。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/import-python/runpy.png" alt="使用 RunPy 导入外部库" />

    </div>

- 让我们编写一些代码来导入包。我们将首先导入 micropip，它是 Python 的软件包安装程序，然后我们将使用 micropip 安装 `Pandas` 和 `NumPy`。 **运行** 查询以安装包。
    ```python
    import micropip
    await micropip.install('pandas')
    await micropip.install('numpy')
    ```
    
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/import-python/installing.png" alt="使用 RunPy 导入外部库"/>

    </div>
    
:::tip
启用 **Run this query on application load?** 选项以使包在整个应用程序中可用。
:::

## 例子

### 使用 NumPy 的随机数数组

- 让我们创建一个 **RunPy** 查询，它将使用 **NumPy** 包中的 **random** 模块，查询将生成随机数数组。
    ```python
    from numpy import random

    x = random.binomial(n=10, p=0.5, size=10)

    print(x)
    ```

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/import-python/random.gif" alt="使用 RunPy 导入外部库"/>

    </div>

:::info
您可以在浏览器的控制台上检查输出。
:::

### 解析 CSV 数据使用

- 让我们创建一个 RunPy 查询，它将解析 csv 文件中的数据。在此查询中，我们将使用 `StringIO` 、 `csv` 和 `Pandas` 模块。
    ```python
    from io import StringIO
    import csv
    import pandas as pd

    scsv = components.filepicker1.file[0].content

    f = StringIO(scsv)
    reader = csv.reader(f, delimiter=',')

    df = pd.DataFrame(reader)

    print(df.info())
    print(df)
    ```

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/import-python/csvparse.png" alt="使用 RunPy 导入外部库"/>

    </div>

- 在画布上添加一个文件选择器组件，并将**On file loaded**事件的事件处理程序设置为我们为解析数据而创建的**Run Query**。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/import-python/event.png" alt="使用 RunPy 导入外部库"/>

    </div>

- 最后，让我们在文件选择器上加载一个 csv 文件，并通过浏览器控制台上的 RunPy 查询检查输出。
    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/import-python/console.gif" alt="使用 RunPy 导入外部库"/>

    </div>
    