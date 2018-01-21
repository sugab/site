<template>
  <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
    <div>
      <div class="masonry-layout">
        <transition-group enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
          <div class="masonry-layout-panel" v-for="photo in photos" :key="photo.link">
            <div class="masonry-layout-panel__content">
              <img :src="photo.media.o" />
              <h3>{{ photo.title }}</h3>
              <p>{{ photo.descriptionText }}</p>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </transition>
</template>

<script>
import jsonp from 'jsonp'
export default {
  data () {
    return {
      photos: []
    }
  },
  created () {
    const url = 'https://api.flickr.com/services/feeds/photos_public.gne?id=162284319@N03&format=json&jsoncallback=callback'
    jsonp(url, {name: 'callback'}, (error, data) => {
      if (!error) {
        var photos = data.items.map(e => {
          let lastIndex = e.description.lastIndexOf('<p>')
          e.descriptionText = e.description.substring(lastIndex + 3, e.description.length - 4)
          e.media.o = e.media.m.substr(0, e.media.m.length - 6) + e.media.m.substr(e.media.m.length - 4, e.media.m.length)

          return e
        })

        this.photos = photos
      }
    })
  },
  beforeRouteLeave (to, from, next) {
    this.photos = []

    setTimeout(() => {
      next()
    }, 600)
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.masonry-layout {
  column-count: 1;
  column-gap: 0;
  counter-reset: item-counter;
  
  @media screen and (min-width: 400px) {
    column-count: 2;
  }
  
  @media screen and (min-width: 600px) {
    column-count: 3;
  }
  
  @media screen and (min-width: 800px) {
    column-count: 4;
  }
  
  @media screen and (min-width: 1100px) {
    column-count: 5;
  }
}

.masonry-layout-panel {
  break-inside: avoid;
  padding: 5px;
}

.masonry-layout-panel__content {
  padding: 2px;
  background-color: white;
}

.masonry-layout-panel__content > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.masonry-layout-panel__content > p {
  margin: 10px;
  margin-top: 0;
}

.masonry-layout-panel__content > h3 {
  margin: 10px;
  margin-bottom: 0;
}
</style>
