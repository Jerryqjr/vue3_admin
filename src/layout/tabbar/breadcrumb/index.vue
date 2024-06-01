<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- 顶部左侧静态 -->
    <el-icon style="margin-right: 10px;margin-left: 10px;" @click="changeIcon">
        <!-- 动态组件 -->
        <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 左侧面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script setup lang="ts" name="Breadcrumb">
import useLayOutSettingStore from "@/store/modules/setting";
//配置layout相关仓库

let LayOutSettingStore = useLayOutSettingStore()
//点击图标的方法
const changeIcon = () => {
    LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>
<style scoped></style>