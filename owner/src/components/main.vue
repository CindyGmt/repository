<template>
    <div class="mainPage">
        <Theme class="theme"></Theme>
        <ListTemp class="supermarket" :dataList='productList' :mark="true"></ListTemp>
        <ListTemp class="international" :dataList='interList' :internel="true"></ListTemp>
        <ListTemp class="hobby" :dataList='hobbyList' :hobby="true"></ListTemp>
    </div>
</template>
<script>
import Theme from './mainComponents/theme.vue'
import ListTemp from './mainComponents/listtemp.vue'
import {productList, interList, hobbyList} from './mainComponents/supermarket'
export default {
    data(){
        return{
            productList,
            interList,
            hobbyList
        }
    },
    components:{
        Theme,
        ListTemp,
    }
}
</script>