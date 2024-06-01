import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
//引入vite-plugin-vue-setup-extend
import vueSetupExtend from "vite-plugin-vue-setup-extend"
import { UserConfigExport, ConfigEnv } from "vite"
import { viteMockServe } from "vite-plugin-mock"
import vue from "@vitejs/plugin-vue"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
    }),
    viteMockServe({
      localEnabled: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
    },
  },
  //scss全局变量的配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
})
