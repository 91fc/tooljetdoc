---
id: use-axios-in-runjs
title: 在 RunJS 中使用 Axios
---

ToolJet 允许您使用三个 [库](/docs/data-sources/run-js#libraries) - **Moment.js**、**Lodash** 和 **Axios**。在本指南中，我们将看到一些有关如何使用 **Axios** 库使用 RunJS 查询的示例。

**[Axios](https://axios-http.com/docs/intro)** 是一个基于 promise 的 HTTP 库，允许开发人员向他们自己的或第三方服务器发出请求以获取数据。它提供了不同的请求方式，例如 `GET` 、 `POST` 、 `PUT/PATCH` 和 `DELETE` 。

## 发出 Axios HTTP 请求

在本节中，您将发出 `GET` 和 `PUT` 请求。您将使用免费的 `假` API：**[JSONPlaceholder](https://jsonplaceholder.typicode.com/)**。

### 发出 GET 请求

创建一个 RunJS 查询并复制以下代码：

```javascript
var url = "https://jsonplaceholder.typicode.com/users/1";

var data = (await axios.get(url)).data;

return data
```

在代码片段中，声明了一个变量 url，它被分配了 JSON API 的 URL。然后声明另一个变量，它向 JSON API 发送 GET 请求。保存查询并点击预览以查看 API 返回的数据。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/how-to/use-axios/get.png" alt="在 RunJS 中使用 Axios"/>

</div>

### 发出 POST 请求

post 请求有点不同，因为您将请求中的一些数据传递给服务器。在请求中，您将创建一个用户并传递该用户的详细信息。请求的代码片段如下所示：

```javascript
var url = "https://jsonplaceholder.typicode.com/users";

var data = axios.post(url,{
  id: 11,
  name: "Shubhendra",
  username: "camelcaseguy",
  email: "shubhendra@tooljet.com",})

return data
```

Axios POST 请求在请求 URL 之后使用一个对象来定义您要为用户创建的属性。一旦操作完成，就会有来自服务器的响应。在下面的屏幕截图中，您可以看到它返回 **Status: 201**，这意味着请求已完成并导致创建新资源。

<div style={{textAlign: 'center'}}>

<img className="screenshot-full" src="/img/how-to/use-axios/post.png" alt="在 RunJS 中使用 Axios"/>

</div>

:::tip
查看教程**[构建 GitHub star 历史跟踪器](https://blog.tooljet.com/build-github-stars-history-app-in-5-minutes-using-low-code/)**它利用了 axios 库。
:::


