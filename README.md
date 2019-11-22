## 从零构建webpack4.x多页面应用
主要实现一个基于webpack4的多页开发项目框架

### v1.0.0
完成基础框架搭建
* html文件按模块分类，放入不同文件夹下
* html、css、js中引入图片
* 引入css文件
* css3前缀
* es6语法兼容
* html页面之间跳转
* 启动时指定页面
* 引入第三方库jquery
* 打包优化optimization：抽离第三方插件jquery，抽离自己写的公共代码
* 打包压缩css文件
* 发送ajax请求静态文件夹下的json文件

### 目录结构
```
|-- README.md
|-- build
|   |-- config.js
|   |-- webpack.config.base.js
|   |-- webpack.config.dev.js
|   |-- webpack.config.js
|   `-- webpack.config.prod.js
|-- package.json
|-- postcss.config.js
|-- src
|   |-- common
|   |   `-- util.js
|   |-- css
|   |   |-- common.css
|   |   |-- index.css
|   |   |-- index1.css
|   |   `-- list
|   |-- images
|   |   |-- a
|   |   |-- b
|   |   `-- index1.jpeg
|   |-- js
|   |   |-- index.js
|   |   |-- index1.js
|   |   `-- list
|   |-- page
|   |   |-- index.html
|   |   |-- index1.html
|   |   `-- list
|   `-- static
|       |-- images
|       `-- json
```

## 安装依赖

npm i

## 项目启动

npm run dev

## 项目打包

npm run build



从零安装依赖过程记录
初始化package.json
npm init

`在安装一个要打包到生产环境的安装包时，你应该使用 npm install --save，如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），你应该使用 npm install --save-dev。`

npm install --save-dev webpack-dev-server 
npm install --save-dev webpack@4 
npm install --save-dev webpack-cli 

npm install --save-dev webpack-merge url-loader
npm install --save-dev html-webpack-plugin 

npm install --save-dev style-loader css-loader url-loader file-loader
npm install --save-dev clean-webpack-plugin

`翻译 js 文件及es6语法、处理兼容等`
npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime

`它会将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件，以link的方式去引入css`
<!-- npm install --save-dev extract-text-webpack-plugin 不支持webpack4.0以上版本--> 
npm install –save-dev extract-text-webpack-plugin@next

`复制单个文件或整个目录建立目录。`
npm install --save-dev copy-webpack-plugin

`打包html中的图片, 处理html中引入的图片路径问题`
npm install --save-dev html-loader

`css前缀`
npm install --save-dev postcss-loader autoprefixer

`压缩js、css 默认清空js压缩、css没压缩`
npm i uglifyjs-webpack-plugin optimize-css-assets-webpack-plugin -D
