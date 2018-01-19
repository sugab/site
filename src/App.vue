<template>
  <div id="app" class="bg">
    <div class="header" :class="{light: lightHeader}">
      <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
        <div class="header-bg" v-show="!lightHeader">
        </div>
      </transition>
      <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
        <div class="header-bg-light" v-show="lightHeader">
        </div>
      </transition>
      <ul class="menu">
        <router-link v-for="item in menuItems" :key="item.path" :to="item.path" tag="li" active-class="active">
          <a>{{item.title}}</a>
        </router-link>
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
      lightHeader: false,
      menuItems: [
        { path: '/home', title: 'Home' },
        { path: '/resume', title: 'Resume' },
        { path: '/photos', title: 'Photos' }
      ]
    }
  },
  watch: {
    '$route' (value) {
      this.lightHeader = value.path === '/resume'
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
  overflow-x: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 640px;
  font-size: 1.2em;
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
    text-decoration: none;
  }

  .header {
    height: 49px;
    transition: height 1s;
  }

  .header-bg, .header-bg-light {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .header-bg {
    height: 80px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }

  .header-bg-light {
    height: 49px;
    background: #FAFAFA;
  }

  .menu {
    position: absolute;
    right: 0;
    margin: 0 5%;
    padding: 0 20px;
  }

  .menu li {
    display: inline-block;
    list-style: none;
    padding: 11px 20px;
    color: white;
    width: 100px;
    transition: color 1s;
    border-top: 2px solid transparent;
  }

  .menu li.active {
    font-weight: bold;
    border-top: 2px solid white;
  }

  .header.light .menu li {
    color: #6C7A89;
  }

  .header.light .menu li.active {
    border-top: none;
    border-bottom: 1px solid #6C7A89;
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
