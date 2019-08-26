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
      <progress class="controls__progress" max="100" value="33"></progress>
    </li>
    <li>
      01:23
    </li>
  </ul>
</nav>
</template>
<style>
.controls {
  display: flex;
  flex: 1;
  align-items: center;
}

.controls__menu {
  padding: 0;
  margin: 0;
  flex: 1 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}

.controls__menu li {
  flex: 1;
}

.controls__menu li.controls__menu-item--progress {
  flex: 3;
}

.controls__button {
  background: none;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid deeppink;
  margin: 4px;
  padding: 0 6px;
  height: 52px;
}

.controls__button:hover {
  border: 2px solid yellow;
}

.controls__button:active {
  border: 2px solid white;
  fill: white;
}

.controls__button--play svg {
  fill: deepskyblue;
}

.controls__button--pause svg {
  fill: deeppink;
}

.controls__button:active svg {
  fill: white;
}

.controls__progress {
  display: block;
  width: 100%;
  align-items: center;
  appearance: none;
  height: 8px;
  
  border: none;
}

.controls__progress[value]::-webkit-progress-bar {
  background: #222;
}

.controls__progress[value]::-webkit-progress-value {
  background: hotpink;
}


</style>
<script>
export default {
  name: 'Controls'
}
</script>
