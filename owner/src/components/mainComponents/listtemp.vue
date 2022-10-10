<template>
    <div class="listtempPage">
        <h1 :class="{'title1': mark,'title2': internel,'title3': hobby, 'title': true}">
            <span v-if='hobby' class="hobby">猜你喜欢<span>个性推荐</span></span>
        </h1>
        <div class="product-box">
            <div class="product-list" v-for='(item,i) in dataList' :key ='i'>
                <img :src="item.img" alt="" :class="['productImg', item.onlyImg ? 'onlyImg' : '']">
                <div class="productText" v-if='item.text'>{{item.text}}</div>
                <span class="productPrice" v-if='item.price'>￥{{item.price}}</span>
                <span class="Subheading" v-if='item.Subheading'>{{item.Subheading}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['dataList','mark','internel','hobby'],
    data(){
        return{
        }
    }
}
</script>
<style lang="less" scoped>
.listtempPage{
    margin: 30px 18px 0 18px;
    .title{
        height: 34px;
        margin: 0;
    }
    .title1{
        background: url(../../assets/img/supermarketTitle.png) no-repeat;
    }
    .title2{
        background: url(../../assets/img/internelTitle.jpg) no-repeat;
    }
    .title3{
        text-align: left;
        .hobby{
            font-size: 24px;
            span{
                display: inline-block;
                padding: 2px 5px;
                background: #fe0137;
                color: #fff;
                border-radius: 10px;
                font-size: 14px;
                font-weight: 400;
                vertical-align: text-top;
                margin-left: 5px;
            }
        }
    }
    .product-box{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .product-list{
            margin-top: 18px;
            text-align: left;
            cursor: pointer;
            height: 280px;
            width: 220px;
            .productImg{
                border-radius: 18px;
            }
            .onlyImg{
                width: 220px;
                height: 280px;
            }
            .productText{
                font-size: 16px;
                color: #000;
                line-height: 22px;
                height: 22px;
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .productPrice,.Subheading{
                margin-top: 5px;
                font-size: 20px;
                line-height: 24px;
                height: 24px;
                color: #ff5000;
            }
            .Subheading{
                font-size: 14px;
            }
        }
    }
}
</style>