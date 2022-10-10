var express = require('express');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
var path = require('path')
var connection = require('./sql')

/* GET home page. */
//查询文件的路由
router.get('/getFiles', function(req, res, next) {
  //读取 static 目录下的文件
  fs.readdir('./static', function(err, files){
    if(err){
      res.render('index', {
        list: [],
        msg: '暂无文件'
      })
      return
    }
    res.send(files)
  })
});

//删除文件的路由
router.get('/delFile', function(req,res){
  //接收文件名的参数
  let {file} = req.query
  //删除 static 目录下的该文件
  fs.unlink(`./static/${file}`, function(err){
    if(err){
      res.send('删除失败')
      return
    }
    res.send('删除成功')
  })
});

//文件上传的路由
router.post('/uploadFile', multer({ dest: './static/' }).any(), function(req,res){
  let file = req.files[0]
  //拼装文件名称
  let filename = 'static/'+ file.originalname
  //为上传成功的文件重命名（上传的文件默认不是文件的原名称）
  fs.rename(file.path, filename, function(err){
    if(err){
      res.send('上传失败')
      return
    }
    res.send('上传成功')
  })
});

//文件下载的路由
router.get('/downFile', function(req,res){
  //接收文件名称
  let {fn} = req.query
  //如果参数中有中文，需要解码
  fn = decodeURI(fn)
  //判断该文件是否存在
  fs.access(`./static/${fn}`, function(err){
    if(!err){
      res.set({
        //告诉浏览器这是一个二进制文件
        "Content-Type": "application/octet-stream",
        //告诉浏览器这是一个需要下载的文件，使用encodeURI方法，是为了避免中文名称下载时出问题
        "Content-Disposition": `attachment;filename=${encodeURI(fn)}`
      })
      //使用流读取文件，并响应给客户端
      fs.createReadStream(`./static/${fn}`).pipe(res)
    }
  })
  
});

module.exports = router;
