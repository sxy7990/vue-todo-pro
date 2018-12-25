# Vue + Webpack 的 todo app

## 项目命令介绍
npm i------安装<br/>
npm run build:client------打包本地<br/>
npm run build:server------打包模拟的服务端渲染<br/>
npm run build------两个同时打包<br/>
npm run clean------清理打包的文件<br/>
npm run dev:client------运行本地<br/>
npm run dev:server------运行模拟的服务端渲染<br/>
npm run dev------两个一起运行<br/>
npm start------启动打包的模拟服务端

本地运行端口：8000<br/>
模拟服务器渲染端口：3333

## 本项目使用到的webpack loader
vue-loader------vue项目必要的，处理.vue文件，处理资源路径，使用预处理等很多功能
https://vue-loader.vuejs.org/zh/

css-loader------处理css文件中的url()，解释(interpret) @import 和 url() ，会 import/require() 后再解析(resolve)它们。
https://www.webpackjs.com/loaders/css-loader/

style-loader------自动将css代码放到生成的style标签中插入到head标签里，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。因此应该把style-loader放在css-loader的前面（webpack loader的执行顺序是从右到左）
https://www.webpackjs.com/loaders/style-loader/

url-loader------解决图片较多，会发很多http请求，会降低页面性能等问题https://www.webpackjs.com/loaders/url-loader/

file-loader------解决图片引入问题
https://www.webpackjs.com/loaders/file-loader/

stylus-loader------将stylus语言转化为原生css

postcss-loader------补全css代码的兼容性前缀
https://www.webpackjs.com/loaders/postcss-loader/

## 本项目使用到的webpack plugin
webpack.DefinePlugin------设定环境变量

html-webpack-plugin------生成一个自动引用你打包后的JS文件的新index.html。这在每次生成的js文件名称不同时非常有用（比如添加了hash值）
https://webpack.docschina.org/plugins/html-webpack-plugin/

webpack-dev-server------提供了开发环境调试工具，它支持代码热更新，能迅速将更改后的代码更新到浏览器中。在这个模式下，构建后的代码在内存中，不会写入硬盘，所以读写速度快了很多。

extract-text-webpack-plugin------抽离css文件，将css文件单独打包，防止将样式打包在js中引起页面样式加载错乱的现象

babel-preset-env------根据当前的运行环境来自动配置源码到当前环境可正常运行的代码的编译转换

babel-core------babel-core是作为babel的核心存在，babel的核心api都在这个模块里面

babel-loader------调用babel-core的API来完成转译过程

## 其他好用的插件
cross-env------运行跨平台设置和使用环境变量的脚本

autoprefixer------自动添加css前缀的功能

concurrently------通过 && 连接起来的命令,会按照顺序执行，一旦有“阻塞”的命令，后面的命令将会无法执行。用concurrently可以并发执行命令。具体写法看package.json文件

memory-fs------将文件写到内存，而不是磁盘，读写更快

sha1------帮助生成请求线上数据库的签名

vue-meta------管理meta头部标签

husky------很方便的在package.json配置git hook脚本，比如git提交前用eslint检查语法，使用方法
"scripts": {
  "precommit": "npm run lint-fix",
}

## 使用eslint需要用到的插件：
eslint<br/>
eslint-config-standard<br/>
eslint-loader<br/>
eslint-plugin-html<br/>
eslint-plugin-import<br/>
eslint-plugin-node<br/>
eslint-plugin-promise<br/>
eslint-plugin-standard

## 支持jsx语法需要用到插件：
babel-preset-env<br/>
babel-plugin-syntax-jsx<br/>
babel-plugin-transform-vue-jsx------vue官方提供的编译jsx<br/>
babel-helper-vue-jsx-merge-props

## 用到的其他技术
nodemon------监视node.js应用程序中的任何更改并自动重启服务，非常适合用在开发环境中

axios------发送http请求

koa------node.js框架

ejs------EJS是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面
https://ejs.bootcss.com/

## koa框架相关：
koa-body------处理post请求、上传文件

koa-router------路由中间件

koa-send------文件上传、下载

koa-session------session管理的中间件

