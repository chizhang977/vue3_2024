<script setup lang="ts" name="App">
import { ref, provide, readonly } from 'vue'
import Child from '@/components/Child.vue'

const message = ref('hello')
//须在注入放修改数据
let location = ref('北方')
function updateLocation() {
  location.value = '南方'
}
provide('locationData', readonly({ location, updateLocation }))
provide('message', message)
</script>

<template>
  <input v-model="message" />
  <Child />
</template>
