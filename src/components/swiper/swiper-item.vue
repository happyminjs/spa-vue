<template>
  <transition>
    <div class="swiper-item" v-if="isShow">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'swiper-item',
  data(){
    let children = this.$parent.$children.filter(child => {
      return child.$options.name === 'swiper-item'
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
.v-enter{ // 进入过渡的开始状态, 元素被插入之前生效,在元素被插入之后的下一帧移除
  transform: translateX(100%);
}
.v-enter-active{ // 进入过渡生效时的状态,在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}



.v-enter-to{ // 进入过渡的结束状态,在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
  
}
.v-leave{ // 离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
.v-leave-active{ // 
  transition: all .5s linear;
}
.v-leave-to{
  transform: translateX(-100%);
}

.swiper-item {
  height: 100%;
}
</style>