'use strict'
// 基础配置文件，包含了不同环境通用配置
const path = require('path');
const fs = require('fs');
const config = require('./config.js');
const HTMLWebpackPlugin = require('html-webpack-plugin');  // html-webpack-plugin  用于生成html

function resolve(dir) {
  // return path.join(process.cwd(), dir)  // process.cwd()返回当前工作目录
  return path.join(__dirname, dir)  // __dirname返回源代码所在的目录
}

// 获取所有html文件名的集合，用于生成入口
const getFileNameList = (path) => {
  let fileList = [];
  let dirList = fs.readdirSync(path);
  dirList.forEach(item => {
    if (item.indexOf('html') > -1) {
      fileList.push(item.split('.')[0]);
    }
  });
  return fileList;
};
let htmlDirs = getFileNameList(config.htmlPath); // 所有html文件名的集合

// 根据每个html文件来生成HTMLWebpackPlugin实例 和 入口列表
let HTMLPlugins = [];  // 保存HTMLWebpackPlugin实例
let Entries = {};      // 保存入口列表

htmlDirs.forEach((page) => { // 生成HTMLWebpackPlugin实例和入口列表
  let htmlConfig = {
    filename: `page/${page}.html`,                                 // 生成的html文件名
    template: path.join(config.htmlPath, `./${page}.html`)    // 原文件位置
  };

  let found = config.ignoreJs.findIndex((val) => { return val === page; });  // 筛选没有入口js的名

  if (found === -1) {         // 有入口js文件的html，添加本页的入口js和公用js，并将入口js写入Entries中
    htmlConfig.chunks = [page, 'default','vendors'];                               // html文件绑定入口JS和公用JS
    Entries[page] = config.jsPath + `${page}.js`;                        // 每个HTML文件添加一个入口，除非设置不用
  } else {                    // 没有入口js文件，chunk为空
    htmlConfig.chunks = [];
  }
  HTMLPlugins.push(new HTMLWebpackPlugin(htmlConfig));
});

module.exports = {
  context: config.projectPath,     // 入口、插件路径会基于context查找
  entry: {
    'index': resolve('../src/js/index.js'),   //index页面入口
    'index1': resolve('../src/js/index1.js'),   //index页面入口
  },
  // entry: Entries,
  resolve: {
    extensions: [".js", ".css", ".json"],  // 自动补全的扩展名
    alias: {
      "@": resolve('../src'),
    }
  },
  // 模块解析相关规则
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [config.srcPath],        // 在源文件目录查询
        exclude: [config.assetsSubDirectory],
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        include: [config.srcPath],               // 在源文件目录查询
        // exclude: [config.assetsSubDirectory],    // 忽略第三方的任何代码
        use: [{ // 图片文件小于8k时编译成dataUrl直接嵌入页面，超过8k回退使用file-loader
          loader: 'url-loader',
          options: {
            limit: 8192, // 8k
            name: 'images/[name].[hash:7].[ext]', // 回退使用file-loader时的名称
            publicPath: '/',  // 解决开发环境css文件引入图片路径问题
            // publicPath: './../',  // 解决开发环境css文件引入图片路径问题
            // outputPath: 'images/', // 生产环境
            fallback: 'file-loader',  // 当超过8192byte时，会回退使用file-loader
          }
        }]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'media/[name].[hash:7].[ext]',
          fallback: 'file-loader',
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        include: [config.srcPath],        // 在源文件目录查询
        exclude: [config.assetsSubDirectory],    // 忽略第三方的任何代码
        use: [{ // 导入字体文件，并最打包到output.path+ options.name对应的路径中
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'fonts/[name].[hash:7].[ext]',
            fallback: 'file-loader',
          }
        }]
      }
    ]
  },
  plugins: [                       // 生成HTML文件
    //配置html模板，因为是多页面，所以需配置多个模板
    new HTMLWebpackPlugin({
      title:'测试1',//html标题
      filename:'./page/index.html',//文件目录名
      // template:'../src/page/index.html',//原文件模板目录
      template:resolve('../src/page/index.html'),//原文件模板目录
      hash:true,//是否添加hash值
      chunks:['index'],//模板需要引用的js块，vendors是定义的公共块，index是引用的自己编写的块
    }),
    new HTMLWebpackPlugin({
      title:'测试2',//html标题
      filename:'./page/index1.html',//文件目录名
      template:resolve('../src/page/index1.html'),//原文件模板目录
      hash:true,//是否添加hash值
      chunks:['index1'],//模板需要引用的js块，vendors是定义的公共块，index是引用的自己编写的块
    }),

    // ...HTMLPlugins,                // 扩展运算符生成所有HTMLPlugins
  ]
}