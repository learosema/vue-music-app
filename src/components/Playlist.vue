<template>
<div class="playlist">
  <ul class="playlist__tracks">
    <li :key="index" v-for="(track, index) in tracks">
      <a :class="{selected: (selectedTrack && track.title == selectedTrack.title)}" href="#" @click.prevent="onSelect(track)">
        <img :src="track.artwork_url">
        <p>{{ track.title }}</p>
      </a>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: "Playlist",
  props: {
    title: String,
    description: String,
    tracks: Array,
  },
  data() {
    return {
      selectedTrack: null
    }
  },
  methods: {
    onSelect(track) {
      this.selectedTrack = track;
      this.$emit("select-track", track);
    }
  }
}
</script>
<style>
@import '../css/playlist.css';
</style>
