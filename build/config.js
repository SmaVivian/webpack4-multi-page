'use strict'

const path = require('path')

function resolve(dir) {
  return path.join(process.cwd(), dir)  // process.cwd()返回当前工作目录 即package.json所在目录 
  // return path.join(__dirname, dir)  // __dirname返回源代码所在的目录 即build/
}

const config = {
  projectPath: resolve('./'),                    // 项目根目录
  buildPath: resolve('./dist/'),                 // 打包目录
  srcPath: resolve('./src/'),                    // 源文件目录
  node_modulesPath: resolve('./node_modules/'),  // node_modules目录
  htmlPath: resolve('./src/page/'),              // HTML目录
  jsPath: resolve('./src/js/'),                  // JS目录
  assetsSubDirectory: resolve('./src/static/'),  // 静态资源目录(不处理的第三方代码)

  dev: {
    devServer: {
      contentBase: path.resolve(__dirname, '../src'), //告诉服务器从哪里提供内容, 最好设置成绝对路径
      index: 'page/index.html',  // 启动的时候，就在的页面
      // open: true,
      // openPage: 'page/index.html',  // 可以使启动后的index页的地址栏加载启动页的页面路径。
      // historyApiFallback: true, //不跳转
      inline: true, //实时刷新
      hot: true, // 开启热更新,
      port: 8080,
      //服务器代理配置项
      // proxy: {
      //   '/singleMuseum': {
      //     target: 'http://dev.tj720.com', // 内测环境
      //     // target: 'http://192.168.5.198:8888', // 谢少雄
      //     ws: false,
      //     changeOrigin: true
      //   },
      // }
    }
  },
  build: {
  }

  // dev: {
  //   host: 'localhost',
  //   port: '3002',

  //   useEslint: false,                                                // 是否使用ESlint
  //   showEslintErrorsInOverlay: true,                                 // 设置为true，ESlint-loader将始终返回警告。

  //   devSourceMap: true,                                             // 是否开启SourceMap
  //   devtool: 'eval-source-map',

  //   assetsPublicPath: '/',                                           // 相对于服务器根目录的路径，用于加载资源。

  //   proxyTable: {                                                    // proxy代理
  //     '/api': 'http://localhost:3000'
  //   }
  // },

  // build: {
  //   prodSourceMap: false,                                             // 是否开启SourcMap
  //   devtool: 'source-map',

  //   assetsRoot: path.resolve(__dirname, '../dist'),                  // 构建根目录
  //   assetsPublicPath: '/'                                            // 相对于服务器根目录的路径，用于加载构建好的资源。
  // }

}

console.log('\n/-----配置信息-----/\n')
console.log(config)
console.log('\n/-----配置信息-----/\n')

module.exports = config