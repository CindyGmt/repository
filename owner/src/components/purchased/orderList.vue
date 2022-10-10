<template>
    <div class="orderListpage order">
        <div class="tilteBox">
            <ul class="title">
                <li v-for="(item,i) in titleList" :key="i" @click="selectClass(item.type)">{{item.name}}</li>
            </ul>
        </div>
        <div class="form">
            <div class="top">
                <el-input placeholder="输入商品标题或订单号进行搜索" v-model="search.input">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
                <p class="showMore" @click="ifShow = !ifShow">{{'更多'}}筛选条件<i></i></p>
            </div>
            <el-form ref="form" :model="search" label-width="80px" class="bottom" v-show="ifShow">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="订单类型">
                            <el-select v-model="search.type" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="成交时间">
                            <el-date-picker
                                v-model="search.date"
                                type="datetimerange"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="卖家昵称">
                            <el-input v-model="search.userName" placeholder="请输入内容"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="评价状态">
                            <el-select v-model="search.evaluation" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="交易状态">
                            <el-select v-model="search.transaction" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="售后服务">
                            <el-select v-model="search.afterSale" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="orderList"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ifShow:false,
            titleList:[
                {
                    name:'所有订单',
                    type:'all'
                },
                {
                    name:'待付款',
                    type:'toBePaid'
                },
                {
                    name:'待发货',
                    type:'toBeShipped'
                },
                {
                    name:'待收货',
                    type:'toBeReceived'
                },
                {
                    name:'待评价',
                    type:'toBeEvaluated'
                },
                {
                    name:'分阶段',
                    type:'phased'
                },
            ],
            search:{
                input:'',
                type:'',
                date:'',
                userName:'',
                evaluation:'',
                transaction:'',
                afterSale:''
            },
            options:[
                {
                    value:'1',
                    label:'1'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.tilteBox{
    width: 900px;
    height: 40px;
    border-bottom: 2px solid #ccc;
    
    .title{
        list-style: none;
        margin: 0;
        height: 40px;
        line-height: 40px;
        li{
            float: left;
            padding: 0 15px;
        }
    }
}
.form{

    .top{
        .el-input{
            width: 300px;
            float: left;
        }
        .showMore{
            margin: 0;
            margin-left: 10px;
            float: left;
            cursor: pointer;
        }
    }
    
    .bottom{
        clear: both;
        width: 900px;
        /deep/.el-input__inner{
            width: 223px!important;;
        }
    }
}
</style>