import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/user/:id/:name',
      name: 'users',
      component: () => {
        return import('../pages/user.vue')
      }
    },
    {
      path: '/router/:id',
      name: 'router',
      component: () => import('../pages/router/router_child.vue'),
      children: [
        {
          path: 'one',
          name: 'routerOne',
          component: () => import('../pages/router/router_one.vue')
        },
        {
          path: '/two',
          name: 'routerTwo',
          component: () => import('../pages/router/router_two.vue')
        }
      ]
    },
    {
      // 处理异常路径，即不存在的路径的展示404页面
      path: '*',
      name: 'nopage',
      component () {
        return import('../pages/404.vue')
      }
    }
  ]
})