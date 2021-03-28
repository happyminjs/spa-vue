import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = [];
const routerFiles = require.context('./router/', true, /\.router.js$/)
// require.context 方法可以直接引入 ./router/下的所有以 .router.js 结尾的子文件，返回的是文件路径组成的数组
routerFiles.keys().forEach((key, value) => {
  routers.push(...routerFiles(key).default)
});
let router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routers
})
router.beforeEach((to, from, next) => {
  console.log('router beforeEach ', to, from )
  if (to.meta.requireAuth) {
    // to 的页面需要登录状态，
    // 实际应用中还需要接口判断 token 是否有效
    let token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
})
export default router;