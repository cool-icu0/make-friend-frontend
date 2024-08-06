<template>
  <div id="teamPage">
    <van-search v-model="searchText" placeholder="搜索队伍" @search="OnSearch"/>
    <van-tabs v-model:active="active" @change="onTabChange">
      <van-tab title="公开" name="public"/>
      <van-tab title="加密" name="secret"/>
      <!--<van-tab title="私有" name="private"/>-->
    </van-tabs>
    <div style="margin-bottom: 16px"/>
    <van-button class="add-button" type="primary" icon="plus" @click="toAddTeam"/>
    <team-card-list :teamList="teamList"/>
    <van-empty v-if="teamList?.length<1" description="数据为空"/>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast} from "vant";
import {onMounted, ref} from "vue";

const router = useRouter();
const active = ref('public');
const searchText = ref('');
//跳转到加入队伍界面
const toAddTeam = () => {
  router.push({
    path: "team/add"
  })
}
const teamList = ref([]);
onMounted(() => {
  listTeam();
})
const OnSearch = (val) => {
  listTeam(val);
}
/**
 * 切换查询状态
 */
const onTabChange =(name)=>{
  //查公开
  if (name=== 'public'){
    listTeam(searchText.value,0);
  }
  // if (name === 'private') {
  //   //查私有
  //   listTeam(searchText.value,1);
  // }
  if (name === 'secret') {
    //查加密
    listTeam(searchText.value,2);
  }
}
/**
 * 搜索队伍
 */
const listTeam = async (val = '',status = 0) => {
  const res = await myAxios.get("/team/list", {
    params: {
      searchText: val,
      pageNum: 1,
      status,
    },
  });
  if (res?.code === 0) {
    teamList.value = res.data;
  } else {
    showFailToast('加载队伍失败，请刷新重试');
  }
}
</script>

<style scoped>

</style>