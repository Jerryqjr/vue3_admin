//路由鉴权
import router from "@/router/index"
import nprogress from "nprogress"
//引入进度条样式
import "nprogress/nprogress.css"
//全局守卫:项目当中任意路由切换都会触发的钩子
console.log(123)

//全局前置守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  nprogress.start()
  next()
})
//全局后置守卫
router.afterEach((to, from) => {
  // to and from are both route objects.
  nprogress.done()
})

//进度条业务:nprogress
