<template>
  <user-card-list :user-list="userList" />
  <van-empty v-if="!userList || userList.length < 1" description="数据为空"/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast} from "vant";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
const {tags} = route.query;

const userList = ref([]);

onMounted(async () => {
  const userListData = await myAxios.get('/user/recommend', {
    withCredentials: false,
    params: {},
  })
      .then(function (response) {
        console.log('/user/recommend', response);
        showSuccessToast('请求成功')
        return response?.data;
      }).catch(function (error) {
        console.log('/user/recommend', error);
        showFailToast('请求失败')
      })
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    // console.log("userListData:", userListData);
    userList.value = userListData;
  }
})

</script>

<style scoped>

</style>