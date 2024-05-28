<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="logo" v-if="setting.logoHidden">
        <img :src="setting.logo" alt="">
        <p>{{ setting.title }}</p>
    </div>
</template>
<script setup lang="ts">
//引入设置标题与logo位置配置文件
import setting from '@/setting'
</script>
<style scoped lang="scss">
.logo {
    display: flex;
    width: 100%;
    height: $base-menu-logo-height;
    color: white;
    padding: 20px;

    img {
        width: 50px;
        height: 50px;
    }

    p {
        font-size: $base-logo-title-fontsize;
        margin-left: 10px;
    }
}
</style>