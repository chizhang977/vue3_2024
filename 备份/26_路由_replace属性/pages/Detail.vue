<template>
  <div>
    <ul class="news-list">
        <li>编号:{{id }}</li>
        <li>标题:{{ title }}</li>
        <li>内容:{{ content }}</li>
    </ul>
    <!-- Your Vue 3 component content goes here -->
  </div>
</template>
<script setup lang='ts' name="Detail">
import { defineProps } from "vue-router";
    defineProps(['id','title','content'])
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