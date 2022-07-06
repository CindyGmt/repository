<template>
    <div class="newPage" ref='newPage'>
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

    },
    beforeCreate(){
    },
    }

</script>


<style lang="less" scoped>
.newPage{
    height: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 3px 3px #eee;
}
</style>