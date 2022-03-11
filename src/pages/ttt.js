import Vue from 'vue'
export default Vue.component(
  'ttt', {
    data(){
      return {
        messs: 'sssssssssss',
      }
    },
    template: '<div>阿斯顿发撒旦法{{messs}}</div>',
    mounted(){
      console.log('aaaaaaaaaa', this.messs, this)
    },
  }
)

// export let ttt = {
  
  // render(h:any){
  //   return h('<div>阿斯顿发撒旦法{{messs}}</div>')
  // }
// }