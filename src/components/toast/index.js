import Vue from 'vue'
import MessageComponent from './index.vue'
// 获取当前组件的实例
let getInstance = () => {
  let vm = new Vue({
    render(h){
      return h(MessageComponent)
    }
  }).$mount(); // $mount没有参数时会在内存中进行挂载，就可以取到 vm.$el 了
  document.body.appendChild(vm.$el)
  // 获取唯一的一个儿子
  let component = vm.$children[0]
  return {
    add(options){
      component.add(options)
    }
  }
}
let instance;
let getInst = () => {
  // 返回唯一的实例，防止每次调用都新创建一个实例
  instance = instance || getInstance()
  return instance
}
const Message = {
  info(options){
    getInst().add(options);
  },
  warn(){},
  success(){},
  error(){}
}

export {
  Message
}
// 调用方法一的写法
// import { Message } from '../components/toast/index.js'
// Message.info({})


// ----------------  可以同时存在，只是两种不同的调用方法的导出  -----------------------

let _Vue
export default {
  install(Vue, options){
    if (!_Vue){
      // 防止用户多次调用 use 方法
      _Vue = Vue;
      let $message = {}
      Object.keys(Message).forEach(type => {
        $message[type] = Message[type]
      })
      Vue.prototype.$message = $message;
    }
  }
}
// 调用方法二的写法
// import Message from '../components/toast/index.js'
// Vue.use(Message, {duration: 1000})