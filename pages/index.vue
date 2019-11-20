<template>
  <div data-page="top" class="container">
    <p>isFromTablet : {{isFromTablet}}</p>
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
