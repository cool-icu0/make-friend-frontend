<template>
{{
    JSON.stringify(route.query)
  }}
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
console.log(route.query)
// 29.32
</script>

<style scoped>

</style>