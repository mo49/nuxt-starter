<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
*{
  box-sizing: border-box;
  outline: none;
  -webkit-overflow-scrolling: touch; // overflow-scrollのとき慣性スクロール有効
}

html {
  font-family: $font-family;
  font-feature-settings : "palt";
  color: $font-color-base;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
