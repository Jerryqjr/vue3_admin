//引入模版的全局样式
import "@/styles/index.scss"
import { createApp } from "vue"
import App from "./App.vue"
//引入插件与样式
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import "virtual:svg-icons-register"

//引入路由
import router from "./router"

const app = createApp(App)
//安装自定义插件
app.use(ElementPlus, { locale: zhCn })
//注册模版路由
app.use(router)
app.mount("#app")

/* //测试代码:测试假的接口能否使用
import axios from "axios"
axios({
  url: "/api/user/login",
  method: "post",
  data: {
    username: "admin",
    password: "111111",
  },
}) */
