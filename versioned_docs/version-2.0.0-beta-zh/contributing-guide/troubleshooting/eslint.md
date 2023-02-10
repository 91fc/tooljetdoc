---
id: eslint
title: EsLint
---

# ESLint

ESLint 作为代码质量工具是一种检查代码错误并帮助您修复错误并强制执行编码风格的工具。


## 设置


1. 为您的代码编辑器安装 [ESLint 扩展](https://eslint.org/docs/latest/user-guide/integrations)。
2. 将编辑器的默认格式化程序设置为“ESLint”。

:::tip
对于 VSCode 用户，您可以在 [**settings.json**](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) 中将格式化程序设置为“ESLint”。
:::

3. 安装依赖项。
    ```bash
    npm install
    npm install --prefix server
    npm install --prefix frontend
    ```
4. 运行 linter。
    ```bash
    npm run --prefix server lint
    npm run --prefix frontend lint
    ```
5.修复ESlint错误和警告。
    ```bash
    npm run --prefix server format
    npm run --prefix frontend format
    ```


## 要求

1. **Node version 16.19.0**
2. **npm version 8.19.3**

