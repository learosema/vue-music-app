<template>
<main class="playlist">
  <ul class="playlist__tracks">
    <li :key="index" v-for="(track, index) in tracks">
      <img :src="track.artwork_url">
      <h3>{{ track.title }}</h3>
      <p>{{ track.description }}</p> 
    </li>
  </ul>
</main>
</template>
<script>
export default {
  name: "Main",
  props: {
    title: String,
    description: String,
    tracks: Array
  }
}
</script>
<style>
.playlist {
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

ul.playlist__tracks {
  padding: 0;
  margin: 16px;
  list-style: none;
}

ul.playlist__tracks h3 {
  margin: 0;
}

ul.playlist__tracks li {
  border-bottom: 1px solid orchid;
  padding: 16px 0;
}

ul.playlist__tracks img {
  float: left;
  padding: 0 16px 16px 0;
}

p::after {
  content: '';
  display: block;
  clear: left;
}

</style>
