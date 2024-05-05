<template>
  <div>
    <h1>我是父组件</h1>
    <Child class="large" :person="person" :car="car" :a="a"></Child>
  </div>
</template>
<script setup lang="ts">
import Child from '@/components/Child.vue'
import { ref } from 'vue'
let a = ref(1)
let car = ref({
  brand: 'Ford',
  model: 'Mustang',
  year: 1964
})
let person = ref({
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
})
</script>
<style scoped>
/* Your styles go here */
</style>
