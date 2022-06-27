
module.exports = {
  // 选项
  devServer: {
    open: true,
    proxy:{
      '/api':{
        target:'http://43.129.231.24:8081/',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}