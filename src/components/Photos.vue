<template>
  <transition>
    <div>
      <div class="masonry-layout">
        <div class="masonry-layout-panel" v-for="photo in photos" :key="photo.link">
          <div class="masonry-layout-panel__content">
            <img :src="photo.media.m" />
            <h3>{{ photo.title }}</h3>
            <p>{{ photo.descriptionText }}</p>
          </div>
        </div>
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

          return e
        })

        this.photos = photos
      }
    })
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.masonry-layout {
  column-count: 5;
  column-gap: 0;
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
