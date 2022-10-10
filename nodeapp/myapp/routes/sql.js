var mysql = require('mysql2')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '111111',
  database: 'owner'
})

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  })
function api(sql){
  const promise=new Promise((resolve,reject)=>{  //定义一个promise对象将其返回出去
    connection.query(...sql,(err,result)=>{   //con.query查询
      if(err){
        reject(err);
        return
      }
      resolve(result)
    })
  })
  return promise
}
module.exports = api  //暴露方法