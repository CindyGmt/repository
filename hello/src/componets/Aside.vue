<template>
    <div class="asidePage">
        <el-button class="creat" icon="el-icon-plus" size="mini" @click="creatPage">创建页面</el-button>
        <!-- <ul class="componentList">
            <li v-for='item in componentList' :key="item.name" @click='creatEl(item.name)'><i :class="[item.icon,'item-icon']"></i></li>
        </ul> -->
        <el-tree :data="componentList">
            <span class="custom-tree-node" slot-scope="{ data:item }">
                <i :class="[item.icon,'item-icon']" v-if='!item.hideIcon'></i>
                <span >{{ item.label }}</span>
            </span>
        </el-tree>
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
                <el-form-item label="页面名" prop="en_name">
                    <el-input v-model="page.page_name"></el-input>
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
                {
                    label:'元素',
                    hideIcon:1,
                    children:[
                        {label:'按钮',name:'el-button',icon:'el-icon-btn-my'},
                        {label:'单选',name:'el-radio',icon:'el-icon-radio-my'},
                        {label:'复选',name:'el-checkbox',icon:'el-icon-checkbox-my'},
                        {label:'输入',name:'el-input',icon:'el-icon-input-my'},
                    ]
                },
                {
                   label:'组件',
                    hideIcon:1,
                    children:[
                    ] 
                },
                {
                    label:'页面',
                    hideIcon:1,
                    children:[
                    ] 
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            page:{},
            rules:{
                cn_name:[
                    { required: true, message: '请输入中文名', trigger: 'blur' }
                ],
                en_name:[
                    { required: true, message: '请输入英文名', trigger: 'blur' }
                ],
                page_name:[
                    { required: true, message: '请输入页面名', trigger: 'blur' }
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
            this.$store.commit('pushEl',{el})
        },
        handleNodeClick(data) {
            debugger
            console.log(data);
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
    .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        padding-right: 8px;
    }
    .item-icon{
        display: inline-block;
        width: 25px;
        height: 15px;
    }
    .el-icon-btn-my{
                background: url('../assets/image/btn.png') center no-repeat;
                background-size: contain;
            }
            .el-icon-radio-my{
                background: url('../assets/image/radio.png') center no-repeat;
                background-size: contain;
            }
            .el-icon-checkbox-my{
                background: url('../assets/image/checkbox.png') center no-repeat;
                background-size: contain;
            }
            .el-icon-input-my{
                background: url('../assets/image/input.png') center no-repeat;
                background-size: contain;
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