//登录接口需要携带参数ts类型
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token?: string
  message?: string
}

//登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

//定义服务器返回用户相关的数据类 型
interface user {
  checkUser: string
}
export interface userResponseData {
  code: number
  data: user
}
