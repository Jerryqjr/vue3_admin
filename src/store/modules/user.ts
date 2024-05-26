//创建用户相关的小仓库
import { defineStore } from "pinia"
//引入接口
import { reqLogin } from "@/api/user/index"
//引入数据类型
import type { loginForm } from "@/api/user/type"

//创建用户相关的小仓库
const useUserStore = defineStore("User", {
  // State 定义 store 的初始状态
  state: () => {
    return {
      token: localStorage.getItem("TOKEN"), //用户唯一标识token
    }
  },
  // Actions 定义操作方法
  actions: {
    //用户登录方法
    async useLogin(data: loginForm) {
      const result = await reqLogin(data)
      console.log(result)
      //登录请求:成功200->token
      //登录请求:失败201->登录失败错误的信息
      if (result.code == 200) {
        // console.log(result)
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = result.data.token
        //本地存储持久化一份
        localStorage.setItem("TOKEN", result.data.token)
        return "ok"
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  // Getters 定义计算属性
  getters: {},
})
//对外暴露获取小仓库方法
export default useUserStore
