##从零构建webpack4.x多页面应用

初始化package.json
npm init

安装依赖
`在安装一个要打包到生产环境的安装包时，你应该使用 npm install --save，如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），你应该使用 npm install --save-dev。`

npm install --save-dev webpack-dev-server 
npm install --save-dev webpack@4 
npm install --save-dev webpack-cli 

npm install --save-dev webpack-merge --save-dev url-loader
npm install --save-dev html-webpack-plugin 
npm install --save-dev babel-loader babel-core
npm install --save-dev style-loader css-loader

`它会将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。`
<!-- npm install --save-dev extract-text-webpack-plugin 不支持webpack4.0以上版本--> 
npm install –save-dev extract-text-webpack-plugin@next
`复制单个文件或整个目录建立目录。`
npm install --save-dev copy-webpack-plugin
