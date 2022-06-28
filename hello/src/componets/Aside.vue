<template>
    <div class="asidePage">
        <el-button class="creat" icon="el-icon-plus" size="mini" @click="creatPage">创建页面</el-button>
        <ul class="componentList">
            <li v-for='item in componentList' :key="item.name"><i :class="[item.icon,'item-icon']"></i></li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            componentList:[
                {name:'el-button',icon:'el-icon-btn-my'},
                {name:'el-radio',icon:'el-icon-radio-my'},
                {name:'el-checkbox',icon:'el-icon-checkbox-my'},
                {name:'el-input',icon:'el-icon-input-my'},
            ]
        }
    },
    methods:{
        creatPage(){
            this.$router.push('/home/newPage')
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
    
}
</style>