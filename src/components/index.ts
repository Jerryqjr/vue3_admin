import SvgIcon from "./SvgIcon/index.vue"
import Pagination from "./Pagination/index.vue"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

const allGlobalCompent: unknown = { SvgIcon, Pagination }

export default {
  install(app: unknown) {
    //注册项目全部的全局组件
    Object.keys(allGlobalCompent).forEach((key) => {
      app.component(key, allGlobalCompent[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
