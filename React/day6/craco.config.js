const { whenProd, getPlugin, pluginByName } = require('@craco/craco')
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // 配置webpack
    // review CDN優化！配置 （Content Delivery Network）
    //比較大的/占資源多的並且不是用來實現功能的 那些包，從build中抽離出來，使用CDN臨時下載到瀏覽器，提高網站的性能
    //如静态文件、图片、视频和其他资源）存储在分布在全球各地的服务器上，以便用户可以从距离更近的服务器获取这些内容，从而降低加载时间和提高性
    configure: (webpackConfig) => {
      let cdn = {
        js: []
      }
      whenProd(() => {
        // key: 不参与打包的包(由dependencies依赖项中的key决定)
        // value: cdn文件中 挂载于全局的变量名称 为了替换之前在开发环境下
        webpackConfig.externals = {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
        // 配置现成的cdn资源地址
        // 实际开发的时候 用公司自己花钱买的cdn服务器
        cdn = {
          js: [
            'https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js',
          ]
        }
      })

      // 通过 htmlWebpackPlugin插件 在public/index.html注入cdn资源url
      const { isFound, match } = getPlugin(
        webpackConfig,
        pluginByName('HtmlWebpackPlugin')
      )

      if (isFound) {
        // 找到了HtmlWebpackPlugin的插件
        match.userOptions.files = cdn
      }

      return webpackConfig
    }
  }
}
