const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    port: 8081,
    proxy:{
      '/api': {
        target: 'https://43.129.231.24:8081/',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      },
      '/node':{
        target: 'http://localhost:3000/',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/node':''
        }
      }
    }
  }
})
