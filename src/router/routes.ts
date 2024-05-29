//对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login", //命名路由
    meta: {
      title: "登录", //菜单标题
      hidden: true,
    },
  },
  //登录成功展示数据的路由
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "home",
    meta: {
      title: "layout",
      hidden: false,
    },
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
        },
      },
      {
        path: "/ceshi",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "测试",
          hidden: false,
        },
      },
    ],
  },
  //404
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404",
      hidden: true,
    },
  },
  //任意路由
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "any",
    meta: {
      title: "任意",
      hidden: true,
    },
  },
]
