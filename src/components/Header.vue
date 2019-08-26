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
      <Controls @play-track="$emit('play-track')" @pause-track="$emit('pause-track')" />
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
    currentTrack: Object
  }
}
</script>

<style>

.header {
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: var(--header-color);
  color: white;
  font-family: sans-serif;
}

.header__top {
  margin: 0 auto;
  height: calc(var(--header-height) / 2);
  display: flex;
  align-items: center;
}

.header__bottom {
  background: var(--header-bottom-color);
  display: flex;
  align-items: center;
  padding: 4px 32px;
  height: calc(var(--header-height) / 2);
}


.header__title, .headler__logo {
  flex: 0 1 auto;
}

.header__title {
  align-items: center;
}

.header__title h1, h2 {
  display: block;
  font-size: 16px;
  margin: 0;
  padding: 0 8px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.header__title h2 {

  color: deepskyblue;
}

</style>