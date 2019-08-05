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
      <h1>{{ title }}</h1>
    </div>
    <nav class="header__nav">
      <label class="nav__burger">
        <div class="nav__burger-icon"></div>
      </label>
    </nav>
  </div>
  <div class="header__bottom">
    <p>{{ description }}</p>
    
  </div>
</div>
    
</template>
<script>
export default {
  props: {
    title: String,
    description: String
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
  padding: 16px;
  height: calc(var(--header-height) / 2);
}

.header__bottom p {
  display: block;
  margin: 0;
  flex: 1 0;
}

.header__bottom nav {
  flex: 0 1;
}

.header__bottom nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.header__title, .headler__logo {
  flex: 0 1 auto;
}

.header__nav {
  flex: 1 0 auto;
  margin-right: 16px;
  display: flex;
  justify-content: flex-end;
}

.header__title h1 {
  font-size: 24px;
  color: white;
  margin: 0;
}

.nav {
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
}

.nav__burger {
  cursor: pointer;
  display: block;
  right: 0;
  height: 48px;
  position: relative;
  width: 48px;
}

.nav__burger-icon {
  background: white;
  height: 8px;
  width: 100%;
  transform: translateY(20px);
}

.nav__burger-icon::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 12px;
  background: linear-gradient(to bottom, skyblue 0%, skyblue 50%, pink 50%, pink 100%);
  transform: translateY(-12px);
}

.nav__burger:hover .nav__burger-icon::before {
  transform: rotate(45deg);
}

.nav__burger-icon, .nav__burger-icon::after, .nav__burger-icon::before  {
  transition: transform 250ms ease-in-out, background 500ms ease-in-out, height 250ms ease-in-out;
}

.nav__burger-icon::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 12px;
  background: linear-gradient(to top, skyblue 0%, skyblue 50%, pink 50%, pink 100%);
  
  transform: translateY(8px);
}

.nav__burger:hover .nav__burger-icon {
  background: transparent;
}

.nav__burger:hover .nav__burger-icon::after {
  transform: rotate(-45deg);
}

</style>