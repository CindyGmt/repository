<template>
    <div class="themePage">
        <div class="theme-nav">
            <h2>主题市场</h2>
            <div class="quick-theme">
                <a v-for="(item,i) in quickLink" :key='i' :class="{'img-box':item.img}">
                    <img v-if='item.img' :src="item.img" alt="">
                    {{item.name}}
                </a>
            </div>
        </div>
        <div class="theme-content">
            <div class="classification">
                <div v-for='(item,i) in typeList' :key='i' class="item">
                    <i :class='[item.icon, "iconfont"]'></i>
                    <span v-for="(child, j) in item.children" :key='j'><a href="">{{child.name}}</a><i v-show='j < item.children.length - 1'>/</i></span>
                </div>
            </div>
            <div class="carousel">
                <div class="top">
                     <el-carousel :interval="3000" arrow="always" height="280px" >
                        <el-carousel-item v-for="(item,i) in topList" :key="i">
                            <img :src="item.img" alt="" class="carousel-bg">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="bottom">
                    <el-carousel :interval="3000" arrow="always" height="206px" >
                        <el-carousel-item v-for="(item,key) in bottomList" :key="key">
                            <img :src="item[0].img" alt="" class="imgOne">
                            <img :src="item[1].img" alt="" class="imgTwo">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="personal-card">
                <div class="user-info">
                    <a href="">
                        <img src="../../assets/img/getAvatar.jpg" alt="" class="user-pic">
                        <span>Hi! {{user.name}}</span>
                    </a>
                </div>
                <div class="card"></div>
                <div class="notice">
                    <h4>公告</h4>
                    <span>新鲜事都在这里~</span>
                </div>
                <div class="my">
                    <div class="collection">
                        <i class="icon-shoucang iconfont"></i>
                        <span>收藏的宝贝</span>
                    </div>
                    <div class="have-shop">
                        <i class="icon-shouye iconfont"></i>
                        <span>买过的店铺</span>
                    </div>
                    <div class="collec-shop">
                        <i class="icon-dianpu iconfont"></i>
                        <span>收藏的店铺</span>
                    </div>
                    <div class="footprint">
                        <i class="icon-zuji iconfont"></i>
                        <span>我的足迹</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {typeList, topList, bottomList} from './theme'
export default {
    data(){
        return{
            user:{},
            quickLink:[
                {
                    name:'天猫超市',
                    img:require('@/assets/img/mark.png'),
                    url:''
                },
                {
                    name:'天猫国际',
                    img:require('@/assets/img/internel.png'),
                    url:''
                },
                {
                    name:'天猫会员',
                    url:''
                },
                {
                    name:'喵鲜生',
                    url:''
                },
                {
                    name:'医药馆',
                    url:''
                },
                {
                    name:'魅力惠',
                    url:''
                },
                {
                    name:'飞猪旅行',
                    url:''
                },
                {
                    name:'苏宁易购',
                    url:''
                },
                {
                    name:'天猫内容',
                    url:''
                },
            ],
            typeList,
            topList,
            bottomList
        }
    },

}
</script>
<style lang="less" scoped>
.theme-nav{
    line-height: 35px;
    h2{
        float: left;
        color: #fe0137;
        font-size: 16px;
        margin: 12px 0 0 18px;
    }
    .quick-theme{
    display: inline-block;
        margin: 0 auto;
        margin-top: 8px;
        a{
            display: inline-block;
            font-size: 14px;
            color: #000;
            line-height: 35px;
            margin-right: 16px;
            cursor: pointer;
        }
        a:hover{
            color: #fe0137;
        }
        .img-box{
            position: relative;
            color: #fff;
            width: 100px;
            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 30px;
                line-height: 35px;
            }
        }
        .img-box:hover{
            color: #fff;
        }
    }
}
.theme-content{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 12px;
    .classification {
        margin-left: 18px;
        .item{
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            color: #666;
            .iconfont{
                float: left;
                margin-right: 12px;
            }
            span{
                float: left;
                a{
                    color: #666;
                    text-decoration: none;
                }
                a:hover{
                    color: #fe0137;
                }
                i{
                    margin: 0 8px;
                }
            }
        }
    }
    .carousel{
        margin: 0 20px 0 75px;
        width: 520px;
        .top{
            border-radius: 12px;
            overflow: hidden;
            /deep/.el-carousel__button{
                width: 8px;
                height: 8px;
                border-radius: 50%;
            }
            /deep/.el-carousel__indicator.is-active button{
                background: rgb(255, 80, 0);
            }
            .carousel-bg{
                height: 280px;
            }
        } 
        .bottom{
            border-radius: 12px;
            overflow: hidden;
            height: 206px;
            margin-top: 33px;
            .el-carousel__item{
                display: flex;
                justify-content: space-between;
                .imgOne{
                    width: 255px;
                    margin-right: 10px;
                    cursor: pointer;
                }
                .imgTwo{
                    width: 255px;
                    cursor: pointer;
                }
            }
        }
        /deep/.el-carousel__arrow--right{
            right: -8px;
            border-radius: 0;
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;
        }
        /deep/.el-carousel__arrow--left{
            left: -8px;
            border-radius: 0;
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
        }
        .bottom /deep/.el-carousel__button{
            display: none;
        }
    }
    .personal-card{
        flex: 1;
        height: 519px;
        background: #f3f3f3;
        border-radius: 12px;
        margin-right: 18px;
        .user-info{
            margin: 20px auto 0;
            display: inline-block;
            a{
                display: flex;
                flex-flow: column;
                color: #333;
                font-size: 12px;
                text-decoration: none;
                .user-pic{
                    width: 80px;
                    height: 80px;
                }
                span{
                    margin-top: 10px;
                    line-height: 16px;
                }
            }
        }
        .card{
            margin: 17px 14px 0 14px;
            height: 141px;
            background: url(../../assets/img/publicityCard.jpg) no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
            border-radius: 5px;
            overflow: hidden;
        }
        .notice{
            margin: 27px 14px 12px 14px;
            line-height: 14px;
            height: 14px;
            font-size: 14px;
            color:#666;
            h4{
                margin: 0 10px 0 0;
                float: left;
            }
            span{
                float: left;
            }
        }
        .my{
            display: flex;
            justify-content: space-between;
            margin: 30px 14px 0;
            div{
                display: flex;
                flex-direction: column;
                color: #333;
                font-size: 12px;
                line-height: 29px;
                cursor: pointer;
                i{
                    font-size: 26px;
                }
            }
            div:hover{
                color: #fe0137 ;
            }
        }
    }
}
</style>