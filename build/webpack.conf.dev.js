'use strict'
const path = require('path');
const webpackBase = require('./webpack.conf.base.js');    // 引入基础配置
const config = require('./config.js');                      // 引入配置

const webpack = require('webpack');                         // 用于引用官方插件
const webpackMerge = require('webpack-merge');              // 用于合并配置文件

const webpackDev = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: config.dev.devSourceMap } },
          { loader: 'postcss-loader', options: { sourceMap: config.dev.devSourceMap } }
        ]
      },
    ]
  },
  mode: 'development',
  devServer:{
    contentBase: path.resolve(__dirname, '../src'), //告诉服务器从哪里提供内容, 最好设置成绝对路径
    index: 'page/index.html',  // 启动的时候，就在的页面
    // open: true,
    // openPage: 'page/index.html',  // 可以使启动后的index页的地址栏加载启动页的页面路径。
    // historyApiFallback: true, //不跳转
    // inline: true, //实时刷新
    // hot: true, // 开启热更新,
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
}

module.exports = webpackMerge(webpackBase, webpackDev);