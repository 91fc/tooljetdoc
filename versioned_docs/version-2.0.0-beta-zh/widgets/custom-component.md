---
id: custom-component
title: 自定义组件
---

# 自定义组件

当所需的功能在其他组件中不可用时，自定义组件可用于创建您自己的 React 组件。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/custom-component/custom-component.png" alt="ToolJet - 小部件参考 - 自定义组件" />

</div>

## 特性

### 数据

数据需要是需要作为 `数据` 道具传递给自定义组件的对象

**例子：**

```json
{{{
    title: "Hi! There",
    buttonText: "Updated Text",
    queryName: "runjs1"
}}}
```

### 代码

此字段用于为您的自定义组件添加 React 代码。自定义组件的包可以从 [Skypack](https://www.skypack.dev/) 导入。例如，要将 `React` 包导入自定义组件，可以将其导入为 `import React from 'https://cdn.skypack.dev/react'`。

Tooljet 提供了 3 个属性来与应用程序交互：`data`、`updateData` 和 `runQuery`。

- `data` 是自定义组件和 Tooljet 应用程序之间的共享对象。
- `updateData` 是一个函数，它接受用于更新传递给自定义组件的数据的单个对象。
- `runQuery` 是一个接受查询名称作为字符串的函数，用于从自定义组件运行查询。

**例子：**

```js
import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import { Button, Container, Link } from "https://cdn.skypack.dev/@material-ui/core";

const MyCustomComponent = ({data, updateData, runQuery}) => (
    <Container>
        <h1>{data.title}</h1>
        <Button
            color="primary"
            variant="outlined"
            onClick={() => {updateData({...data, title: 'Hello World!!'})}}>
            {data.buttonText}
        </Button>
        <Button
            color="primary"
            variant="outlined"
            onClick={() => {runQuery(data.queryName)}}
        >
            Run Query
        </Button>
    </Container>
);

const ConnectedComponent = Tooljet.connectComponent(MyCustomComponent);

ReactDOM.render(<ConnectedComponent />, document.body);
```

:::info
`Tooljet.connectComponent` 充当 HOC，需要访问传递到自定义组件中的数据并运行查询
:::

### 一般的
#### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - 自定义组件" />

</div>

## 布局

| 布局         | 说明                       | 期望值                                                                      |
| ------------ | -------------------------- | --------------------------------------------------------------------------- |
| 在桌面上显示 | 打开或关闭以显示桌面视图。 | 您可以通过单击 `Fx` 以设置值 `{{true}}` 或 `{{false}}` 来以编程方式确定该值 |
| 在手机上显示 | 打开或关闭以显示移动视图。 | 您可以通过单击 `Fx` 以设置值 `{{true}}` 或 `{{false}}` 来以编程方式确定该值 |

## 风格

| 款式   | 说明                                                                                                                                                                       |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 能见度 | 打开或关闭以控制小部件的可见性。您可以通过单击旁边的 `Fx` 按钮以编程方式更改其值。如果为 `{{false}}`，则在部署应用程序后小部件将不可见。默认情况下，它设置为 `{{true}}` 。 |

:::info
任何在其字段旁边具有 `Fx` 按钮的属性都可以**以编程方式配置**。
:::
