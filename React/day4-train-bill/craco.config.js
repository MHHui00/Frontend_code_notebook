const path = require('path')

module.exports = {
    webpack:{
        alias:{
            '@': path.resolve(__dirname, 'src')
        }
    }
}



//review Craco 的全名是 "Create React App Configuration Override"
//用來修改 Create React App (CRA) 設定的工具。Create React App 是一個用於快速建立 React 應用程式的工具，但有時你可能需要自訂 CRA 的設定，例如修改 webpack 設定、設定 eslint 規則、修改 babel ç設定等等。@craco/craco 允許你透過一個叫做 Craco 配置的檔案來自訂 CRA 的設定，而不必 eject（提取） CRA 專案。

//1 自訂設定: 你可以透過 Craco 配置檔案來修改 CRA 專案的設定，例如修改 webpack 配置、babel 設定、eslint 規則、postcss 設定等。這讓你能夠更容易地調整 CRA 專案的行為，而無需深入研究 CRA 的內部配置。
//2 插件支援: Craco 支援各種插件，你可以使用這些插件來執行各種自訂操作，例如添加 CSS 預處理器（例如 Sass 或 Less）的支援、設定代理伺服器以處理 API 請求、優化圖片載入等等。
//3 簡化專案配置: 透過 Craco，你可以更容易地管理 CRA 專案的配置，而無需手動編輯 webpack 或 babel 設定文件，這有助於減少潛在的錯誤並提高專案的可維護性。