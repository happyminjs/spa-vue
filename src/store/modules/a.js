export default {
  state: {
    age: 'a100'
  },
  // modules: {
  //   aChild: {
  //     namespaced: false,
  //     state: {
  //       age: 'aChild 100'
  //     },
  //     getters: {
  //       getAge(state, getters, rootState) {
  //         console.log('aaa module', state, getters, rootState)
  //         return state.age + 20
  //       }
  //     }
  //   }
  // },
  getters: {
    // 基于 state 的数据处理，不改变state内数据，参数默认是 state
    // 组件内调用方式 $store.getters.getAge
    getAge(state, getters, rootState){
      return state.age + 20
    },
    // 通过 return 一个 function 的方式，来传递参数
    getAgeParam: (state) => {
      return (num) => {
          return state.age + num;
      }
    }
  },
  // 更新状态的唯一方式 就是通过 mutation ，异步的也是通过 actions 来调用 mutation
  mutations: {
    // 修改 state 中状态的数据，同步的； 尽量不要使用异步，严格模式时会报错
    // 组件内使用方式是 $store.commit('syncChangeAge',10)
    /**
     * 
     * @param {*} state 默认的参数，值固定是 state
     * @param {*} payload 载荷，即承载的数据 
     */
    syncChangeAge(state, payload){
      // 同步更改状态
      state.age += payload
    }
  },
  actions: {
    asyncChangeAge({commit}, payload){
    // 异步修改 state 中的状态数据，但是最后也是 commit 调用 mutations 内方法来修改state中的数据
    // 组件内使用方式是 $store.dispatch('asyncChangeAge',3)
    // 第一个参数是 store，可以直接解构赋值 commit
      setTimeout(() => {
        commit('syncChangeAge', payload)
      }, 1000)
    }
  }
}