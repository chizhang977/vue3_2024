<template>
  <div>
    <ul class="news-list">
        <li>编号:{{params.id }}</li>
        <li>标题:{{ params.title }}</li>
        <li>内容:{{ params.content }}</li>
    </ul>
    <!-- Your Vue 3 component content goes here -->
  </div>
</template>
<script setup lang='ts' name="Detail">
import {toRefs} from 'vue'
import { useRoute } from "vue-router";
const route = useRoute()

let {params} = toRefs(route)
console.log(route)
</script>
<style scoped>
    .news-list{
        list-style: none;
        padding-left: 50px;
    }
    .news-list>li{
        line-height: 30px;
    }
/* Your styles go here */
</style>