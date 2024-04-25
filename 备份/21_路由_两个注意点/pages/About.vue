<template>
  <div class="about">
    <h2>欢迎大家来到Justin直播间</h2>
  </div>
</template>
<script setup lang='ts' name="About">
  import { onUnmounted } from "vue";
  onUnmounted(()=>{
    console.log('同各点击导航，小时的路由组件，默认是被卸载掉的，需要的时候再去挂载')
  })
  
</script>
<style scoped>
    .about{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: rgb(85, 84, 84);
        font-size: 18px;
    }
</style>