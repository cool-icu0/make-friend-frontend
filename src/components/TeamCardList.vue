<template>
  <div id="teamCardList">
    <van-card
        v-for="team in props.teamList"
        :desc="team.description"
        thumb="xxx.jpg"
        :title="`${team.name} `"
    >
      <template #tags>
        <van-tag plain type="danger" style="margin-right: 8px; margin-top: 8px">
          {{
            teamStatusEnum[team.status]
          }}
        </van-tag>
      </template>
      <template #bottom>
        <div>
          {{ '最大人数' + team.maxNum }}
        </div>
        <div>
          {{ '过期时间' + team.expireTime }}
        </div>
        <div>
          {{ '创建时间' + team.createTime }}
        </div>
      </template>
      <template #footer>
        <van-button size="mini" plain type="primary" @click="doJoinTeam(team.id)">加入队伍</van-button>
        <van-button v-if="team.userId === currentUser?.id" type="success"
                    size="mini" plain @click="doUpdateTeam(team.id)">更新队伍
        </van-button>
      <!--  仅加入队伍可见-->
        <van-button v-if="team.userId !== currentUser?.id" size="mini" plain @click="doQuitTeam(team.id)">退出队伍</van-button>
        <van-button v-if="team.userId === currentUser?.id" size="mini" type="danger" plain
                    @click="doDeleteTeam(team.id)">解散队伍</van-button>
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts">
import {TeamType} from "../models/team";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";
import {teamStatusEnum} from "../constants/team.ts";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";
import {useRouter} from "vue-router";
//获取当前用户
const currentUser = ref();
onMounted(async () => {
  currentUser.value = await getCurrentUser();
})

const router = useRouter();

interface TeamCardListProps {
  teamList: TeamType[];
}

const props = withDefaults(defineProps<TeamCardListProps>(), {
  //@ts-ignore
  teamList: [] as TeamType[],
});

//队伍列表加入队伍
const doJoinTeam = async (id: number) => {
  const res = await myAxios.post("/team/join", {
    teamId: id
  });
  if (res?.code === 0) {
    showSuccessToast("加入成功")
  } else {
    showFailToast("加入失败" + (res.description ? `， ${res.description} ` : ''));
  }
}
/**
 * 跳转至更新队伍页
 * @param id
 */
const doUpdateTeam = (id: number) => {
  router.push({
    path: '/team/update',
    query: {
      id,
    }
  })
}
/**
 * 退出队伍
 * @param id
 */
const doQuitTeam = async (id: number) => {
  const res = await myAxios.post('/team/quit', {
    teamId: id
  });
  if (res?.code === 0) {
    showSuccessToast('操作成功');
  } else {
    showFailToast('操作失败' + (res.description ? `，${res.description}` : ''));
  }
}

/**
 * 解散队伍
 * @param id
 */
const doDeleteTeam = async (id: number) => {
  const res = await myAxios.post('/team/delete', {
    id,
  });
  if (res?.code === 0) {
    showSuccessToast('操作成功');
  } else {
    showFailToast('操作失败' + (res.description ? `，${res.description}` : ''));
  }
}

</script>

<style scoped>
#teamCardList :deep(.van-image__img) {
  height: 128px;
  object-fit: unset;
}
</style>