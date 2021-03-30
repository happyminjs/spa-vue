// this.$message('aaa')
// install 和 Vue.use 成对使用

<template>
  <div class="messages" v-if="messages.length">
    <div v-for="msg in messages" :key="msg.id">{{msg.message}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      messages: []
    }
  },
  mounted(options){
    console.log('aaaaaa', options)
    this.id = 0; // 表示当前弹层的唯一标识
  },
  methods: {
    add(options){
      let id = this.id++;
      let layer = {...options, id}
      this.messages.push(layer)
      layer.timer = setTimeout(() => {
        this.remove(layer)
      }, options.duration);
    },
    remove(layer) {
      clearTimeout(layer.timer)
      this.messages = this.messages.filter(message => {
        return message.id !== layer.id
      })
    }
  }
}
</script>

<style lang="less" scoped>
.messages{
  z-index: 999;
  position: fixed;
  display: block;
  top: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgb(211, 211, 211, 0.8);
  padding: 5px 15px;
}
</style>