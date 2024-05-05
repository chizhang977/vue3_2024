<template>
  <div class="person">
    <h1>watchEffect</h1>
    <button @click="todoId++">test</button>
    {{ data }}
  </div>
</template>
<script setup lang="ts">
import { watch, ref, watchEffect } from 'vue'
const todoId = ref(1)
const data = ref(null)

// watch(
//   todoId,
//   async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
//     data.value = await response.json()
//   },
//   { immediate: true }
// )

watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  data.value = await response.json()
})
</script>
<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
}
</style>
