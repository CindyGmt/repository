<template>
    <div class="homePage">
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <el-container >
                <el-aside width="100px" v-show="$route.path.indexOf('/home') > -1"><Aside/></el-aside>
                <transition>
                    <keep-alive>     
                            <el-main>
                                <router-view></router-view>
                            </el-main>
                    </keep-alive>
                </transition>
                <ElAttr v-show="$route.path === '/home/newPage'"/>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import Header from '../componets/Header.vue'
import Aside from '../componets/Aside.vue'
import ElAttr from '../componets/ElAttr.vue'

export default {
    data(){
        return {

        }
    },
    components:{
        Header,
        Aside,
        ElAttr
    }
}
</script>


<style scoped>
.homePage{
    width: 100%;
    height: 100%;
}
.homePage > .el-container{
    height: 100%;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>