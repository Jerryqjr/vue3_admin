<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <template v-for="(item) in menuList" :key="item.path">
        <el-menu :router="true">
            <!-- 没有子路由 -->
            <el-menu-item v-if="!item.children && !item.meta.hidden" :index="item.path">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
            <!-- 有子路由,但只有一个 -->
            <el-menu-item v-if="item.children && item.children.length == 1 && !item.meta.hidden"
                :item="item.children[0].path">
                <template #title>
                    <el-icon>
                        <component :is="item.children[0].meta.icon"></component>
                    </el-icon>
                    <span>
                        {{ item.children[0].meta.title }}
                    </span>
                </template>
            </el-menu-item>
            <!-- 有子路由,且个数大于1 -->
            <el-sub-menu v-if="item.children && item.children.length > 1 && !item.meta.hidden" :index="item.path">
                <template #title>
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.meta.title }}</span>
                </template>
                <Menus :menuList="item.children"></Menus>
            </el-sub-menu>
        </el-menu>
    </template>
</template>
<script setup lang="ts">
//获取父组件传递过来的全部路由数组
defineProps(['menuList'])
</script>
<script lang="ts">
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Menus'
}
</script>

<style scoped></style>