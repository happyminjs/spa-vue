<template>
  <div class="user-box">
    userererer
    <div class="placeholder">
      {{$route.params.name}}
    </div>
  </div>
</template>

<script>
import Stoage from '@src/utils/stoage.js'
console.log('22sdf', new Stoage());
export default {
  data() {
    return {

    }
  },
  watch: {
    '$route': (to, from) => {
      console.log('from: ', from.path);
      console.log('to: ', to.path);
      // 对路由变化作出响应...
    }
  },
  mounted() {
    console.log('this is user', this.$route.params);
  }
}
</script>

<style lang="less" scoped>
.user-box {
  color: #0a77f3;
  .placeholder {
    height: 1000px;
    width: 100%;
    background-color: antiquewhite;
  }
}
</style>