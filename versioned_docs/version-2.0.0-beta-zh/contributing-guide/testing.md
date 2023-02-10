---
id: testing
title: 测试
---

按照以下步骤使用赛普拉斯设置和运行测试规范。我们建议在继续之前[在本地设置 ToolJet](/docs/contributing-guide/setup/macos)。

## 配置

- 导航到“cypress-tests”目录并输入以下命令：
  ```bash
  npm install
  ```

## 运行测试
#### 头部模式
- 要在 **headed** 模式下运行 cypress，请运行以下命令：
  ```bash
  npm run cy:open
  ```
- 在 **headed** 模式下，用户将能够从测试运行器中选择测试规格：
  <div style={{textAlign: 'center'}}>
  
  <img className="screenshot-full" src="/img/testing/headed.png" alt="Cypress 头部模式" />
  
  </div>

#### 无头模式

- 要在 **headless** 模式下运行 cypress，请运行以下命令：
  ```bash
 npm run cy:run
 ```

- 对于在无头模式下运行特定规范，运行特定规范
  ```bash
  npm run cy:run --  --spec "cypress/e2e/dashboard/multi-workspace/manageSSO.cy.js
  ```

  <div style={{textAlign: 'center'}}>
  
  <img className="screenshot-full" src="/img/testing/headless.png" alt="Cypress无头模式" />
  
  </div>

  :::caution
  如果某些测试规范需要环境变量，用户可以通过类似于以下命令来传递它们：
  ```bash
  npm run cy:open -- --env='{"pg_host":"localhost","pg_user":"postgres", "pg_password":"postgres"}'
  ```
  或者用户可以在 **cypress.config.js** 文件中添加环境变量
  :::


:::info
[此处](https://docs.cypress.io/guides/guides/command-line#Commands) 检查所有Cypress命令
:::