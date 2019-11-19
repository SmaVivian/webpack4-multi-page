'use strict'
// 生产环境配置文件
const path = require('path');
const webpackBase = require('./webpack.conf.base.js');     // 引入基础配置
const config = require('./config.js');                       // 引入配置

const webpack = require('webpack');                          // 用于引用官方插件
const webpackMerge = require('webpack-merge');               // 用于合并配置文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 用于清除文件夹
const CopyWebpackPlugin = require('copy-webpack-plugin');     // 用于拷贝文件
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 提取css，提取多个来源时，需要实例化多个，并用extract方法

// 创建多个实例
const extractCSS = new ExtractTextPlugin({
  filename: './css/[name]-css.[hash:7].css', // 直接导入的css文件，提取时添加-css标识
  allChunks: true  // 从所有的chunk中提取，当有CommonsChunkPlugin时，必须为true
});

const webpackProd = { // 生产配置文件
  output: {
    publicPath: config.build.assetsPublicPath,         // 相对于服务器根目录的路径，用于加载资源。
    filename: 'js/[name].[chunkhash:7].bundle.js',     // 构建文件名
    chunkFilename: 'js/[id].[chunkhash:7].js',        // 按需加载的文件名
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader' ])
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
    ]
  },
  plugins: [
    extractCSS,
    // 复制静态资源
    new CopyWebpackPlugin([
      {
        from: config.assetsSubDirectory,
        to: '../dist/static',
        ignore: ['.*']
      }
    ]),
    // 清除构建的dist文件夹
    new CleanWebpackPlugin(),
  ]
};

module.exports = webpackMerge(webpackBase, webpackProd);