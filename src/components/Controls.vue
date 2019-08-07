<template>
<nav class="controls">
  <ul class="controls__list">
    <li>
      <button>
        <svg viewBox="0 0 128 128" width="64" height="64">
          <title>play</title>
          <path d="M39,16l50,50l-50,50Z" stroke="deepskyblue" stroke-width="2" stroke-linecap="bevel" />
        </svg>
      </button>

    </li>
  </ul>
</nav>
</template>
<style>
.controls {
  display: block;
}

ul.controls__list {
  padding: 0;
  margin: 0;
  flex: 1 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
}

ul.controls__list button {
  background: none;
  cursor: pointer;
  border: 2px solid deepskyblue;
}
</style>
<script>
export default {
  name: 'Controls'
}
</script>
