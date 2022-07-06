<template>
    <div class="asidePage">
        <el-button class="creat" icon="el-icon-plus" size="mini" @click="creatPage">创建页面</el-button>
        <ul class="componentList">
            <li v-for='item in componentList' :key="item.name" @click='creatEl(item.name)'><i :class="[item.icon,'item-icon']"></i></li>
        </ul>
        <el-dialog
            title="新页面信息"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
            custom-class='infoDialog'>
            <el-form label-position="right" label-width="80px" :model="page" ref='pageForm' :rules="rules">
                <el-form-item label="中文名" prop="cn_name">
                    <el-input v-model="page.cn_name"></el-input>
                </el-form-item>
                <el-form-item label="英文名" prop="en_name">
                    <el-input v-model="page.en_name"></el-input>
                </el-form-item>
                <el-form-item label="一级路由" prop="route">
                    <el-input v-model="page.route"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="cancel">取 消</el-button>
                    <el-button type="primary" @click="sure">确 定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible:false,
            componentList:[
                {name:'el-button',icon:'el-icon-btn-my'},
                {name:'el-radio',icon:'el-icon-radio-my'},
                {name:'el-checkbox',icon:'el-icon-checkbox-my'},
                {name:'el-input',icon:'el-icon-input-my'},
            ],
            page:{},
            rules:{
                cn_name:[
                { required: true, message: '请输入中文名', trigger: 'blur' }
                ],
                en_name:[
                { required: true, message: '请输入英文名', trigger: 'blur' }
                ],
                route:[
                { required: true, message: '请输入路由', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        creatPage(){
            if(this.$route.path === '/home/newPage'){
                this.$message({
                    message:'新页面已创建，请添加布局',
                    duration:1500,
                    showClose:true
                })
                return
            }
            this.dialogVisible = true
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(() => {
                this.page = {}
                done();
            })
            .catch(() => {});
        },
        cancel(){
            this.page = {}
            this.dialogVisible = false
        },
        sure(){
            this.$refs.pageForm.validate((valid) => {
                if (valid) {
                    this.dialogVisible = false
                    this.$store.commit('setSinglePage',this.page)
                    this.$router.push('/home/newPage')
                }else{
                    this.$message({
                        message:'请完整填写信息',
                        duration:1500,
                        showClose:true
                    })
                    return false;
                }
            })
        },
        creatEl(el){
            this.$store.commit('pushEl',el)
        }
    }
}
</script>

<style scoped lang='less'>
.asidePage{
    height: 100%;
    position: relative;
    padding-top: 50px;
    box-sizing: border-box;
    .creat{
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        padding: 7px;
    }
    .componentList{
        box-sizing: border-box;
        list-style: none;
        margin: 0;
        max-height: 650px;
        overflow-y: auto;
        padding: 10px 0;
        li{
            line-height: 40px;
            cursor: pointer;
            margin-bottom: 15px;
            .item-icon{
                display: inline-block;
                width: 32px;
                height: 32px;
            }
            .el-icon-btn-my{
                background: url('../assets/image/btn.png') center no-repeat;
            }
            .el-icon-radio-my{
                background: url('../assets/image/radio.png') center no-repeat;
            }
            .el-icon-checkbox-my{
                background: url('../assets/image/checkbox.png') center no-repeat;
            }
            .el-icon-input-my{
                background: url('../assets/image/input.png') center no-repeat;
            }
        }
    }
    /deep/.infoDialog{
        line-height: 20px;
        .el-dialog__title{
            font-size: 16px;
        }
        .el-dialog__body{
            padding-top: 10px;
        }
    }
}
</style>