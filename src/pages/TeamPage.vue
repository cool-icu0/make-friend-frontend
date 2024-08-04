<template>
  <div id="teamPage">
    <van-button type="primary" @click="doJoinTeam">加入队伍</van-button>
    <team-card-list :teamList="teamList"/>
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
onMounted(async () => {
  const res = await myAxios.get("/team/list");
  console.log("res：",res)
  if (res.code === 0) {
    teamList.value = res.data;
  } else {
    showFailToast("加载队伍失败，请刷新")
  }
})
</script>

<style scoped>

</style>