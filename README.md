##从零构建webpack4.x多页面应用

## v1.0.0

初始化package.json
npm init

安装依赖
`在安装一个要打包到生产环境的安装包时，你应该使用 npm install --save，如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），你应该使用 npm install --save-dev。`

npm install --save-dev webpack-dev-server 
npm install --save-dev webpack@4 
npm install --save-dev webpack-cli 

npm install --save-dev webpack-merge url-loader
npm install --save-dev html-webpack-plugin 

npm install --save-dev style-loader css-loader url-loader file-loader
npm install --save-dev clean-webpack-plugin

`翻译 js 文件及包括es6->es5、处理兼容等`
npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
新建.babelrc文件

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
