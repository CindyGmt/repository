<template>
    <div class="login-box">
        <div :class="['change',ifPc? 'toErWeiMa' : 'toPC']" @click="changePage"></div>
        <div v-show='ifPc'>
            <div class="login-switch-tab">
                <span :class="['login-tab-item',ifShow ? 'item-active' : '']" @click="change(true)">密码登录</span>
                <span :class="['login-tab-item',!ifShow ? 'item-active' : '']" @click="change(false)">短信登录</span>
            </div>
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" :show-message='true'>
                <div class="passInfo" v-show="ifShow">
                    <el-form-item prop="user">
                        <el-input class="fm-field" type="text" v-model="loginForm.user" placeholder="帐号名/邮箱/手机号">
                            <i slot="prefix" class="el-input__icon el-icon-user-my"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="passWord">
                        <el-input class="fm-field" type="password" v-model="loginForm.passWord" placeholder="请输入登录密码">
                            <i slot="prefix" class="el-input__icon el-icon-pass-my"></i>
                        </el-input>
                    </el-form-item>
                </div>
                <div class="textInfo" v-show="!ifShow">
                    <el-form-item prop="telphone">
                        <el-input class="fm-field" type="tel" v-model="loginForm.telphone" placeholder="请输入手机号">
                            <i slot="prefix" class="el-input__icon el-icon-tel-my"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="verificationCode">
                        <el-input class="fm-field" type="text" v-model="loginForm.verificationCode" placeholder="请输入验证码">
                            <i slot="prefix" class="el-input__icon el-icon-check-my"></i>
                            <i slot="suffix" class="el-input__icon el-icon-check-send" @click="getVerificationCode">获取验证码</i>
                        </el-input>
                    </el-form-item>
                </div>
                <el-form-item class="btn">
                    <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                </el-form-item>
            </el-form>
            <div class="otherMethods">
                <span class="toWeb">微博登录</span>
                <span class="alipay">支付宝登录</span>
            </div>
            <div class="forget">
                <span v-show="ifShow">忘记密码</span>
                <span v-show="ifShow">忘记帐号名</span>
                <span>免费注册</span>
            </div>
        </div>
        <div v-show='!ifPc'>
             <div class="login-switch-tab">
                <span class='login-tab-item'>手机扫码，安全登录</span>
            </div>
            <div class="qrcode-img"></div>
            <div class="other">
                <span @click="changePage">密码登录</span>
                <span>免费注册</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {login} from '../request/api'
    export default{
        data(){
            let validateUser = (rule, value, callback) => {
                if (!value && this.ifShow) {
                    return callback(new Error('请输入账号名'));
                }else{
                    callback();
                }
            };
            let validatePassWord = (rule, value, callback) => {
                if (!value && this.ifShow) {
                    return callback(new Error('请输入密码'));
                }else{
                    callback();
                }
            };
            let checkTelphone = (rule, value, callback) => {
                if (!value && !this.ifShow) {
                    return callback(new Error('请输入手机号'));
                }else{
                    callback();
                }
            };
            let checkCode = (rule, value, callback) => {
                if (!value && !this.ifShow) {
                    return callback(new Error('请输入验证码'));
                }else{
                    callback();
                }
            };
            return {
                loginForm:{
                    user:'',
                    passWord:'',
                    telphone:'',
                    verificationCode:''
                },
                rules: {
                    user: [
                        { validator: validateUser, trigger: 'blur' }
                    ],
                    passWord: [
                        { validator: validatePassWord, trigger: 'blur' }
                    ],
                    telphone: [
                        { validator: checkTelphone, trigger: 'blur' }
                    ],
                    verificationCode: [
                        { validator: checkCode, trigger: 'blur' }
                    ]
                },
                ifPc:true,
                ifShow:true
            }
        },
        created(){
        },
        methods:{
            change(flag){
                this.ifShow = flag
            },
            changePage(){
                this.ifPc = !this.ifPc
                this.ifShow = true
            },
            getVerificationCode(){

            },
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let params
                        if(this.ifShow){
                            params = {
                                user:this.loginForm.user,
                                passWord:this.loginForm.passWord,
                            }
                        }else{
                            params = {
                                telphone:this.loginForm.telphone,
                                verificationCode:this.loginForm.verificationCode,
                            }
                        }
                        login(params).then(res => {
                            console.log(res)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .login-box{
        box-sizing: border-box;
        width: 350px;
        min-height: 350px;
        padding: 25px 25px 23px;
        color: #6c6c6c;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .change::before{
        content:'';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        right: 0;
        top: 0;
        border-left: 50px solid #fff;
        border-top: 50px solid transparent;
    }
    .change{
        width: 50px;
        height: 50px;
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
    }
    .toPC{
        background: url("../assets/pc.png") center no-repeat;
        background-size:cover;
    }
    .toErWeiMa{
        background: url("../assets/ErWeiMa.png") center no-repeat;
        background-size:cover;
    }
    .login-switch-tab{
        text-align: left;
        margin-bottom: 20px;
        margin-top: 4px;
    }
    .login-tab-item{
        font-size: 16px;
        color: #3c3c3c;
        font-weight: 700;
        margin-right: 10px;
        cursor: pointer;
        line-height: 25px;
        display: inline-block;
    }
    .item-active{
        border-bottom: 2px solid #3c3c3c;
    }
    .el-form-item{
        margin-bottom: 20px;
    }
    .btn{
        margin: 0;
    }
    .fm-field /deep/.el-input__inner{
        padding-left: 50px;
        border-radius:0;
        height: 42px;
        line-height: 42px;
        font-size: 14px;
    }
    /deep/.el-input__prefix{
        left: 1px;
        top: 1px;
    }
    .el-input__icon{
        width: 40px;
        height: 40px;
    }
    .el-icon-user-my{
        background: url("../assets/user.png") center no-repeat;
        background-color: #ccc;
    }
    .el-icon-pass-my{
        background: url("../assets/passWord.png") center no-repeat;
        background-color: #ccc;
    }
    .el-icon-tel-my{
        background: url("../assets/tel.png") center no-repeat;
        background-color: #ccc;
    }
    .el-icon-check-my{
        background: url("../assets/checkCode.png") center no-repeat;
        background-color: #ccc;
    }
    .el-icon-check-send{
        white-space: nowrap;
        font-size: 12px;
        cursor: pointer;
        width: auto;
        padding: 0 10px;
    }
    .el-button{
        width: 100%;
        height: 42px;
        line-height: 42px;
        padding: 0;
        font-size: 16px;
    }
    .otherMethods,.forget{
        margin-top: 16px;
        font-size: 12px;
        color: #6c6c6c;
        height: 24px;
        line-height: 24px;
        float: left;
        clear: both;
    }
    .forget{
        float: right;
    }
    .otherMethods span{
        margin-left: 22px;
        position:relative;
    }
    .forget span, .other span{
        margin-left: 10px;
        position:relative;
    }
    .toWeb::before,.alipay::before{
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background: url("../assets/web.png") center no-repeat;
        background-size: 85%;
        position: absolute;
        top: -2.5px;
        left: -22px;
    }
    .alipay::before{
        background: url("../assets/alipay.png") center no-repeat;
        background-size: cover;

    }
    .qrcode-img{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        width: 150px;
        height: 150px;
        box-shadow: 0px 0px 3px 3px #eee;
    }
    .other{
        position: absolute;
        bottom: 32.5px;
        right: 25px;
        font-size: 12px;
        color: #6c6c6c;
    }
</style>