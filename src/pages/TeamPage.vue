<template>
  <div id="teamPage">
    <van-search v-model="searchText" placeholder="搜索队伍" @search="OnSearch"/>
    <van-button type="primary" @click="doJoinTeam">加入队伍</van-button>
    <team-card-list :teamList="teamList"/>
    <van-empty v-if="teamList?.length<1" description="数据为空"/>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast} from "vant";
import {onMounted, ref} from "vue";

const router = useRouter();
//跳转到加入队伍界面
const doJoinTeam = () => {
  router.push({
    path: "team/add"
  })
}
const teamList = ref([]);
onMounted( () => {
  listTeam();
})
const OnSearch =(val)=>{
  listTeam(val);
}
/**
 * 搜索队伍
 * @param val
 * @returns {Promise<void>}
 */
const listTeam = async (val = '') => {
  const res = await myAxios.get("/team/list", {
    params: {
      searchText: val,
      pageNum: 1,
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