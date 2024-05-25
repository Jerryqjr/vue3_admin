//统一管理项目用户相关的接口
import requset from "@/utils/request"
import type { loginForm, loginResponseData, userResponseData } from "./type"
//统一管理接口
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}

//暴露请求函数
//登录接口方法
export const reqLogin = (data: loginForm) =>
  requset.post<loginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () => requset.get<userResponseData>(API.USERINFO_URL)
