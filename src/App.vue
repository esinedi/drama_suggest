<template>
  <div class="main_bg">
    <router-view></router-view>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.main_bg{
  width: 100%;
  height: 100vh;
  background: url('./assets/img/bg.png') no-repeat;
  background-size: cover;
  background-position: center;
}
</style>