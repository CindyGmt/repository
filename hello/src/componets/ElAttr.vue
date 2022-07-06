<template>
    <div class="elAttr">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="页面信息" name="pageInfo">
                 <el-form label-position="right" label-width="65px" :model="page" ref='pageForm' size="mini">
                    <el-form-item label="中文名:" prop="cn_name">
                        <el-input v-model="page.cn_name"></el-input>
                    </el-form-item>
                    <el-form-item label="英文名:" prop="en_name">
                        <el-input v-model="page.en_name"></el-input>
                    </el-form-item>
                    <el-form-item label="一级路由:" prop="route">
                        <el-input v-model="page.route"></el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="组件配置" name="componentConfig">
                <el-form ref="form" :model="btnForm" label-width="50px" v-show="type === 'el-button'" size="mini">
                    <el-form-item label="尺寸:" class="label">
                        <el-radio v-model="btnForm.size" label="medium">中</el-radio>
                        <el-radio v-model="btnForm.size" label="small">小</el-radio>
                        <el-radio v-model="btnForm.size" label="mini">加小</el-radio>
                    </el-form-item>
                    <el-form-item label="类型:">
                        <el-radio v-model="btnForm.type" label="primary">主要</el-radio>
                        <el-radio v-model="btnForm.type" label="success">成功</el-radio>
                        <el-radio v-model="btnForm.type" label="warning">警告</el-radio>
                        <el-radio v-model="btnForm.type" label="danger">危险</el-radio>
                        <el-radio v-model="btnForm.type" label="info">信息</el-radio>
                        <el-radio v-model="btnForm.type" label="text">文本</el-radio>
                    </el-form-item>
                    <el-form-item label="图标:">
                        <el-select v-model="btnForm.icon" placeholder="请选择" :popper-append-to-body='false'>
                            <el-option
                            v-for="item in icons"
                            :key="item"
                            :value="item">
                            <i :class="item"></i>
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

export default {
    data() {
      return {
        activeName:'pageInfo',
        type:'el-button',
        page:{},
        btnForm:{},
        icons:[
            'el-icon-search',
            "el-icon-edit",
            "el-icon-check",
            "el-icon-message",
            "el-icon-star-off",
            "el-icon-delete",
            "el-icon-share",
            "el-icon-upload"
        ]
      }  
    },
    methods:{
        handleClick(tab, event){
            console.log(tab, event)
        }
    }
}
</script>
<style lang="less" scoped>
.elAttr{
    width: 200px;
    background: #eee;
    border-left: 1px solid #ccc;
    /deep/.el-tabs__nav{
        left: 50%;
        transform: translateX(-50%) !important;
    }
    /deep/.el-tabs__content{
        overflow:inherit;
    }
    /deep/.el-form-item--mini .el-form-item__label,/deep/.el-radio__label{
        font-size: 12px;
    }
    .el-radio{
        margin-right: 15px;
        /deep/.el-radio__label{
            padding-left: 5px;
        }
    }
    .el-select--mini{
        width: 100px;
    }
    .el-select-dropdown{
        left: 0px;
    }
    .el-select-dropdown__item{
        display: inline-block;
        font-size: 14px;
        padding: 0px 12px;
    }
}
</style>