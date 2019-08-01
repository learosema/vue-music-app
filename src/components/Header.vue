<template>
  <div class="header">
    <div class="header__logo">
      <svg viewBox="0 0 64 128" width="64" height="64">
        <path d="M16,16l50,50l-50,50Z" stroke="hotpink" fill="black" stroke-width="2" />
      </svg>
    </div>
    <div class="header__title">
      <h1>Vue Music Player</h1>
    </div>
  </div>
</template>
<style>

.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: black;
  color: white;
  font-family: sans-serif;
  display: flex;
  align-items: center;
}

.header__title h1 {
  font-size: 24px;
  margin: 0;
}

</style>