<template>
  <div class="login-page">
    <div class="login-input">
      <input type="text" placeholder="请输入用户名" v-model="userName">
      <input type="password" placeholder="请输入密码" v-model="password">
      <div class="login-btn">
        <div class="confirm-btn" @click="loginFn">登录</div>
        <div class="cancle-btn">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userName: '',
      password: ''
    }
  },
  mounted() {
    // console.log('aaa', this.$router)
  },
  methods: {
    loginFn(){
      if (!this.userName || !this.password) {
        alert('输入用户名和密码')
      } else {
        localStorage.setItem('token', this.userName + this.password)
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login-page {
  width: 100%;
  height: 100%;
  position: relative;
  .login-input {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    input {
      width: 200px;
      height: 18px;
      padding: 4px 5px;
      margin-bottom: 20px;
    }
  }
  .login-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 200px;
    div{
      padding: 8px 15px;
      color: #fff;
      border-radius: 4px;
    }
    .confirm-btn {
      background-color: rgb(140, 189, 160);
    }
    .cancle-btn {
      background-color: #c9c9c9;
    }
  }
}
</style>