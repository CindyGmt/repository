
module.exports = {
  // 选项
  devServer: {
    open: true,
    proxy:{
      '/api':{
        target:'',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}