<template>
  <div class="toast-box">
    slot
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.toast-box {
  position: fixed;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  transform: translate(-50%,-50%);
  max-width: 80vw;
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
}
</style>