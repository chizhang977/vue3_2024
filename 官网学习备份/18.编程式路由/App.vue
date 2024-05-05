<template>
  <h1>嵌套路由</h1>
  <p>
    <router-link :to="{ name: 'user', params: { username: 'erina' } }">/users/justin</router-link>
    <br />
    <router-link to="/users/justin/profile">/users/justin/profile</router-link>
    <br />
    <router-link to="/users/justin/posts">/users/justin/posts</router-link>
  </p>
  <router-view></router-view>
</template>

<script setup lang="ts" name="App">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router-link-active {
  color: orange;
}

.router-link-exact-active {
  color: crimson;
}
</style>

<style scoped>
ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

li:not(:last-of-type) {
  margin-right: 1rem;
}
</style>
