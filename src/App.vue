<template>
  <div id="app" class="bg">
    <router-view/>
  </div>
</template>

<script>
  import './assets/external/fa5/js/fontawesome-all'

  export default {
    name: 'app'
  }
</script>

<style>
  body,
  html {
    height: 100%;
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 1px;
    min-height: 768px;
  }

  .bg {
    background-image: url("./assets/images/bg-1.jpg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
