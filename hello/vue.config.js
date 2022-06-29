
module.exports = {
  publicPath:process.env.BASE_URL,
  assetsDir:'assets',
  // 选项
  devServer: {
    open: true,
    proxy:{
      '/api':{
        target:'https://43.129.231.24:8081/',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}