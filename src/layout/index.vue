<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-container class="layout_container">
        <!-- 左侧菜单 -->
        <el-aside>
            <logo></logo>
        </el-aside>
        <!-- 顶部导航 -->
        <el-container>
            <el-header>2</el-header>
            <!-- 内容展示区域 -->
            <el-main>3</el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import Logo from '@/layout/logo/logo.vue'
</script>
<style scoped lang="scss">
.layout_container {
    height: 100vh;

    .el-header,
    .el-main,
    .el-aside {
        display: flex;
        justify-content: center;
        align-items: start;
    }

    .el-header {
        background-color: greenyellow;
        height: $base-tabbar-height;
    }

    .el-aside {
        background-color: $base-menu-background;
        width: $base-menu-width;
    }

    .el-main {
        background-color: skyblue;
    }
}
</style>