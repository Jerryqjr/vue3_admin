<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" v-if="flag" />
        </transition>
    </router-view>
</template>
<script setup lang="ts">
import { nextTick, watch, ref } from 'vue'
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore = useLayOutSettingStore()

//控制当前组件是否销毁
let flag = ref(true)
//监听仓库内部的数据,若发生过变化,则用户点击刷新按钮
watch(() => LayOutSettingStore.refresh, () => {
    flag.value = false
    nextTick(() => {
        flag.value = true
    })
})
</script>
<style scoped>
.fade-enter-from {
    opacity: 0;
    transform: scale(0);
}

.fade-enter-active {
    transition: all 1s;
}

.fade-enter-to {
    opacity: 1;
}
</style>