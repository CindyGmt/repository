<template>
  <div id="app">
    <Nav class="nav"></Nav>
    <router-view></router-view>
  </div>
</template>

<script>

import Nav from './components/nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
.nav{
  height: 26px;
  background: #f2f2f2;
}
</style>
