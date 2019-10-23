<template>
<nav class="controls">
  <ul class="controls__menu">
    <li>
      <button class="controls__button controls__button--play" @click="$emit('play-track')">
        <svg viewBox="0 0 128 128" width="48px" height="48px">
          <title>play</title>
          <path d="M39,16l50,50l-50,50Z" />
        </svg>
      </button>
    </li>
    <li>
      <button class="controls__button controls__button--pause" @click="$emit('pause-track')">
        <svg viewBox="0 0 128 128" width="48px" height="48px">
          <title>pause</title>
          <rect x="8" y="16" width="50" height="96" />
          <rect x="70" y="16" width="50" height="96" />
        </svg>
      </button>
    </li>
    <li class="controls__menu-item--progress">
      <progress class="controls__progress" max="100" :value="progress" @click="onClickProgress"></progress>
    </li>
    <li>
      01:23
    </li>
  </ul>
</nav>
</template>
<style>
@import '../css/controls.css';
</style>
<script>
export default {
  name: 'Controls',
  props: {
    duration: Number,
    currentTime: Number
  },
  computed: {
    progress() {
      return 100 * this.currentTime / this.duration;
    }
  },
  methods: {
    onClickProgress(e) {
      this.$emit('update-progress', 100.0 * e.offsetX / e.target.clientWidth);
    }
  }
}
</script>
