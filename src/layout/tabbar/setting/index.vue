<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-button type="default" size="default" icon="Refresh" circle></el-button>
    <el-button type="default" size="default" icon="FullScreen" circle></el-button>
    <el-button type="default" size="default" icon="Setting" circle></el-button>
    <img src="/public/logo.png" style="height: 32px; width: 32px;margin: 0px 10px;">
    <!-- 下拉菜单 -->
    <el-dropdown>
        <span class="el-dropdown-link">
            Jerry
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script setup lang="ts" name="Setting">

</script>
<style scoped></style>