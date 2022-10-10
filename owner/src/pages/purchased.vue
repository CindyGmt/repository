<template>
    <div class="purchasedPage">
        <div class="menu">
            <h5>全部功能</h5>
            <p>订单列表</p>
            <p>订单分析</p>
        </div>
        <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
    </div>
</template>
<script>
import OrderList from '../components/purchased/orderList.vue'
export default {
    data(){
        return {
            currentTabComponent:'OrderList'
        }
    },
    components:{
        OrderList
    }
}
</script>
<style scoped lang='less'>
.purchasedPage{
    display: flex;
    justify-content: center;
}
.menu{
    width: 160px;
}
</style>