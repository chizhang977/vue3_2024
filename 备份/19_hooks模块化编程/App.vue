<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <hr>
  <img v-for="(u,index) in dogList" :key="index" :src="(u as string)">
  <span v-show="dogList">加载中....</span><br/>
<button @click="getDog">获取狗图</button>

</template>

<script lang="ts" >
 import {defineComponent} from 'vue'
 export default defineComponent({
  name:'App'
 })
</script>
<script setup lang="ts">
  import useSum from './hooks/useSum'
  import useDog from './hooks/useDog'

  let {sum,increment,decrement} = useSum()

  let {dogList,getDog} = useDog()
</script>


<style>
/* 样式化按钮 */
.button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
  }
  
  /* 鼠标悬停时的样式 */
  .button:hover {
    background-color: #0056b3;
  }

  /* 图片样式 */
  .image {
    height: 20px;
    display: none; /* 默认隐藏图片 */
  }
</style>