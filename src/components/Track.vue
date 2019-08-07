<template>
  <div class="track">
    <div class="track__cover" v-if="backdropImage">
      <img :src="backdropImage" alt="">
    </div>
    <div class="track__details" v-if="track">
      <h2>{{ track.title }}</h2>
      <p>{{ track.description }}</p>
      <Controls />
    </div>
  </div>
</template>
<script>
import Controls from './Controls';

export default {
  name: "Track",
  components: {
    Controls
  },
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

.track {
  position: fixed;
  top: var(--header-height);
  left: calc(100% - var(--track-pane-width));
  right: 0;
  height: calc(100vh - var(--header-height));
  background: var(--track-background);
  display: block;
}

.track__details {
  position: relative;
  margin: 16px;
  padding: 8px;
  display: block;
  text-shadow: 2px 2px #000;
}

.track__cover {
  position: relative;
}

.track__cover img {
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -50%;
  margin-top: -20%;
  mix-blend-mode: multiply;
  background: #777;
  width: 100%;
}

.track h2, 
.track p {
  color: #fff;
  margin: 0;
}


</style>
