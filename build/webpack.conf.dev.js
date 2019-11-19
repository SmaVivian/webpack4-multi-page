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
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  mode: 'development',
  devServer:{
    contentBase: path.resolve(__dirname, '../src'), //告诉服务器从哪里提供内容, 最好设置成绝对路径
    index: 'page/index.html',  // 启动的时候，就在的页面
    open: true,
    openPage: 'page/index.html',  // 可以使启动后的index页的地址栏加载启动页的页面路径。
    // port: 8080,
    // contentBase: path.resolve(__dirname, "../release"), //本地服务器所加载的页面所在的目录
    // historyApiFallback: true, //不跳转
    // inline: true, //实时刷新
    // hot: true, // 开启热更新,
    // //服务器代理配置项
    // proxy: {
    //     '/o2o/*':{
    //         target: 'https://www.baidu.com',
    //         secure: true,
    //         changeOrigin: true
    //     }
    // }
  }
}

module.exports = webpackMerge(webpackBase, webpackDev);