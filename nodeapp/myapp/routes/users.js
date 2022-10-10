var express = require('express');
var router = express.Router();

var api = require('./sql')

// 注册
router.post('/register',function (req, res) {
  let form = req.body
  let data = {message:''}
  if(!form.username){
    data.message += '用户名不能为空！'
  }
  if(!form.password){
    data.message += '密码不能为空！'
    res.send({message:'密码不能为空！'})
  }
  if(!form.phone){
    data.message += '手机号不能为空！'
  }
  if(data.message !== ''){
    res.send(data)
    return
  }

  var addSql = 'INSERT INTO `users`(`username`,`password`,`phone`) VALUES(?,?,?)';
  var addSqlParams = [form.username,form.password,form.phone];
  api([addSql,addSqlParams]).then(result =>{
    res.send({msg:'注册成功',state:200});
  },err =>{
    console.log('[INSERT ERROR] - ', err.message);
    res.end()
    return;
  })
})

// 注册用户名查重
router.get('/checkName',function (req, res) {
  let {name} = req.query

  const sqlStr = `select username from users where username = '${name}'`;
  api([sqlStr]).then(result =>{
    let flag = true
    for(let i = 0; i < result.length; i++){
      if(result[i].username === name){ 
        flag = false
      }
    }
    res.send(flag);
  },err =>{
    console.log('[INSERT ERROR] - ', err.message);
    res.end()
    return;
  })
})

// 登录
router.get('/login',function(req, res){
  let {username, password} = req.query
  let data = {message:''}
  if(!username){
    data.message += '用户名不能为空！'
  }
  if(!password){
    data.message += '密码不能为空！'
    res.send({message:'密码不能为空！'})
  }
  if(data.message !== ''){
    res.send(data)
    return
  }

  let sqlStr = `select username,password from users where username='${username}'`
  api([sqlStr]).then(result =>{
    if(result.length > 0){
      if(password !== result[0].password){
        res.send({state:0,msg:"用户名或密码不正确"});
      }else{
        const setCookies = []
        setCookies.push('name=' + username)
        setCookies.push('pass=' + password)
        //时限设置一天
        const expires =
          ';expires=' +
          new Date(
            parseInt(new Date().getTime()) + 60 * 60 * 24 * 1000
          ).toUTCString()
        //设置可访问域
        const path = ';path=' + '/'
      
        const Cookies = setCookies.map((cur) => {
          return cur + expires + path
        })
        
        res.set({
          'Set-Cookie': Cookies,
        })

        res.send({state:200,msg:"登陆成功"});
      }
    }else{
      res.send({state:0,msg:"用户不存在"})
    }
  },err =>{
    console.log('[INSERT ERROR] - ', err.message);
    res.end()
    return;
  })
})

module.exports = router;
