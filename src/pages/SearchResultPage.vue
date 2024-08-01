<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in tags" style="margin-right: 8px; margin-top: 8px" >
        {{tag}}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
  <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空" />
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.js";
import qs from 'qs';

const route = useRoute();
const { tags } = route.query;
console.log("tags是：",tags);

const mockUser = ref({
  id: 1,
  username: 'Cool',
  userAccount: 'cool',
  profile: '一条咸鱼',
  gender: 0,
  phone: '123456789101',
  email: 'coolxx@qq.com',
  planetCode: '1',
  avatarUrl: 'https://foruda.gitee.com/avatar/1676566705652498709/9913536_xiao-chenago_1676566705.png!avatar200',
  tags: ['java', 'emo', '打工中', 'emo', '打工中'],
  createTime: new Date(),
})

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
    return response.data?.data;
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