<template>
    <div class="login-box">
        <div :class="['change',ifPc? 'toPC' : 'toErWeiMa']"></div>
        <div class="login-switch-tab">
            <span :class="['login-tab-item',ifShow ? 'item-active' : '']" @click="change(true)">密码登录</span>
            <span :class="['login-tab-item',!ifShow ? 'item-active' : '']" @click="change(false)">短信登录</span>
        </div>
        <div class="passInfo" v-show="ifShow">
            <el-input class="fm-field" type="text" v-model="input" placeholder="帐号名/邮箱/手机号">
                <i slot="prefix" class="el-input__icon el-icon-user-my"></i>
            </el-input>
            <el-input class="fm-field" type="password" v-model="input" placeholder="请输入登录密码">
                <i slot="prefix" class="el-input__icon el-icon-pass-my"></i>
            </el-input>
        </div>
        <div class="textInfo" v-show="!ifShow">
            <el-input class="fm-field" type="tel" v-model="input" placeholder="请输入手机号">
                <i slot="prefix" class="el-input__icon el-icon-tel-my"></i>
            </el-input>
            <el-input class="fm-field" type="text" v-model="input" placeholder="请输入验证码">
                <i slot="prefix" class="el-input__icon el-icon-check-my"></i>
            </el-input>
        </div>
        <el-button type="primary">登录</el-button>
        <div class="otherMethods">
            <span class="toWeb">微博登录</span>
            <span class="alipay">支付宝登录</span>
        </div>
        <div class="forget">
            <span v-show="ifShow" class="forgetPassword">忘记密码</span>
            <span v-show="ifShow" class="forgetUsername">忘记帐号名</span>
            <span class="registered">免费注册</span>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                input:'',
                ifPc:true,
                ifShow:true
            }
        },
        created(){
        },
        methods:{
            change(flag){
                this.ifShow = flag
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
    .fm-field{
        margin-bottom: 20px;
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
    .forget span{
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
    .forgetPassword::before{

    }
    .forgetUsername::before{

    }
    .registered::before{

    }
</style>