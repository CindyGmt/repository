<template>
  <div class="login">
    <img class="log" src="../assets/img/loginLog.png">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="50px" class="loginForm">
        <el-form-item label="账号" prop="user">
            <el-input v-model="loginForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
        <el-form-item class="register">
            <router-link to="/register">点击注册</router-link>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '../api/api'
import {mapState, mapMutations} from 'vuex'
export default {
    data(){
        var validateUser = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('不能为空!'));
            }else{
                callback();
            }  
        };
        var validatePass = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('不能为空!'));
            }else{
                callback();
            }  
        };
        return {
            loginForm:{
                user:'',
                pass:''
            },
            rules: {
                user: [
                    { validator: validateUser, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
        }
    },
    computed:{
        ...mapState(['user']),

    },
    created(){
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           let params = {
                username:this.loginForm.user,
                password:this.$utils.encrypt(this.loginForm.pass),
            }
            login(params).then(res => {
                if(res.state === 200){
                  this.$store.commit('setUser',{name: params.username})
                  localStorage.setItem('token',JSON.stringify({name: params.username}))
                  this.$router.push({path:'/home'})
                }else{
                  this.$message(res.msg)
                }
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="less" scoped>
.login{
    width: 100%;
    height: 100%;
    background: url('../assets/img/bg/loginBg.jpg') no-repeat;
    background-size:cover 100%;
    background-position: center;
    position: relative;
    .log{
        width: 240px;
        float: left;
        margin-left: 20px;
        margin-top: 30px;
    }
    .loginForm{
        width: 350px;
        height: 300px;
        border-radius: 3px;
        box-shadow: 0 0 8px 1px #3d6193;
        box-sizing: border-box;
        padding: 30px 20px;
        padding-top: 60px;
        position: absolute;
        top: 50%;
        left: 64%;
        transform: translateY(-50%);
        background: #fff;
        /deep/.el-input__inner:focus{
          border:1px solid #f90;
        }
        .el-button{
            background:#f40;
            border: none;
            border-radius: 0;
            color: #fff;
            font-weight: 500;
        }
        .register{
            margin-bottom: 0;
            text-align: right;
            a{
                color: #666;
                text-decoration-line: none;
            }
        }
    }
}
</style>