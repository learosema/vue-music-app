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
.playlist {
  display: block;
  width: calc(100% - var(--track-pane-width));

  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.playlist a { border: none;
  text-decoration: none;
  color: #213;
 }


ul.playlist__tracks {
  padding: 0;
  margin: 16px;
  list-style: none;
}

ul.playlist__tracks li a {
  border-bottom: 1px solid #eee;
  padding: 16px 0;
  display: flex;
  align-items: flex-start;
}

ul.playlist__tracks li a:hover,
ul.playlist__tracks li a.selected {
  background: #eee;
}

ul.playlist__tracks img {
  display: block;
  min-width: 100px;
  flex: 0 1;
  margin: 0 16px 0 16px;
}

ul.playlist__tracks p {
  display: block;
  margin: 0;
  flex: 1 0;
  text-overflow: ellipsis;
  overflow: hidden;
}

</style>
