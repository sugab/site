<template>
  <transition>
    <div>
      <div class="masonry-layout">
        <div class="masonry-layout-panel" v-for="photo in photos" :key="photo.link">
          <div class="masonry-layout-panel__content">
            <img :src="photo.media.m" />
            <p>{{ photo.title }}</p>
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
        this.photos = data.items
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
  padding: 4px;
  border-radius: 4px;
  background-color: white;
}

.masonry-layout-panel__content > img {
  border-radius: 4px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.masonry-layout-panel__content > p {
  margin: 10px;
}
</style>
