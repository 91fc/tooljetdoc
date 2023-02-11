---
id: kanban
title: 看板
---

# 看板

看板小部件允许您通过透明的工作流程直观地组织任务并确定任务的优先级。您可以设置要显示的列数、启用/禁用添加卡片按钮以及将数据绑定到卡片。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/kanban/kanban.png" alt="ToolJet - 小部件参考 - 看板小部件" />

</div>

## 活动

要添加事件，请单击小部件句柄以打开右侧栏中的小部件属性。转到 **Events** 部分并单击 **Add handler**。

- **[已添加卡](#card-added)**
- **[卡已移除](#card-removed)**
- **[卡片已移动](#card-moved)**
- **[选择卡片](#card-selected)**
- **[卡片更新](#card-updated)**

就像 ToolJet 上的任何其他事件一样，您可以为上述任何事件设置多个处理程序。

:::info
查看 [操作参考](/docs/category/操作参考) 文档以获取有关所有 **Actions** 的详细信息。
:::

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/kanban/kanban-events.png" alt="ToolJet - 小部件参考 - 看板小部件" />

</div>

## 特性

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/kanban/properties.png" alt="ToolJet - 小部件参考 - 看板小部件" />

</div>

:::caution
请记住，您需要在 `卡数据` 字段中为每张卡提供一个 `ID` <br />
并且这个 id 必须是字符串类型。
:::

| 属性       | 说明                                                                                 | 期望值                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 专栏       | 输入列数据 - 以对象数组的形式或来自返回对象数组的查询的 `id` 和 `title` 。           | `{{[{ "id": "1", "title": "待办事项" },{ "id": "2", "title": "进行中" },{ "id": "2" , "title": "Completed" }]}}` 或 `{{queries.xyz.data}}`                         |
| 卡数据     | 以对象数组的形式或从返回对象数组的查询中输入卡片数据 - `id`、`title` 和 `columnId`。 | `{{[{ id: "01", title: "one", columnId: "1" },{ id: "02", title: "two", columnId: "1" },{ id: "03" , title: "three", columnId: "2" }]}}` or `{{queries.abc.data}}` |
| 启用添加卡 | 此属性允许您显示或隐藏每列底部的 `添加卡片` 按钮。                                   | 默认情况下它是启用的，您可以通过单击旁边的 `Fx` 以编程方式设置 `{{true}}` 或 `{{false}}` 启用/禁用按钮                                                             |

## 一般的
### 工具提示

当用户将鼠标指针悬停在小部件上时，工具提示通常用于指定有关某事的额外信息。

在 **通用** 折叠栏下，您可以设置字符串格式的值。现在将鼠标悬停在小部件上会将字符串显示为工具提示。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/tooltip.png" alt="ToolJet - 小部件参考 - 看板小部件" />

</div>

## 布局

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/kanban/layout.png" alt="ToolJet - 小部件参考 - 看板小部件" />

</div>

| 布局         | 说明                                 | 期望值                                                                    |
| ------------ | ------------------------------------ | ------------------------------------------------------------------------- |
| 在桌面上显示 | 打开或关闭以在桌面视图中显示小部件。 | 您可以通过单击 `Fx` 以设置值 `{{true}}` 或 `{{false}}` 来以编程方式设置值 |
| 在手机上显示 | 打开或关闭以在移动视图中显示小部件。 | 您可以通过单击 `Fx` 以设置值 `{{true}}` 或 `{{false}}` 来以编程方式设置值 |

## 风格

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/kanban/styles.png" alt="ToolJet - 小部件参考 - 看板小部件" />

</div>

| 款式     | 说明                                                                                                                              |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 禁用     | 如果禁用或设置为 `{{false}}` ，小部件将被锁定并变得无法使用。默认情况下，它是禁用的，即它的值设置为 `{{true}}` 。                 |
| 能见度   | 这是为了控制小部件的可见性。如果 `{{false}}`/disabled 应用程序部署后小部件将不可见。默认情况下，它是启用的（设置为 `{{true}}`）。 |
| 宽度     | 此属性设置列的宽度。                                                                                                              |
| 最小宽度 | 此属性设置列的最小宽度。                                                                                                          |
| 强调色   | 您可以通过输入十六进制颜色代码或从颜色选择器中选择您选择的颜色来更改列标题的强调色。                                              |

## 暴露的变量

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/widgets/kanban/variables.png" alt="ToolJet - 小部件参考 - 看板小部件" />

</div>

| 变量             | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| columns          | `columns` 变量是一个对象数组，其中包含各个对象中的列数据。由于 columns 变量是一个数组，您需要在数组中指定对象的索引以获取该对象中的数据。列中的每个对象都有两个键 - `id` 和 `title` 以及一个数组 `cards`，它也是一个对象数组。示例：如果你想获得第二张卡片的标题，那么你将使用 `{{components.kanbanboard1.columns[1].title}}` - 这里我们指定数组索引为 `[1]` 然后是键这是 `标题` 。同样，您可以使用 `{{components.kanbanboard1.columns[0].cards[1].title}}` 来获取卡片详细信息 |
| lastAddedCard    | 变量 `lastAddedCard` 保存最后添加的卡片的属性。它包含以下数据 - 最后添加的卡片的 `id` 、 `title` 和 `columnId` 。您可以使用 `{{components.kanbanboard1.lastAddedCard.title}}` 获取这些值                                                                                                                                                                                                                                                                                       |
| lastRemovedCard  | 变量 `lastRemovedCard` 保存最近从看板中删除的卡片的属性。它包含以下数据 - 最近删除的卡片的 `id` 、 `title` 和 `columnId` 。您可以使用 `{{components.kanbanboard1.lastRemovedCard.title}}` 获取这些值                                                                                                                                                                                                                                                                           |
| lastCardMovement | 变量 `lastCardMovement` 保存最近从其原始位置移动的卡片的属性。它包含以下数据 - `originColumnId`、`destinationColumnId`、`originCardIndex`、`destinationCardIndex` 和包含 `title` 的对象 `cardDetails`。您可以使用 `{{components.kanbanboard1.lastCardMovement.cardDetails.title}}` 或 `{{components.kanbanboard1.lastCardMovement.destinationCardIndex}}` 来获取这些值                                                                                                         |
| lastUpdatedCard  | 变量 `lastUpdatedCard` 保存最新修改的卡片的 `id` 、 `title` 和 `columnId` 。您可以使用 `{{components.kanbanboard1.lastUpdatedCard.columnId}}` 获取这些值                                                                                                                                                                                                                                                                                                                       |
| selectedCard     | 变量 `selectedCard` 保存看板中所选卡片的 `id` 、 `title` 、 `columnId` 和 `description` 。您可以使用 `{{components.kanbanboard1.selectedCard.description}}` 获取这些值                                                                                                                                                                                                                                                                                                         |