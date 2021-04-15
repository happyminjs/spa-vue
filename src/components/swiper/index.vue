<template>
  <div class="swiper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 1000
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {
      currentSelected: this.initialIndex,
      len: 0, // item 的个数
    }
  },
  mounted(){
    this.len = this.$children.filter(child => {
      return child.$options.name == 'swiper-item'
    }).length;
    this.run();
  },
  methods: {
    run(){
      if (this.autoplay) {
        this.timer = setInterval(() => {
          let index = this.currentSelected;
          let newIndex = index + 1;
          if (newIndex === this.len){
            newIndex = 0;
          }
          if (newIndex === -1){
            newIndex = this.len - 1;
          }
          this.currentSelected = newIndex
        }, this.delay)
      }
    },
    beforeDestroy(){
      clearInterval(this.timer)
    }
  }
}
</script>