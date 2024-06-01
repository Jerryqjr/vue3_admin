//对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login", //命名路由
    meta: {
      title: "登录", //菜单标题
      hidden: true,
      icon: "Promotion", //文字左侧图标,支持element所有的图标
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
      icon: "Avatar",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled",
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
      icon: "DocumentDelete",
    },
  },
  {
    path: "/screen",
    component: () => import("@/views/screen/index.vue"),
    name: "Screen",
    meta: {
      title: "金融工具",
      hidden: false,
      icon: "Platform",
    },
  },
  {
    path: "/acl",
    component: () => import("@/layout/index.vue"),
    name: "Acl",
    meta: {
      title: "公告信息",
      hidden: false,
      icon: "Lock",
    },
    children: [
      {
        path: "/acl/user",
        component: () => import("@/views/acl/user/index.vue"),
        name: "AclUser",
        meta: {
          title: "用户管理",
          hidden: false,
          icon: "User",
        },
      },
      {
        path: "/acl/role",
        component: () => import("@/views/acl/role/index.vue"),
        name: "AclRole",
        meta: {
          title: "角色管理",
          hidden: false,
          icon: "UserFilled",
        },
      },
      {
        path: "/acl/menu",
        component: () => import("@/views/acl/menu/index.vue"),
        name: "AclMenu",
        meta: {
          title: "菜单管理",
          hidden: false,
          icon: "Menu",
        },
      },
    ],
  },

  {
    path: "/product",
    component: () => import("@/layout/index.vue"),
    name: "Product",
    meta: {
      title: "理财产品",
      hidden: false,
      icon: "Goods",
    },
    redirect: "/product/trademark",
    children: [
      {
        path: "/product/trademark",
        component: () => import("@/views/product/trademark/index.vue"),
        name: "Trademark",
        meta: {
          title: "品牌管理",
          icon: "ShoppingCart",
          hidden: false,
        },
      },
      {
        path: "/product/attr",
        component: () => import("@/views/product/attr/index.vue"),
        name: "Attr",
        meta: {
          title: "属性管理",
          icon: "Management",
          hidden: false,
        },
      },
      {
        path: "/product/spu",
        component: () => import("@/views/product/spu/index.vue"),
        name: "Spu",
        meta: {
          title: "Spu",
          icon: "SetUp",
          hidden: false,
        },
      },
      {
        path: "/product/sku",
        component: () => import("@/views/product/sku/index.vue"),
        name: "Sku",
        meta: {
          title: "Sku",
          icon: "ScaleToOriginal",
          hidden: false,
        },
      },
    ],
  },

  {
    path: "/screen",
    component: () => import("@/views/screen/index.vue"),
    name: "Screen",
    meta: {
      title: "个人中心",
      hidden: false,
      icon: "User",
    },
  },
  {
    path: "/screen",
    component: () => import("@/views/screen/index.vue"),
    name: "Screen",
    meta: {
      title: "客服",
      hidden: false,
      icon: "ChatDotRound",
    },
  },
  //任意路由
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "any",
    meta: {
      title: "任意路由",
      hidden: true,
      icon: "Finished",
    },
  },
]
