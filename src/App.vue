<template>
  <div id="app">
    <Header/>
    <Main :title="title" :tracks="tracks" :description="description" />
  </div>
</template>

<script>
import Header from './components/Header';
import Main from './components/Main';
import { resolve } from './utils/soundcloud';

const PLAYLIST = "https://soundcloud.com/timpietrusky/sets/super-hot-shit";

export default {
  name: 'app',
  components: {
    Header,
    Main
  },
  data() {
    return {
      title: "",
      description: "",
      tracks: []
    }
  },
  async mounted() {
    const data = await resolve(PLAYLIST);
    this.title = data.title;
    this.description = data.description;
    this.tracks = data.tracks;
    console.log(data);
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
  color: white;
  background: #221133;
}

#app {
  margin: 0;
}
</style>
