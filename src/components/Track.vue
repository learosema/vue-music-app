<template>
  <div class="track">
    <div class="track__cover" v-if="backdropImage">
      <img :src="backdropImage" alt="">
    </div>
    <div class="track__details" v-if="track">
      <h3>{{ track.title }}</h3>
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
.track {
  position: fixed;
  top: 186px;
  left: 50%;
  right: 0;
  height: calc(100vh - 186px);
  background: #222;
  display: block;
}

.track__details {
  display: block;
  background: rgba(0,0,0,.5);
}

.track__cover img {
  float: left;
  margin-right: 16px;

}

.track h3, 
.track p {
  color: #0f0;
  margin: 0;
}


</style>
