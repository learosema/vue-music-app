<template>
<nav class="controls">
  <ul class="controls__menu">
    <li>
      <button class="controls__button controls__button--play">
        <svg viewBox="0 0 128 128" width="48px" height="48px">
          <title>play</title>
          <path d="M39,16l50,50l-50,50Z" />
        </svg>
      </button>
      <button class="controls__button controls__button--pause">
        <svg viewBox="0 0 128 128" width="48px" height="48px">
          <title>pause</title>
          <rect x="8" y="16" width="50" height="96" />
          <rect x="70" y="16" width="50" height="96" />
        </svg>
      </button>
    </li>
  </ul>
</nav>
</template>
<style>
.controls {
  display: flex;
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



</style>
<script>
export default {
  name: 'Controls'
}
</script>
