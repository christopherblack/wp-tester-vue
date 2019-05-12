<template lang="pug">
  #app
      el-container
        el-aside.aside
          Navbar
        el-main.main
          router-view
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .aside {
      width: 200px !important;
      height: 100%;
      position: absolute;
      box-shadow: rgb(230, 230, 230) 0px 0px 10px;
    }
    .main {
      margin-left: 200px;
    }
  }
}
</style>
