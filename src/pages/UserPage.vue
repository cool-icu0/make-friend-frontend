<template>
  <van-cell title="昵称" is-link to="/user/edit" :value="user.username" />
  <van-cell title="账号" :value="user.userAccount"/>
  <van-cell title="头像" is-link to="/user/edit">
    <img style="height: 48px" :src="user.avatarUrl"/>
  </van-cell>
  <van-cell title="性别" is-link :value="user.gender" />
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" />
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" />
  <van-cell title="星球编号" :value="user.planetCode"/>
  <van-cell title="注册时间" :value="user.createTime.toISOString()"/>

</template>

<script setup>
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
</script>

<style scoped>

</style>