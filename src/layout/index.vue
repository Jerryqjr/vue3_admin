<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-container class="layout_container">
        <!-- 左侧菜单 -->
        <el-aside>
            <el-scrollbar class="scrollbar">
                <Logo></Logo>
                <!-- 展示菜单 -->
                <el-menu text-color="white" background-color="#001529">
                    <!-- 根据路由动态生成菜单 -->
                    <Menus :menuList="userStore.menuRoutes"></Menus>
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <!-- 顶部导航 -->
        <el-container>
            <el-header>2</el-header>
            <!-- 内容展示区域 -->
            <el-main>
                <routerview></routerview>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import Logo from '@/layout/logo/logo.vue'
import Menus from '@/layout/menu/index.vue'
//重新封装的routerview
import routerview from './main/index.vue'

//获取用户相关的小仓库
import useUserStore from "@/store/modules/user";
let userStore = useUserStore()
</script>
<style scoped lang="scss">
.layout_container {
    height: 100vh;

    .el-header,
    .el-main,
    .el-aside {
        display: flex;
        justify-content: start;
        align-items: start;
    }

    .el-header {
        background-color: greenyellow;
        height: $base-tabbar-height;
    }

    .el-aside {
        background-color: $base-menu-background;
        width: $base-menu-width;

        .scrollbar {
            color: white;
            width: 100%;

            .el-menu {
                border-right: none;
            }

        }
    }

    .el-main {
        background-color: skyblue;
    }
}
</style>