<template>
  <h1>我是子组件</h1>
  <button class="childLarge">我是子组件的按钮啊</button>
  爸爸给我的数据:{{ person }}
  <grand-child v-bind="$attrs"></grand-child>
</template>
<script setup lang="ts">
import GrandChild from './GrandChild.vue'
import { useAttrs } from 'vue'
defineProps(['person'])
const attrs = useAttrs()
console.log(attrs)
console.log('@我是子组件，我现在要查看$attrs属性了')
</script>
<style scoped>
/* Your styles go here */
</style>
