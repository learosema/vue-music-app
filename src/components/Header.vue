<template>
  <div class="header">
    <div class="header__top">
      <div class="header__logo">
        <svg viewBox="0 0 64 128" width="64" height="64">
          <path d="M16,16l50,50l-50,50Z" stroke="deepskyblue" fill="gold" stroke-width="2" stroke-linecap="bevel" />
          <path d="M28,46l20,20l-20,20Z" stroke="hotpink" stroke-width="2" stroke-linecap="bevel" />
        </svg>
      </div>
      <div class="header__title">
        <h1 :title="description">{{ title }}</h1>
        <h2 v-if="currentTrack">{{ currentTrack.title }} </h2>
      </div>
    </div>
    <div class="header__bottom">
      <Controls 
        @play-track="$emit('play-track')"
        @pause-track="$emit('pause-track')"
        :currentTime="currentTime"
        :duration="duration" />
    </div>
  </div>  
</template>
<script>
import Controls from './Controls';

export default {
  name: "Header",
  components: {
    Controls
  },
  props: {
    title: String,
    description: String,
    currentTrack: Object,
    currentTime: Number,
    duration: Number, 
  }
}
</script>

<style>
@import '../css/header.css';
</style>