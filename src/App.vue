<template>
  <div id="app" class="bg">
    <div class="header">
      <ul class="menu">
        <li v-for="item in menuItems" v-bind:key="item.path">
          <router-link v-bind:to="item.path" active-class="active">{{item.title}}</router-link>
        </li>
      </ul>
    </div>

    <div class="content-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import './assets/external/bootstrap/bootstrap.min.css'
import 'animate.css/animate.min.css'

export default {
  name: 'app',
  data () {
    return {
      menuItems: [
        { path: '/home', title: 'Home' },
        { path: '/resume', title: 'Resume' },
        { path: '/photos', title: 'Photos' }
      ]
    }
  }
}
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  height: 100%;
  vertical-align: baseline;
  background: transparent;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 640px;
  font-size: 1.2em;
  overflow-x: hidden;
}

.bg {
  background-image: url("./assets/images/bg-1.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  a,
  a:hover {
    color: inherit;
  }

  p {
    margin: 0;
  }

  .header {
    height: 80px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }

  .menu {
    margin: 0 5%;
    padding: 0 20px;
    float: right;
  }

  .menu li {
    display: inline-block;
    list-style: none;
    padding: 10px 20px;
    color: white;
    width: 80px;
  }

  .menu li a.active {
    font-weight: bold;
  }

  .content-container {
    position: relative;
  }

  .content-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .title {
    font-weight: bold;
    font-size: 3em;
  }

  .subtitle {
    font-size: 1.2em;
  }
}
</style>
