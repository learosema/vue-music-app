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
    <nav class="nav">
      <div class="nav__burger">
      </div>
    </nav>
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
  flex: 1 1 auto;
  align-items: center;
}

.header > * {
  flex: 1 100%;
}

.header__title h1 {
  font-size: 24px;
  margin: 0;
}

.nav {
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
}

.nav__burger {
  cursor: pointer;
  right: 0;
  background: #fff;
  height: 8px;
  position: relative;
  width: 48px;
}

.nav__burger::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 14px;
  background: linear-gradient(to bottom, skyblue 0%, skyblue 50%, hotpink 50%, hotpink 100%);

  transform: translateY(-14px);
}

.nav__burger:hover::before {
  transform: rotate(45deg);
}

.nav__burger, .nav__burger::after, .nav__burger::before  {
  transition: transform 250ms ease-in-out, background 500ms ease-in-out, height 250ms ease-in-out;
}

.nav__burger::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 14px;
  background: linear-gradient(to top, skyblue 0%, skyblue 50%, hotpink 50%, hotpink 100%);
  
  transform: translateY(8px);
}

.nav__burger:hover {
  background: transparent;
}

.nav__burger:hover::after {
  transform: rotate(-45deg);
}

</style>