<template>
    <div class="card">
        <img src="https://pic.wujinpp.com/upload/vod/20220814-1/1c6d9ff5f91821aaf6fd37bed7f568a7.jpg" alt="">
    </div>
    {{ movies }}
</template>

<script setup lang='ts'>
// 类型
import { moviesType } from '@/store/type/year'
const porps = defineProps<{
    movies: moviesType
}>()
</script>

<style scoped>

</style>