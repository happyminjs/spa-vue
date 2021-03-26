export default [
  {
    path: '/user/:id/:name', // 传入参数 id 和 name
    name: 'users',
    component: () => {
      return import('@/pages/user.vue')
    },
    meta: {
      requireAuth: true // 表示进入这个页面需要登录
    }
  },
  {
    path: '/router/:id',  // 传入参数id
    name: 'router',
    component: () => import('@/pages/router/router_child.vue'),
    children: [
      {
        path: 'one',
        name: 'routerOne',
        component: () => import('@/pages/router/router_one.vue')
      },
      {
        path: '/two',
        name: 'routerTwo',
        component: () => import('@/pages/router/router_two.vue')
      }
    ]
  },
]