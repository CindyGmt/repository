<template>
    <div class="header">
        <router-link tag='span' to='/home' class="el-icon-home-my"></router-link>
        <router-link tag='span' to='/pages' class="el-icon-page-my">页面集</router-link>
        <router-link tag='span' to='/process' class="el-icon-process-my">作品集</router-link>
        <router-link tag='span' to='/userInfo' class="el-icon-user-my">用户</router-link>
    </div>
</template>

<style scoped lang='less'>
.header{
    float: right;
}
.el-icon-home-my{
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    box-shadow: 0 0 3px 3px #fff;
    background: url('../assets/image/home.png') center no-repeat;
    background-size: cover;
    cursor: pointer;
    position:absolute;
    top:10px;
    left: 30px;
}
.el-icon-page-my,.el-icon-process-my,.el-icon-user-my{
    cursor: pointer;
    height: 35px;
    line-height: 35px;
    position: relative;
    margin-right: 10px;
    padding-left: 30px;
    padding-right: 10px;
    font-size: 14px;
    background: #fff;
    border-radius: 5px;
}
.el-icon-page-my:hover,.el-icon-process-my:hover,.el-icon-user-my:hover{
    box-shadow: 0 0 5px #409EFF;
}
.el-icon-page-my::before,.el-icon-process-my::before,.el-icon-user-my::before{
    display: inline-block;
    content: '';
    width: 16px;
    height: 30px;
    background: url('../assets/image/page.png') center no-repeat;
    position: absolute;
    left: 10px;
    top:3px;
}
.el-icon-process-my::before{
    background: url('../assets/image/process.png') center no-repeat;
}
.el-icon-user-my::before{
    background: url('../assets/image/user.png') center no-repeat;
}
</style>