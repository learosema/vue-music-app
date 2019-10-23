<template>
  <div id="app">
    <Header
      :title="title"
      :description="description" 
      :currentTrack="currentTrack"
      :currentTime="currentTime"
      :duration="duration"
      @play-track="play"
      @pause-track="pause" />
    <main>
      <Playlist :tracks="tracks" @select-track="selectTrack" />
      <Track :track="selectedTrack" />
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
      currentTrack: null,
      selectedTrack: null
    }
  },
  computed: {
    currentTime() {
      if (audioPlayer.audio) {
        return audioPlayer.audio.currentTime;
      }
      return NaN
    },
    duration() {
      if (audioPlayer.audio) {
        return audioPlayer.audio.duration;
      }
      return NaN
    }
  },
  async mounted() {
    const data = await resolve(PLAYLIST);
    this.title = data.title;
    this.description = data.description;
    this.tracks = data.tracks;
    // console.log(data);
  },
  methods: {
    selectTrack(track) {
      if (track) {
        this.selectedTrack = track;
      }
    },
    play() {
      if (!this.selectedTrack && this.tracks.length > 0) {
        this.selectTrack(this.tracks[0]);
      }
      if (this.selectedTrack) {
        this.currentTrack = this.selectedTrack;
        audioPlayer.play(this.currentTrack.stream_url);
      }
    },
    pause() {
      if (this.currentTrack) {
        audioPlayer.muteAudio(0);
        this.currentTrack = null;
      }
    }
  }
}
</script>

<style>
@import 'css/app.css';
</style>
