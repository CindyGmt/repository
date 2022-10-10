<template>
    <div class="seachPage">
        <img src="../assets/img/tianmaolog.png" alt="" class="logo">
        <el-input placeholder="请输入内容" v-model="inputData" class="inputData">
            <el-button slot="append">搜索</el-button>
        </el-input>
    </div>
</template>
<script>
export default {
    data(){
        return {
            inputData:''
        }
    }
}
</script>
<style lang="less" scoped>
.seachPage{
    position: relative;
}
.logo{
    width: 87px;
    height: 53px;
    position: absolute;
    left: 80px;
    top: 50%;
    transform: translateY(-50%);
}
.inputData{
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 632px;
    border-radius: 21px;
    overflow: hidden;
    border: 1px solid #FF0036;
    /deep/.el-input__inner{
        font-size: 12px;
        height: 42px;
        line-height: 42px;
        border: none;
    }
    /deep/.el-input-group__append{
        border-left:1px solid #FF0036;
        border-radius:21px;
        background: #FF0036;
        color: #fff;
    }
}
</style>