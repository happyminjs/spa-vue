// 按需引入的，则在routes内部使用 import 函数动态引入
export default [
  {
    path: '/',
    name: 'home',
    component: () => {
      return import('@/pages/index.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => {
      return import('@/pages/login.vue')
    }
  },
  {
    // 处理异常路径，即不存在的路径的展示404页面
    path: '*',
    name: 'nopage',
    component () {
      return import('@/pages/404.vue')
    }
  }
]