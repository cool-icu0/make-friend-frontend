<template>
  <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username', '昵称', user.username)"/>
  <van-cell title="账号" :value="user.userAccount"/>
  <van-cell title="头像" is-link to="/user/edit">
    <img style="height: 48px" :src="user.avatarUrl"/>
  </van-cell>
  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender', '性别', user.gender)"/>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email', '邮箱', user.email)"/>
  <van-cell title="星球编号" :value="user.planetCode"/>
  <van-cell title="注册时间" :value="user.createTime.toISOString()"/>

</template>

<script setup lang="ts">

import {useRouter} from "vue-router";

const user={
  id:1,
  username:'Cool',
  userAccount:'cool1234',
  avatarUrl:'https://foruda.gitee.com/avatar/1676566705652498709/9913536_xiao-chenago_1676566705.png!avatar200',
  gender:'男',
  phone:'1878348723',
  email:'990299103@qq.com',
  planetCode:'1234',
  createTime:new Date(),
}
const router = useRouter();
const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}

</script>

<style scoped>

</style>