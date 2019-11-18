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
}

module.exports = webpackMerge(webpackBase, webpackDev);