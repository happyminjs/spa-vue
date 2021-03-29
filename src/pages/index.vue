<template>
  <div class="index-box">
    <p>{{$store.state}}</p>
    <button @click="$store.commit('syncChangeAge',10)">同步更改</button>
    <button @click="$store.dispatch('asyncChangeAge',3)">异步更改</button>
    <p>geter 取到的 age 是 {{$store.getters['a/getAge']}}</p>
    <div class="grid-box">
      <div class="item item1">
        <p>111111</p>
      </div>
      <div class="item">
        <p>222</p>
      </div>
      <div class="item">
        <p>333</p>
      </div>
      <div class="item">
        <p>444</p>
      </div>
    </div>
    <div style="margin: 20px 0; border-top: 1px solid; padding-top: 10px"></div>
    <div>
      <div class="btn" @click="redict">点我啊</div>
    </div>
    <div class="more"></div>
  </div>
</template>

<script>
import Stoage from '@src/utils/stoage.js'
// import tesss from '@src/utils/test.js'
export default {
  data() {
    return {
      checkVal: false
    }
  },
  watch: {
    checkVal (newval, oldval) {
      console.log(newval);
    }
  },
  methods: {
    redict() {
      // this.$router.push('/user/222/sdfwer')
      this.$router.push({
        name: 'users',
        params: {
          id: '233',
          name: 'sadfewr'
        }
      })
    }
  },
  mounted () {
    console.log('index.vue asd s', this.$store.getters)
  }
}
</script>

<style lang="less" scoped>
.index-box {
  --text-color: #080;
  // color: var(--text-color);
  color: var(--head-color, black);
  .btn {
    display: inline-block;
    border: 1px solid #aaaaaa;
    border-radius: 8px;
    padding: 4px 10px;
    position: relative;
  }
  .btn::after{
    display: inline-block;
    content: '';
    position: relative;
    width: 10px;
    height: 10px;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    transform: rotate(-45deg);
  }
  .grid-box {
    font-size: 14px;
    color: #252525;
    display: grid;
    // display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    // grid-template-columns: repeat(auto-fill, 100px);
    // grid-template-rows: repeat(2, 25%) 30%;

    grid-row-gap: 10px;
    grid-column-gap: 10px;

    // grid-template-columns: 100px 100px 100px;
    grid-template-rows: 50px 50px;
    grid-template-areas: 'a . a' 'd e f' 'g h i';
  }
  .grid-box .item {
    background-color: #f79f9f;
    &:nth-child(odd) {
      background-color: #f0e882;
    }
    &.item1{
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }
  .more {
    margin-top: 8px;
    width: 20px;
    height: 20px;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    transform: rotate(-45deg);
  }
}
</style>