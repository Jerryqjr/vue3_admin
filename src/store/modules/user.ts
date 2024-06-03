//创建用户相关的小仓库
import { defineStore } from "pinia"
//引入接口
import { reqLogin, reqUserInfo } from "@/api/user/index"
//引入数据类型
import type { loginForm, loginResponseData } from "@/api/user/type"
import { UserState } from "./types/type"
//引入路由(常量路由)
import { constantRoute } from "@/router/routes"
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from "@/utils/token"
//创建用户相关的小仓库
const useUserStore = defineStore("User", {
  // State 定义 store 的初始状态
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户唯一标识token
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组(路由)
      username: "",
      avatar: "",
    }
  },
  // Actions 定义操作方法(异步)
  actions: {
    //用户登录方法
    async useLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data)
      //登录请求:成功200->token
      //登录请求:失败201->登录失败错误的信息
      if (result.code == 200) {
        // console.log(result)
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = result.data.token
        //本地存储持久化一份
        SET_TOKEN(result.data.token)
        return "ok"
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    //获取用户信息方法
    async userInfo() {
      //获取用户信息进行存储[头像\名字]
      const result = await reqUserInfo()
      //如果获取用户信息成功
      if (result.code == 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
      }
    },
    //退出登录
    async userLogout() {
      //目前没有mock接口:退出登录接口(通知服务器本次用户的唯一标识失效)
      ;(this.token = ""), (this.username = ""), (this.avatar = "")
      REMOVE_TOKEN()
    },
  },
  // Getters 定义计算属性
  getters: {},
})
//对外暴露获取小仓库方法
export default useUserStore
