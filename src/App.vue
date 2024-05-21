<template>
  <div>
    <el-button type="primary">按我</el-button>
  </div>
  <div>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </div>
  <svg-icon name="home" color="red" width="100px" height="100px"></svg-icon>
  <h1>哈哈</h1>
</template>
<script setup lang="ts">
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import SvgIcon from './components/SvgIcon/index.vue';
// console.log(import.meta.env)
import request from '@/utils/request';
import { onMounted } from 'vue';
//当组件挂载完毕时测试发一个请求
onMounted(() => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111'
    }
  }).then(res => { console.log(res) })
})
</script>
<style scoped lang="scss">
.el-button {
  margin: 10px;
}

div {
  h1 {
    color: $color;
  }
}
</style>