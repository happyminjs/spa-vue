import Vue from 'vue'
import router from './router/index'
import store from './store/index'
import View from './index.vue'

// import Message from './components/toast/index'
// Vue.use(Message, {'aaaaa': 222})

function VueErrorHandler(_Vue){
  _Vue.config.errorHandler = function (err, vm, info) {
    // handle error  
    // error 是错误内容，info vue 特定的错误信息，比如错误所在的生命周期钩子
    console.log('vue erroor', err, vm, info)
    // logErrorToMyService(error, info);
  }
}
VueErrorHandler(Vue)
let  info = {a: 1, b: 2}
export default new Vue({
  el: '#app',
  info,
  render: (h) => h(View),
  router: router,
  store  // 在vue初始化的过程中， 注入了一个 store 属性，内部会将这个属性放到每个组件的 $store 上
})

