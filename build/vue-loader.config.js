module.exports = (isDev) => {
  return {
    // 保留元素间的空格
    preserveWhitepace: true,
    // vue文件中的css也一起单独打包，正式环境不需要
    extractCSS: !isDev,
    // 把css变成自己都不认识的东西，比如class的名字，可能比较安全吧
    // 当然在写代码过程中不需要，写完可以设置
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: false // 根据环境变量生成（好像不需要）
  }
}
