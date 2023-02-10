---
id: access-users-location
title: 访问用户的位置
---

# 使用 RunJS 查询（Geolocation API）访问用户的位置

在本操作指南中，我们将构建一个 ToolJet 应用程序，该应用程序将利用 **JavaScript Geolocation API** 来获取用户的位置。 Geolocation API 提供对与用户设备关联的地理位置数据的访问。这可以使用 GPS、WIFI、IP 地理定位等来确定。

:::info
为了保护用户的隐私，Geolocation API 请求定位设备的权限。如果用户授予权限，您将获得对位置数据的访问权限，例如纬度、经度、高度和速度。
:::

- 让我们从创建一个新应用程序开始

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/access-location/newapp.png" alt="新应用" />

    </div>

- 在应用程序编辑器中，转到底部的查询面板并通过选择 **Run JavaScript Code** 作为数据源来创建 **[RunJS 查询](/docs/data-sources/custom-js)**

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/access-location/runjs.png" alt="New App" />

    </div>

- 您可以使用以下使用地理定位 api 的 javascript 代码来获取位置

    ```js
    function getCoordinates() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    }

    async function getAddress() {
    // notice, no then(), cause await would block and 
    // wait for the resolved result
    const position = await getCoordinates(); 
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    return [latitude, longitude];  
    }

    return await getAddress()
    ```

- 现在，转到**高级**选项卡并启用 `在页面加载时运行查询？` 选项。启用此选项将在每次用户打开应用程序时运行此 javascript 查询，并且查询将返回位置

- **保存**查询并点击开火按钮

- 只要您按下开火按钮，浏览器就会提示您允许共享 ToolJet 应用程序的位置访问权限。您需要**允许**它返回位置数据

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/access-location/prompt.png" alt="New App" />

    </div>

- 现在，要检查查询返回的数据，请转到左侧栏中的 **Inspector**。展开查询 -> `runjs1`(查询名称) -> 然后展开**数据**。你会找到坐标

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/access-location/data.png" alt="New App" />

    </div>

- 接下来，我们可以使用**地图组件**上查询返回的这些坐标来显示位置。将地图组件拖放到画布上并编辑其属性。在**初始位置**属性中，输入

    ```js
    {{ {"lat": queries.runjs1.data[0], "lng": queries.runjs1.data[1]} }}
    ```

    <div style={{textAlign: 'center'}}>

    <img className="screenshot-full" src="/img/how-to/access-location/map.png" alt="New App" />

    </div>

- 最后，您会在**地图组件**上看到更新的位置

