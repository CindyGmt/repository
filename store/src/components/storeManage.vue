<template>
    <div class="storeManagePage">
        <div class="usual">
            <h3>常用功能</h3>
            <div class="list">
                <div class="item" v-for="(item,i) in list1" :key="i" @click="clickOne(item)">
                    <i :class="item.icon"></i>
                    <span>{{item.text}}</span>
                </div>
            </div>
        </div>
        <div class="count">
            <div class="list">
                <div class="item" v-for="(item,i) in list2" :key="i">
                    <span>{{item.count}}</span>
                    <p>
                        {{item.type}}
                        <el-tooltip :content="item.illustrate" placement="right" v-if="item.illustrate">
                            <i class="el-icon-question"></i>
                        </el-tooltip>

                    </p>
                </div>
            </div>
        </div>
        <div class="overview">
            <div class="head">
                <h3>经营概况</h3>
                <el-button type="primary">导出</el-button>
            </div>
            <div class="contan">
                <div class="select">
                    <span :class='{"is-active": range === "today"}' @click="changeRange('today')">今日</span>
                    <span :class='{"is-active": range === "yesterday"}' @click="changeRange('yesterday')">昨日</span>
                    <span :class='{"is-active": range === "seven"}' @click="changeRange('seven')">7日</span>
                    <span :class='{"is-active": range === "total"}' @click="changeRange('total')">汇总</span>
                    <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                <div class="box">
                    <div v-for="(child,j) in data" :key="j">
                        <h5 :style="{backgroundColor:child.bg }">{{child.title}}</h5>
                        <div class="boxContant" :style="{backgroundColor:child.bg+'4d' }">
                            <div v-for="(item,i) in child.data" :key="i">
                                <p>
                                    {{item.text1}}
                                    <el-tooltip :content="item.illustrate" placement="right" v-if="item.illustrate">
                                        <i class="el-icon-question"></i>
                                    </el-tooltip>
                                </p>
                                <span>{{item.count}}</span>
                                <p class="gray">
                                    较昨日
                                    <i :class="['el-icon-back',item.mark]" v-if="item.mark"></i>
                                    <i v-else>-</i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list1: [{
                        icon: 'el-icon-menu',
                        text: '添加商品'
                    },
                    {
                        icon: 'el-icon-menu',
                        text: '店铺装修'
                    },
                    {
                        icon: 'el-icon-menu',
                        text: '订单管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        text: '插件中心'
                    },
                    {
                        icon: 'el-icon-menu',
                        text: '优惠券'
                    },
                ],
                list2: [{
                        type: '待发货订单（笔）',
                        count: '35',
                        illustrate: ''
                    },
                    {
                        type: '售后订单（笔）',
                        count: '0',
                        illustrate: ''
                    },
                    {
                        type: '待付款订单（笔）',
                        count: '0',
                        illustrate: ''
                    },
                    {
                        type: '总用户人数（人）',
                        count: '15',
                        illustrate: 'xxxxxx'
                    },
                    {
                        type: '商品数（款）',
                        count: '9',
                        illustrate: 'xxxxxxx'
                    }
                ],
                value6: '',
                range: 'today',
                data: [{
                        title: '支付数据',
                        bg: '#409dfe',
                        data: [{
                                text1: '支付订单数（笔）',
                                illustrate: 'xxxxx',
                                mark: 'low',
                                count: '3'
                            },
                            {
                                text1: '支付人数（人）',
                                illustrate: 'xxxxx',
                                mark: 'low',
                                count: '2'
                            },
                            {
                                text1: '支付金额（元）',
                                illustrate: 'xxxxx',
                                mark: 'low',
                                count: '0.03'
                            },
                            {
                                text1: '支付商品数（件）',
                                illustrate: 'xxxxx',
                                mark: 'top',
                                count: '3'
                            },
                        ]
                    },
                    {
                        title: '浏览数据',
                        bg: '#6ad396',
                        data: [{
                                text1: '访客数（人）',
                                illustrate: '',
                                mark: 'low',
                                count: '3'
                            },
                            {
                                text1: '访问量（次）',
                                illustrate: '',
                                mark: 'low',
                                count: '152'
                            }
                        ]
                    },
                    {
                        title: '收益数据',
                        bg: '#fb9e4c',
                        data: [{
                                text1: '余额收益（元）',
                                illustrate: 'xxxx',
                                mark: '',
                                count: '0'
                            },
                            {
                                text1: '微信收益（元）',
                                illustrate: 'xxxxx',
                                mark: '',
                                count: '0'
                            },
                            {
                                text1: '支付宝收益（元）',
                                illustrate: 'xxx',
                                mark: '',
                                count: '0'
                            },
                            {
                                text1: '货到付款收益（元）',
                                illustrate: 'xxx',
                                mark: '',
                                count: '0'
                            },
                        ]
                    }
                ]

            }
        },
        methods: {
            clickOne(data) {
                alert(data.text)
            },
            changeRange(data) {
                this.range = data
            }
        }
    }
</script>
<style scoped>
    .storeManagePage {
        background: #eee;
        min-height: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .usual,
    .count,
    .overview {
        border-radius: 5px;
        background: #fff;
        margin-top: 10px;
    }

    .usual h3,
    .head h3 {
        font-size: 16px;
        font-weight: 400;
        margin: 0;
        text-align: left;
        padding-left: 10px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #eee;
    }

    .list {
        display: flex;
    }

    .list .item {
        height: 100px;
        flex: 1;
        margin: 5px 10px;
        cursor: pointer;
    }

    .item span {
        line-height: 100px;
        font-size: 15px;
    }

    .item i {
        background: #409eff;
        padding: 6px;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        margin-right: 8px;
    }

    .count .item {
        display: flex;
        margin: 50px 0;
        justify-content: center;
        flex-direction: column;
        border-right: 1px dashed #ccc;
        height: auto;
    }

    .count .item:last-of-type {
        border-right: 0;
    }

    .count span {
        line-height: unset;
        color: #409eff;
        font-size: 30px;
    }

    .count p {
        margin: 0;
        color: #aaa;
    }

    .item .el-icon-question {
        padding: 0;
        background: #fff;
        color: #bbb;
    }

    .overview .head {
        height: 50px;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .head .el-button {
        height: 35px;
        line-height: 35px;
        padding-top: 0;
        margin-right: 20px
    }

    .select {
        padding: 25px 10px;
        overflow: hidden;
    }

    .select>span {
        padding: 10px 18px;
        border: 1px solid #ccc;
        border-right: none;
        font-size: 14px;
        background: #eaedf4;
        float: left;
        cursor: pointer;
    }

    .select>span:last-of-type {
        border-right: 1px solid #ccc;
        border-radius: 0 5px 5px 0;
        margin-right: 30px;
    }

    .select>span:first-of-type {
        border-radius: 5px 0 0 5px;
    }

    .select>.is-active {
        border-color: #409eff;
        background: #409eff;
        color: #fff;
    }

    .el-date-editor {
        float: left;
    }

    .el-icon-back {
        font-weight: 800;
        font-size: 18px;
    }

    .low {
        transform: rotate(-90deg);
        color: red;
    }

    .top {
        transform: rotate(90deg);
        color: greenyellow;
    }

    .box {
        display: flex;
        padding: 0 10px 10px 10px;
    }

    .box>div {
        border-radius: 5px;
        overflow: hidden;
        margin-left: 30px;
    }

    .box>div:first-of-type {
        margin-left: 0;
    }

    .box h5 {
        margin: 0;
        line-height: 60px;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
    }

    .boxContant {
        display: flex;
        font-size: 16px;
        flex-wrap: wrap;
        justify-content: space-around;
        color: #555;
    }

    .boxContant>div {
        min-width: 240px;
    }

    .gray {
        color: #999;
    }
</style>