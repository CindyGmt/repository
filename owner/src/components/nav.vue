<template>
    <div class="navPage">
        <div class="navContent">
            <p class="homtBtn" @click="toHome"><i class="iconfont icon-shouye1"></i>天猫首页</p>
            <p class="login" v-if='!loggedIn'>
                <span class="title">喵，欢迎来到天猫</span>
                <a class="loginBtn" @click="toLogin">请登录</a>
                <a class="registerBtn" @click="toRegister">免费注册</a>
            </p>
            <p class="show" v-else>
                <span class="title">Hi,{{user.name}}</span>
                <a class="cancelBtn" @click="toLogin">退出</a>
            </p>
            <ul class="quick-menu">
                <li v-for='(item,i) in menuList' :key='i'>
                    <el-dropdown v-if="item.children && item.children.length" @command="handleCommand">
                        <span class="el-dropdown-link">
                            <i v-if='item.icon' :class='[item.icon, "iconfont"]'></i>
                            {{item.name}}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for='(child, j) in item.children' :key='j' class="dropdown-item" :command="child.url">{{child.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span v-else-if='!item.img'>
                        <i v-if='item.icon' :class='[item.icon, "iconfont"]'></i>
                        <span class="btn" @click="toLink(item.url)">{{item.name}}</span>
                    </span>
                    <el-popover
                        v-else
                        placement="bottom"
                        width="200"
                        trigger="hover">
                        <img :src="item.img" alt="">
                        <el-button slot="reference"><i v-if='item.icon' :class='[item.icon, "iconfont"]'></i> {{item.name}}</el-button>
                    </el-popover>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data(){
        return{
            loggedIn:false,
            menuList:[
                {
                    name:'我的淘宝',
                    url:'',
                    children:[
                        {
                            name:'已买到的宝贝',
                            url:'/purchased'
                        },
                        {
                            name:'已卖出的宝贝',
                            url:''
                        }
                    ]

                },
                {
                    name:'购物车',
                    icon:'icon-gouwuchexuanzhong',
                    url:''
                },
                {
                    name:'收藏夹',
                    url:'',
                    children:[
                        {
                            name:'收藏的宝贝',
                            url:''
                        },
                        {
                            name:'收藏的店铺',
                            url:''
                        }
                    ]

                },
                {
                    name:'手机版',
                    icon:'icon-shouji',
                    url:'',
                    img:require('@/assets/img/code/phoneCode.png')
                },
                {
                    name:'淘宝网',
                    url:'',
                },
                {
                    name:'网页无障碍',
                    url:'',
                },
                {
                    name:'商家支持',
                    url:'',
                    children:[
                        {
                            name:'商家中心',
                            url:''
                        },
                        {
                            name:'天猫规则',
                            url:''
                        }
                    ]

                },
                {
                    name:'商家中心',
                    url:'',
                },
                {
                    name:'联系客服',
                    url:'',
                    children:[
                        {
                            name:'消费者客服',
                            url:''
                        },
                        {
                            name:'卖家客服',
                            url:''
                        },
                        {
                            name:'意见反馈',
                            url:''
                        },
                        {
                            name:'网页版旺旺',
                            url:''
                        }
                    ]

                }
            ]
        }
    },
    computed:{
        ...mapState(['user']),
    },
    created(){
        let user = localStorage.getItem('user')
        if(user){
            this.$store.commit('setUser',JSON.parse(user))
            this.loggedIn = true
        }
    },
    methods:{
        handleCommand(command){
             this.$router.push({ path: command});
        },
        toHome(){
             this.$router.push({ path: '/home'});
        },
        toLogin(){
            this.$utils.delCookie()
            localStorage.clear()
            this.$store.commit('clearUser')
            this.$router.push({ path: '/login'});
        },
        toRegister(){
             this.$router.push({ path: '/register'});
        }
    }
}
</script>
<style lang="less" scoped>
.iconfont{
    font-size: 12px;
    color: #FF0036;
}
.icon-shouye1{
    margin-right: 5px;
}
.navContent{
    display: inline-block;
    margin: auto;
    height: 26px;
    font-size: 12px;
    line-height: 26px;
    color: #999;
    min-width: 990px;
    p{
        margin: 0;
        float: left;
        margin-right: 20px;
    }
    .homtBtn{
        cursor: pointer;
    }
    .homtBtn:hover{
        color: #FF0036;
    }
    .cancelBtn{
        margin-left: 20px;
        cursor: pointer;
    }
    .login a, .cancelBtn{
        display: inline-block;
        height: 26px;
        line-height: 26px;
        color: #999;
        text-decoration: none;
    }
    .login a:hover{
        color: #FF0036;
    }
    .login .loginBtn{
        margin: 0 20px;
        cursor: pointer;
    }
    .registerBtn{
        cursor: pointer;
    }
    .quick-menu{
        margin: 0;
        padding: 0;
        float:right;
        list-style: none;
        li{
            float: left;
            cursor: pointer;
            margin-left: 10px;
            padding: 0 5px;
            .el-dropdown{
                font-size: 12px;
                color: #999;
                line-height: 26px;
                .el-icon--right{
                    margin-left: -5px;
                }
            }
            .el-button{
                padding: 0;
                font-size: 12px;
                color: #999;
                border: none;
                background: #f2f2f2;
            }
        }
        li:hover{
        color: #FF0036;
    }
    }
}
</style>