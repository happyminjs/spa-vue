<template>
  <div id="app" class="content">
    <div class="head-box">
      header
    </div>
    <div class="main">
      <div class="title-box">
        <ul class="nav-box">
          <li v-for="(router, index) in routerData" :key="index" class="nav-one">
            <router-link v-if="router.path" :to="routerPath(router.path, router.param)">{{router.name}}</router-link> 
            <a href="javascript:void(0)" v-else>{{router.name}}</a>
            <ul v-if="router.children && router.children.length" class="nav-two">
              <li v-for="(routerChild, idx) in router.children" :key="idx">
                <router-link :to="routerPath(routerChild.path, routerChild.param)">{{routerChild.name}}</router-link>  
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="content-box">
        <router-view/>
      </div>
    </div>
    <div class="foot-box">
      footer
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerData: [
        {
          path: '/',
          name: '首页',
          param: '',
          children: []
        },
        {
          path: '/login',
          name: '登录',
          param: ''
        },
        {
          path: '/router/aaa',
          name: 'router aaa',
          param: '',
          children: [
            {
              path: '/router/aaa/one',
              name: 'router aaa/one'
            }
          ]
        },
        {
          path: '/two',
          name: 'router two',
          param: '',
          children: []
        },
        {
          path: '',
          name: 'user',
          param: '32/sss',
          children: [
            {
              path: '/user/32/sss',
              name: 'User111'
            },
            {
              path: '/user/554/LALAS',
              name: 'User222'
            }
          ]
        },
        {
          path: '/nopagesss',
          name: '404'
        }
      ]
    }
  },
  computed: {
    routerPath(){
      return function(path = '', param = ''){
        return path + param
      }
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
* {
  margin: 0;
  padding: 0;
}
html{
  margin: 0;
  padding: 0;
  height: 100%;
  li{
    list-style: none;
  }
  body{
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 14px; /* no */
    .content {
      min-height: 100%;
      position: relative;
      .main{
        position: relative;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        padding: 50px 0;
        margin-top: -50px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        min-height: 100%;
        .title-box {
          background-color: rgb(211, 253, 228);
          box-sizing: border-box;
          height: 100%;
          box-sizing: border-box;
          width: 180px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          border-right: 1px solid rgb(204, 204, 204);
          padding: 0;
          overflow-y: scroll;
          .nav-one {
            a {
              color: rgb(6, 65, 29);
              text-decoration: none;
            }
            font-size: 16px;
            padding: 8px 10px;
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid #fff;
            .nav-two {
              padding-left: 10px;
              background-color: #99f9bf;
            }
          }
        }
        .content-box {
          flex-grow: 1;
          box-sizing: border-box;
          overflow-y: scroll;
        }
      }
    }
    .head-box {
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      background-color: rgb(80, 192, 127);
      color: #fff;
      text-align: center;
    }
    .foot-box {
      position: absolute;
      bottom: 0;
      height: 50px;
      line-height: 50px;
      background-color: rgb(140, 189, 160);
      color: #fff;
      width: 100%;
      text-align: center;
      vertical-align: middle;
    }
  }
}
</style>