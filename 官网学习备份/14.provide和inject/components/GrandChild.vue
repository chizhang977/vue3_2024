<template>
  <div>{{ message }}</div>
  <br />
  now:{{ location }}
  <button @click="updateLocation">修改now</button>
</template>
<script setup lang="ts" name="GrandChild">
import { inject } from 'vue'
const { location, updateLocation } = inject('locationData')
const message = inject('message')
</script>
<style scoped>
/* Your styles go here */
</style>
