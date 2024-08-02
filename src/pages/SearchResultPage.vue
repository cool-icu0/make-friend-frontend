<template>
  <user-card-list :user-list="userList" />
  <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空" />
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import qs from 'qs';
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
const { tags } = route.query;
console.log("tags是：",tags);

const userList=ref([]);

onMounted(async () => {
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer:params=>{
      return qs.stringify(params,{indices:false})
    }
  }).then(function (response) {
    console.log('/user/search/tags',response);
    return response?.data;
  }).catch(function (error){
    console.log('/user/search/tags',error);
  })
  if (userListData){
    userListData.forEach(user =>{
      if (user.tags){
        user.tags = JSON.parse(user.tags);
      }
    })
    console.log("userListData:",userListData);
    userList.value = userListData;
  }
})

</script>

<style scoped>

</style>