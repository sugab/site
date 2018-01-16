<template>
  <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
    <div class="content-wrapper">
      <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
        <div v-if="shows[0]">
          <span class="title boxed">I'm still working on it.</span>
        </div>
      </transition>  
      <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
        <div v-if="shows[1]">
          <span class="subtitle boxed">
            Meanwhile go to 
            <a class="social-link" href="https://www.linkedin.com/in/cahyonobagus" target="blank">
              <b>my LinkedIn profile</b>
            </a>
            instead :)
          </span>
        </div>
      </transition>  
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      shows: [false, false]
    }
  },
  methods: {
    sequenceShow (show, callback) {
      var promise = Promise.resolve()

      for (const i of this.shows.keys()) {
        promise = promise.then(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.$set(this.shows, i, show)
              resolve()
            }, 100)
          })
        })
      }

      if (typeof callback === 'function') {
        promise.then(() => {
          callback()
        })
      }
    }
  },
  mounted () {
    this.sequenceShow(true)
  },
  beforeRouteLeave (to, from, next) {
    this.sequenceShow(false, function () {
      next()
    })
  }
}
</script>


<style scoped>
  .boxed {
    display: inline-block;
    background-color: rgba(236, 240, 241, 0.8);
    padding: 5px 10px;
    margin: 2px;
  }
</style>

