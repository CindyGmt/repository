<template>
    <div class="newPage" ref='newPage'>
        <!-- div作为载体,is属性指定实际组件（is属性是关键） -->
        <div v-for="(item,i) in singlePage.elArr" :key="i" @click="focusEl(item,i)" class="elBox">
            <div :is="item.el"></div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            name:'1'
        }
    },
    computed:{
        ...mapState(['singlePage'])
    },
    methods:{
        focusEl(el,i){
            debugger
            this.$emit('setEl',el,i)
        }
    },
    created(){
        let singlePage = localStorage.getItem('singlePage')
        if(!this.singlePage.page_name && !singlePage.page_name){
            this.$message({
                message:'请先创建新页面',
                duration:1500,
                showClose:true
            })
            this.$router.push('/home')
        }
        
    },
    beforeDestroy(){
        this.$store.commit('clearSinglePage')
    },
}

</script>


<style lang="less" scoped>
.newPage{
    height: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 3px 3px #eee;
    .elBox{
        display: inline-block;
    }
}
</style>