<template>
  <div class="registerPage box">
    <div class="title">
      <a href="">
        <img src="../assets/img/tianmaolog.png" alt="" class="titleLog">
      </a>
      <h2 class="titleText">用户注册</h2>
    </div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="aginpassword">
          <el-input v-model="form.aginpassword" type="password"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save('form')" class="btn">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import router from '@/router/router';
import {register, checkName, login} from '../api/api'
export default {
  data(){
    let aginpassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
    let checkUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          checkName({name:value}).then(res => {
            if(res){ 
              callback();
            }else{
              callback(new Error('用户名重复'));
            }
          })
        }
      }
    return {
      loading: false,
      form:{
        username:'',
        password:'',
        aginpassword:'',
        phone:''
      },
      rules: {
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: checkUserName, trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        aginpassword:[
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: aginpassword, trigger: 'blur' }
        ],
        phone:[
          { required: true, message: '请输入手机号', trigger: 'blur' },
        ]
        }
    }
  },
  created(){

  },
  methods:{
    save(el){
      this.$refs[el].validate((valid) => {
        if (valid) {
          this.form.password = this.$utils.encrypt(this.form.password)
          register(this.form).then(res => {
            if(res.state === 200){
              let {username, password} = this.form
              login({username, password}).then(res =>{
                if(res.state === 200){
                  this.$store.commit('setUser',{name: username})
                  localStorage.setItem('token',JSON.stringify({name: username}))
                  this.$router.push({path:'/home'})
                }else{
                  this.$message('登录失败')
                }

              })
            }else{
              this.$message('注册失败')
            }
          })
          console.log(this.form)
        } else {
          this.$message({
            message:'请正确填写',
          })
          return false;
        }
      });
    },
    submit(el){

    },
    cancle(el){
      this.$refs[el].resetFields();
    }
  }

}
</script>

<style lang="less" scoped>
.box{
    width: 900px;
    margin: 0 auto;
    .title{
      float: left;
      margin-top: 20px;
      .titleLog{
        height: 60px;
      }
      .titleText{
        height: 60px;
        margin: 0;
        display: inline-block;
        font-weight: 400;
        line-height: 60px;
        vertical-align: bottom;
        margin-left: 20px;
      }
    }
    .form{
      padding: 15px;
      clear: both;
      width: 500px;
      margin: auto;
      .el-form{
        margin-top: 120px;
        .el-form-item__label{
          color:#111;
        }
        /deep/.el-input__inner:focus{
          border:1px solid #f90;
        }
        .btn{
          width: 100%;
          border-radius: 2px;
          border: none;
          background-image: linear-gradient(90deg,#f90,#ff5000);
        }
      }
    }
}
</style>