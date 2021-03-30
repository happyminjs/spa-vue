import Vue from 'vue'
import SwiperComponent from './index.vue'
import SwiperItemComponent from './swiper-item.vue'
let _Vue
export default {
  install(Vue, options){
    if (!_Vue){
      // 防止用户多次调用 use 方法
      _Vue = Vue;   
      Vue.component(SwiperComponent.name, SwiperComponent)   
      Vue.component(SwiperItemComponent.name, SwiperItemComponent)   
    }
  }
}