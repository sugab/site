<template>
  <div id="app">
    <div class="bg" :class="{tinted: tinted}">
    </div>
    <div class="app-wrapper">
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
      tinted: false,
      menuItems: [
        { path: '/home', title: 'Home' },
        { path: '/resume', title: 'Resume' },
        { path: '/photos', title: 'Photos' }
      ]
    }
  },
  watch: {
    $route (value) {
      this.lightHeader = value.path === '/resume'
      this.tinted = value.path === '/photos'
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
  height: 100%;
  font-size: 1em;

  @media screen and (min-width: 400px) {
    font-size: 1em;
  }

  @media screen and (min-width: 600px) {
    font-size: 1.1em;
  }

  @media screen and (min-width: 800px) {
    font-size: 1.2em;
  }
}

#app {
  a,
  a:hover {
    color: inherit;
    text-decoration: none;
  }

  .app-wrapper {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
  }

  .bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("https://farm5.staticflickr.com/4766/39796659631_f58963260e_k.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: background 1s;
  }

  .bg::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 0.5s;
  }

  .bg.tinted::after {
    background: rgba(0, 0, 0, 0.5);
  }

  .header {
    position: relative;
    height: 3em;
    transition: height 1s;
  }

  .header-bg,
  .header-bg-light {
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
    height: 3em;
    background: #fafafa;
  }

  .menu {
    position: absolute;
    right: 0;
    margin: 0 5%;
  }

  .menu li {
    display: inline-block;
    list-style: none;
    padding: 0.6em 1em;
    color: white;
    transition: color 1s;
    border-top: 2px solid transparent;
  }

  .menu li.active {
    font-weight: bold;
    border-top: 2px solid white;
  }

  .header.light .menu li {
    color: #6c7a89;
  }

  .header.light .menu li.active {
    border-top: 2px solid #6c7a89;
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
