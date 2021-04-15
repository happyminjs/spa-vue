<template>
  <transition>
    <div class="swiper" v-if="isShow">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'swiper-item',
  data(){
    let children = this.$parent.$children.filter(child => {
      return child.$options.name === 'swiper-iterm'
    })
    return {
      index: children.length - 1
    }
  },
  computed: {
    isShow(){
      return this.$parent.currentSelected === this.index
    }
  }
}
</script>

<style lang="less" scoped>
.v-enter-active, v-leave-active {
  transition: all .5s linear;
}
.v-leave-to{
  transform: translateX(-100%);
}
.v-enter{
  transform: translateX(100%);
}
.v-enter-active{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
</style>