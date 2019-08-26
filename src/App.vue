<template>
  <div id="app">
    <Header :title="title" :description="description" @play-track="play" @pause-track="pause" />
    <main>
      <Playlist :tracks="tracks" @select-track="selectTrack" />
      <Track :track="currentTrack" />
    </main>
  </div>
</template>
<script>
import Header from './components/Header';
import Playlist from './components/Playlist';
import Track from './components/Track';
import { resolve } from './utils/soundcloud';
import { audioPlayer } from './utils/audio-player';

const PLAYLIST = 'https://soundcloud.com/timpietrusky/sets/super-hot-shit';

export default {
  name: 'app',
  components: {
    Header,
    Playlist, 
    Track
  },
  data() {
    return {
      title: "",
      description: "",
      tracks: [],
      currentTrack: null
    }
  },
  async mounted() {
    const data = await resolve(PLAYLIST);
    this.title = data.title;
    this.description = data.description;
    this.tracks = data.tracks;
    console.log(data);
  },
  methods: {
    selectTrack(track) {
      console.log(track);
      if (track) {
        this.currentTrack = track;
      }
    },
    play() {
      if (this.currentTrack) {
        audioPlayer.play(this.currentTrack.stream_url);
      }
    },
    pause() {
      if (this.currentTrack && audioPlayer.audio) {
        audioPlayer.muteAudio(0);
      }
    }
  }
}
</script>

<style>

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  color: #213;
  background: #fff;
}

#app {
  margin: 0;
}


</style>
