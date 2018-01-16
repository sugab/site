<template>
  <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">>
    <div v-if="shows[0]">
      <span class="boxed">This is resume bro!</span>
    </div>  
  </transition>
</template>

<script>
export default {
  data () {
    return {
      shows: [false]
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
          setTimeout(() => {
            callback()
          }, 500)
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

