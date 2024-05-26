<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0">占位</el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form">
                    <h1>欢迎来到硅谷甄选</h1>
                    <el-form-item>
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password"
                            show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="primary" size="default"
                            @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router'
import { ElNotification } from "element-plus";
//引入用户相关的小仓库
import useUserStore from "@/store/modules/user";
let useStore = useUserStore()

//定义变量控制按钮加载效果
let loading = ref(false)
//获取路由器
let $router = useRouter()
//收集账号与密码的数据
let loginForm = reactive({ username: '', password: '' })

//登录按钮回调
const login = () => {
    //按钮加载效果
    loading.value = true
    //通知仓库发登录请求
    //请求成功->首页展示数据的地方
    //请求失败->弹出登录失败的信息
    useStore.useLogin(loginForm).then(() => {
        //编程式跳转到数据首页
        $router.push('/')
        //登录成功提示信息
        ElNotification({
            type: 'success',
            message: '登录成功'
        })
        //登录成功加载效果消失
        loading.value = false
    }).catch((error) => {
        //登录失败加载效果消失
        loading.value = false
        ElNotification({
            type: 'error', message: error.message
        })
    })
}
</script>
<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('../../assets/images/background.jpg') no-repeat;
    background-size: cover;
}

.login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('../../assets/images/login_form.png');
    background-size: cover;
}

.login_btn {
    width: 100%;
}

h1 {
    color: white;
    font-size: 40px;
    margin: 20px 0;
}
</style>