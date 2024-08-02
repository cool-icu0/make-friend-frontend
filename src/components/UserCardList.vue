<template>
  <van-card
      v-for="user in props.userList"
      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>
<script setup lang="ts">
import {userType} from "../models/user";

interface UserCardListProps {
  userList: userType[]
}

const props = withDefaults(defineProps<UserCardListProps>(), {
  userList: [] as userType[],
})
</script>