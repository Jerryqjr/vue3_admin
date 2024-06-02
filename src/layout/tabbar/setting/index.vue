<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-button type="default" size="default" icon="Refresh" circle @click="updateRefresh"></el-button>
    <el-button type="default" size="default" icon="FullScreen" circle @click="fullScreen"></el-button>
    <el-button type="default" size="default" icon="Setting" circle></el-button>
    <img :src="userStore.avatar" style="height: 32px; width: 32px;margin: 0px 10px;">
    <!-- 下拉菜单 -->
    <el-dropdown>
        <span class="el-dropdown-link">
            {{ userStore.username }}
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
import useLayOutSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user';
let LayOutSettingStore = useLayOutSettingStore()
let userStore = useUserStore()
//点击按钮回调
const updateRefresh = () => {
    LayOutSettingStore.refresh = !LayOutSettingStore.refresh
}
const fullScreen = () => {
    //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,非全屏:false]
    let full = document.fullscreenElement
    //切换为全屏模式
    if (!full) {
        //文档根节点的方法requestFullscreen来实现全屏模式
        document.documentElement.requestFullscreen()
    } else {
        //退出全屏模式
        document.exitFullscreen()
    }
}
</script>
<style scoped></style>