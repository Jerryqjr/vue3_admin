<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- 顶部左侧静态 -->
    <el-icon style="margin-right: 10px;margin-left: 10px;" @click="changeIcon">
        <!-- 动态组件 -->
        <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 左侧面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <!-- 动态展示路由名字与标题 -->
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title"
            :to="item.path">
            <!-- 图标 -->
            <el-icon>
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span style="margin: 0px 5px;">
                {{ item.meta.title }}
            </span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script setup lang="ts" name="Breadcrumb">
import { useRoute } from 'vue-router'
import useLayOutSettingStore from "@/store/modules/setting";

//获取路由对象
let $route = useRoute()
//配置layout相关仓库
let LayOutSettingStore = useLayOutSettingStore()
//点击图标的方法
const changeIcon = () => {
    LayOutSettingStore.fold = !LayOutSettingStore.fold
}

</script>
<style scoped></style>