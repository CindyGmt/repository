<template>
  <div class="homePage">
    <Seach class="seach"></Seach>
    <Main class="main"></Main>
    <Footer class="footer"></Footer>
  </div>
</template>
<script>
import Seach from '../components/seach.vue'
import Main from '../components/main.vue'
import Footer from '../components/footer.vue'
export default {
  data(){
    return {

    }
  },
  components:{
    Seach,
    Main,
    Footer
  }
}
</script>
<style scoped lang='less'>
.homePage{
  background: url(../assets/img/bg/homeBg.png) no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding-top: 12px;
}
.seach{
  max-width: 1190px;
  height: 111px;
  margin: 12px auto 0;
}
.main{
  font-family: serif;
  background: #fff;
  max-width: 1190px;
  margin: 0 auto 100px;
  border-radius: 18px;
}
.footer{
  background: #fff;
  padding-top: 1px;
}
</style>