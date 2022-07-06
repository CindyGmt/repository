<template>
    <div class="registrationPage">
        <el-form label-position="right" label-width="80px" :rules="rules" :model="registrationForm" ref='registrationForm'>
            <el-form-item label="账号名" prop="account">
                <el-input v-model="registrationForm.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="registrationForm.password"></el-input>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="submitForm('registrationForm')">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {registration} from '../request/api'
export default {
    data() {
        return {
            registrationForm:{},
            rules:{
               account: [
                { required: true, message: '请输入账号名', trigger: 'blur' }
                ],
               password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
                ]  
            }
        } 
    },
    methods:{
        submitForm(el){
            this.$refs[el].validate((valid) => {
                    if (valid) {
                        let date = this.$utils.getDate()
                        let params = {
                            account: this.registrationForm.account,
                            createtime:date,
                            creator:"yejinliang",
                            id:3,
                            lastupdatot:"yejinliang",
                            password: this.registrationForm.password,
                            roleid:"",
                            status:"3",
                            updatetime:date,
                            usercode:"03",
                            username:this.registrationForm.account
                        }
                        registration(params).then(res => {
                            console.log(res)
                        })
                    } else {
                        this.$message({
                            message:'请完整填写信息',
                            duration:1500,
                            showClose:true
                        })
                        return false;
                    }
                });
        }
    }
}
</script>
<style lang="less" scoped>
.registrationPage{
    position: relative;
    .el-form{
        width: 350px;
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-45%);
    }
}
</style>
