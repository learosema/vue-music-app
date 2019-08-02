<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Header from './components/Header';
import Main from './components/Main';

export default {
  name: 'app',
  components: {
    Header,
    Main
  }
}
</script>

<style>

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  background: white;
  color: #442255;
}
</style>
