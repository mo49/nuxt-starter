<template>
  <div data-page="top" class="container">
    <p>{{ $t('home.title') }}</p>
    <p>{{ $t('home.introduction') }}</p>
    <p>isFromTablet : {{isFromTablet}}</p>
    <p>{{$i18n.locale}}</p>
    <ul>
      <li><nuxt-link :to="$i18n.path('/product/1')">product 1</nuxt-link></li>
      <li><nuxt-link :to="$i18n.path('/product/2')">product 2</nuxt-link></li>
      <li><nuxt-link :to="$i18n.path('/product/3')">product 3</nuxt-link></li>

      <!-- <li><nuxt-link :to="switchLocalePath('en')">en product 1</nuxt-link></li> -->
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },
  computed: {
    isFromTablet() {
      return this.$ua.isFromTablet() || this.$isFromIpad()
    }
  }
}
</script>
