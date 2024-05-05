<template>
  <div>
    <Child v-model="message" />
    <!-- 自定义修饰符 -->
    <Child v-model.capitalize="message" />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Child from '@/components/Child.vue'
let message = ref('Hello Vue')
</script>
<style scoped>
/* Your styles go here */
</style>
