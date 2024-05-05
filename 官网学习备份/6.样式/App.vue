<template>
  <div :style="[styleObj, styleObj1]">
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
      <h1>Vue 4</h1>
    </div>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">vue 3</div>
  </div>
</template>
<script setup lang="ts" name="App">
import { ref, reactive } from 'vue'
const isActive = ref(true)
const hasError = ref(true)
const activeColor = ref('red')
const fontSize = ref(30)

const styleObj = reactive({
  backgroundColor: 'skyblue',
  boxShadow: '0 0 10px',
  borderRadius: '10px'
})
const styleObj1 = reactive({
  fontSize: '20px',
  marginTop: '20px'
})
</script>
<style scoped></style>
