<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-container class="layout_container">
        <!-- 左侧菜单 -->
        <el-aside :class="{ fold: LayOutSettingStore.fold }">
            <el-scrollbar class="scrollbar">
                <Logo></Logo>
                <!-- 展示菜单 -->
                <el-menu :collapse="LayOutSettingStore.fold" :default-active="$route.path" text-color="white"
                    background-color="#001529" :router="true">
                    <!-- 根据路由动态生成菜单 -->
                    <Menus :menuList="userStore.menuRoutes"></Menus>
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <!-- 顶部导航 -->
        <el-container>
            <el-header>
                <!-- layout组件的顶部导航tabbar -->
                <Tabbar></Tabbar>

            </el-header>
            <!-- 内容展示区域 -->
            <el-main>
                <routerview></routerview>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts" name="Layout">
import Logo from '@/layout/logo/logo.vue'
import Menus from '@/layout/menu/index.vue'
//重新封装的routerview
import routerview from './main/index.vue'
//引入tabbar组件
import Tabbar from '@/layout/tabbar/index.vue'
//获取用户相关的小仓库
import useUserStore from "@/store/modules/user";
import useLayOutSettingStore from '@/store/modules/setting';
let userStore = useUserStore()

let LayOutSettingStore = useLayOutSettingStore()
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
        height: $base-tabbar-height;
        padding: 0;
    }

    .el-aside {
        background-color: $base-menu-background;
        width: $base-menu-width;
        transition: all .3s;

        .scrollbar {
            color: white;
            width: 100%;

            .el-menu {
                border-right: none;
            }

        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .el-main {
        background-color: skyblue;
    }
}
</style>