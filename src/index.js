import Vue from 'vue'
import router from './router/index'
import View from './index.vue'

export default new Vue({
  el: '#app',
  render: (h) => h(View),
  router: router
})

