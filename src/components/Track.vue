<template>
  <div class="track">
    <div class="track__cover" v-if="backdropImage">
      <img :src="backdropImage" alt="">
    </div>
    <div class="track__details" v-if="track">
      <h2>{{ track.title }}</h2>
      <p>{{ track.description }}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: "Track",
  props: {
    track: Object
  },
  computed: {
    backdropImage() {
      if (this.track) {
        const url = this.track.artwork_url;
        return (url || '').replace(/large\.jpg/, 't500x500.jpg');
      } 
      return '';
    }
  }
}
</script>
<style>
@import '../css/track.css';
</style>
