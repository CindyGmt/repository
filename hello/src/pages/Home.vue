<template>
    <div class="homePage">
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <transition>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
            <el-container v-show='$route.path === "/home"'>
                <el-aside width="200px"><Aside/></el-aside>
                <el-main><Main/></el-main>
            </el-container>

        </el-container>
    </div>
</template>
<script>
import Header from '../componets/Header.vue'
import Aside from '../componets/Aside.vue'
import Main from '../componets/Main.vue'

export default {
    data(){
        return {

        }
    },
    components:{
        Header,
        Aside,
        Main
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
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>