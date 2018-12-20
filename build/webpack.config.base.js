const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  // webpack4需要
  // mode: process.env.NODE_ENV || 'production',
  target: 'web',
  // 输入：项目主文件（入口文件）
  entry: path.join(__dirname, '../client/client-entry.js'),
  // 输出
  output: {
    // 输出的文件名
    filename: 'boudle.[hash:8].js',
    // 输出路径
    path: path.join(__dirname, '../public'),
    // 对应webpack.config.client.js里面的historyApiFallback
    publicPath: 'http://127.0.0.1:8000/public/'
  },
  // 配置加载资源
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        // 除去node_modules文件
        exclude: /node_modules/,
        // 预处理
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|gif|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024, // 文件小于1024字节，转换成base64编码，写入文件里面
            name: 'resources/[path][name]-[hash:8].[ext]'
          }
        }]
      }
    ]
  }
}

module.exports = config
