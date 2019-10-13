<template>
  <div class="nopage-box">
    this is no page 404 la
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted () {
    console.log('index.vue asd s', this.$route)
  }
}
</script>

<style lang="less" scoped>
.nopage-box {
  color: #f37373;
}
</style>