<template>
    <div class="homePage">
        <el-container>
            <el-aside width="150px">
                <el-menu  @select="handleSelect">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">多门店功能</span>
                </el-menu-item>
    </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script>
    export default {
      data() {
        return {
            list: [{
                label: '一级 1',
                url:'/storeManage'
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
      },
      methods: {
        handleSelect(i) {
            this.$router.push({path:this.list[i - 1].url})
        }
      }
    };
  </script>
<style scoped>
    .homePage{
        height: 100vh;
        width: 100vw;
    }
    .el-main{
        padding: 0;
    }
    .el-aside{
        padding-top: 20px;
        height: 100vh;
        background: #333;
    }
    .el-menu{
        background: #333;
        border-right:unset;
    }
    .el-menu-item{
        font-size: 12px;
        color: #fff;
        text-align: left;
    }
    .el-menu-item [class^=el-icon-]{
        color: #fff;
        font-size: 15px;
        margin-right:2px;
        width:19px;
    }
    .el-menu-item:focus, .el-menu-item:hover{
        background: #606266;
        color: #fff;
    }
</style>