<i18n>
{
  "ja": {
    "hello": "こんにちは"
  },
  "en": {
    "hello": "hello"
  }
}
</i18n>

<template>
  <div data-page="top" class="container">
    <p>{{ $t('hello') }}</p>
    <p>isFromTablet : {{isFromTablet}}</p>
    <p>{{$i18n.locale}}</p>
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
