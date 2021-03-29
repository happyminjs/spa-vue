import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 默认执行当前插件的install方法
const rootModule = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
}
const files = require.context('./modules/', false, /\.js$/)
files.keys().forEach((key, index) => {
  let store = files(key).default
  const moduleName = key.replace(/^\.\//, '').replace(/\.js$/, '')
  const modules = rootModule.modules || {}
  modules[moduleName] = store;
  modules[moduleName].namespaced = true
  rootModule.modules = modules
});
console.log(rootModule)
const store = new Vuex.Store(rootModule);
export default store;





// 通过 Vuex 中的属性 Store，创建一个 Store 的实例
// export default new Vuex.Store({
//   modules: {
//     a: {
//       state: {
//         age: 'a100'
//       }
//     },
//     b: {
//       state: {
//         age: 'b100'
//       }
//     }
//   },
//   state: {
//     // 状态，可以理解为 单一数据源
//     // 组件内可直接 $store.state 使用
//     age: 10
//   },
//   getters: {
//     // 基于 state 的数据处理，不改变state内数据，参数默认是 state
//     // 组件内调用方式 $store.getters.getAge
//     getAge(state){
//       return state.age + 20
//     },
//     // 通过 return 一个 function 的方式，来传递参数
//     getAgeParam: (state) => {
//       return (num) => {
//           return state.age + num;
//       }
//     }
//   },
//   // 更新状态的唯一方式 就是通过 mutation ，异步的也是通过 actions 来调用 mutation
//   mutations: {
//     // 修改 state 中状态的数据，同步的； 尽量不要使用异步，严格模式时会报错
//     // 组件内使用方式是 $store.commit('syncChangeAge',10)
//     /**
//      * 
//      * @param {*} state 默认的参数，值固定是 state
//      * @param {*} payload 载荷，即承载的数据 
//      */
//     syncChangeAge(state, payload){
//       // 同步更改状态
//       state.age += payload
//     }
//   },
//   actions: {
//     asyncChangeAge({commit}, payload){
//     // 异步修改 state 中的状态数据，但是最后也是 commit 调用 mutations 内方法来修改state中的数据
//     // 组件内使用方式是 $store.dispatch('asyncChangeAge',3)
//     // 第一个参数是 store，可以直接解构赋值 commit
//       setTimeout(() => {
//         commit('syncChangeAge', payload)
//       }, 1000)
//     }
//   }
// })