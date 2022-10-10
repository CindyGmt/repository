<template>
    <div class="footerPage">
        <div class="one">
            <a href="" class="first"></a>
            <a href="" class="second"></a>
            <a href="" class="third"></a>
            <a href="" class="forth"></a>
        </div>
        <div class="two">
            <dl v-for="(item,i) in footerTwo" :key="i">
                <dt>{{item.title}}</dt>
                <dd>
                    <a href="" v-for="(li, j) in item.list" :key='j'>{{li.name}}</a>
                </dd>
            </dl>
            <dl>
                <dt>手机天猫</dt>
                <dd>
                    <a href="">
                        <img src="../assets/img/phoneTmall.png" alt="" class="imgCode">
                    </a>
                </dd>
            </dl>
        </div>
        <div class="three"></div>
    </div>
</template>
<script>
import {footerTwo} from './footerTwo'
export default {
    data(){
        return {
            footerTwo
        }
    }
    
}
</script>
<style lang="less" scoped>
.one{
    max-width: 1190px;
    height: 100px;
    margin: 25px auto;
    background: url(../assets/img/footerOne.jpg) no-repeat;
    background-size: 100% 100%;
    a{
        display: inline-block;
        width: 25%;
        height: 100px;
        margin: 0;
    }
}
.two{
    max-width: 1190px;
    margin: 0px auto;
    display: flex;
    border-top: 1px solid #ccc;
    padding-top: 22px;
    padding-bottom: 25px;
    justify-content: space-between;
    background: url(../assets/img/logIcon.jpg) no-repeat;
    background-position: 45px bottom;
    dl{
        margin: 0;
        padding: 0 45px;
        dt{
            color: #646464;
            font-size: 16px;
            font-weight: 700;
            height: 30px;
            line-height: 30px;
            text-align: left;
        }
        dd{
            float: left;
            margin: 0;
            a{
                font-size: 12px;
                display: block;
                width: 100px;
                text-align: left;
                height: 20px;
                line-height: 20px;
                color: #8b8b8b;
                text-decoration: none;
            }
            a:hover{
                text-decoration: underline;
            }
            .imgCode{
                width: 105px;
            }
        }
    }
}
</style>