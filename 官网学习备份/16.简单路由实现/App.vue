<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件进行导航 -->
      <!-- 通过传递 `to` 来指定链接 -->
      <!-- `<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签 -->
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
/* Your styles go here */
</style>
