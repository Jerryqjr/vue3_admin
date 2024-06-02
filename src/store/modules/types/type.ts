import { RouteRecordRaw } from "vue-router"

//定义小仓库数据state类型
export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[] //仓库存储生成菜单需要数组(数组)
  username: string
  avatar: string
}
