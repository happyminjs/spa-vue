<template>
  <div id="app" class="content">
    <div class="head-box">
      header
    </div>
    <div class="nav">
      <router-link to="/">Index</router-link>  
      <router-link to="/router/aaa/one">router one</router-link>  
      <router-link to="/router/aaa">router one</router-link>  
      <router-link to="/two">router two</router-link>  
      <router-link to="/user/32/sss">User111</router-link>
      <router-link to="/user/33/aaa">User222</router-link>
      <router-link to="/nopagesss">404</router-link>
    </div>
    <router-view/>
    <div class="foot-box">
      footer
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  // watch: {
  //   '$route': (to, from) => {
  //     console.log('from: ', from.path);
  //     console.log('to: ', to.path);
  //     // 对路由变化作出响应...
  //   }
  // },
  mounted() {
    
  }
}
</script>

<style lang="less">
html{
  margin: 0;
  padding: 0;
  height: 100%;
  body{
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 14px; /* no */
    .content {
      min-height: 100%;
      position: relative;
      .nav a {
        font-size: 16px;
        margin: 5px 10px; /* no */
      }
    }
    .head-box {
      width: 100%;
      height: 1rem;
      line-height: 0.9rem;
      font-size: 16px;
      background-color: rgb(80, 192, 127);
      color: #fff;
      text-align: center;
    }
    .foot-box {
      position: absolute;
      bottom: 0;
      height: 1rem;
      line-height: 0.9rem;
      background-color: rgb(140, 189, 160);
      color: #fff;
      width: 100%;
      text-align: center;
      vertical-align: middle;
    }
  }
}
</style>