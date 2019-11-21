'use strict'
const path = require('path');
const webpackBase = require('./webpack.config.base.js');    // 引入基础配置
const config = require('./config.js');                      // 引入配置
const webpackMerge = require('webpack-merge');              // 用于合并配置文件

const webpackDev = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader' }
        ]
      },
    ]
  },
  mode: 'development',
  devServer: config.dev.devServer
}

module.exports = webpackMerge(webpackBase, webpackDev);