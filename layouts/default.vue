<template>
  <div class="wrapper" v-cloak>
    <CommonHeader />
    <nuxt/>
    <CommonFooter />
  </div>
</template>

<script>
import CommonHeader from '~/components/organisms/CommonHeader'
import CommonFooter from '~/components/organisms/CommonFooter'
export default {
  components: {
    CommonHeader,
    CommonFooter,
  }
}
</script>

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

body{
  @include pc-layout{
    font-size: $base-font-size--pc;
    line-height: $base-line-height--pc;
  }
  @include sp-layout{
    font-size: $base-font-size--sp;
    line-height: $base-line-height--sp;
    // 文字を選択コピーしたいときは外す
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}

// v-cloak
[v-cloak]{
  display: none;
}
@keyframes cloak-in{
  0%{opacity: 0;}
}

.wrapper{
  animation: cloak-in 1s;
  overflow: hidden; // IEで右側に余白が生まれる対策
  &[v-cloak]{
    opacity: 0;
  }
  @include pc-layout{
    width: 100%;
    min-width: $section_inner_width;
  }
  @include sp-layout{
    width: 100%;
  }
}

.inner{
  margin: 0 auto;
  @include pc-layout{
    width: $section_inner_width;
  }
  @include sp-layout{
    width: 100%;
  }
}
</style>
