<script setup>
import { ref, reactive } from 'vue'

const parentMessage = ref('Parent')
const items = ref([
  { message: 'Foo', person: { name: 'justin' } },
  { message: 'Bar', person: { name: 'zs' } }
])

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<template>
  <!-- v-for 可以使用解构 -->
  <li v-for="{ message } in items" :key="message">{{ parentMessage }} - - {{ message }}</li>
  <li v-for="(item, index) in items" :key="index">
    {{ item.message }} -{{ item.person.name }}-{{ index }}
  </li>
  <!-- of 代替 in -->
  <div v-for="item of items" :key="item.message"></div>
  <hr />
  <li v-for="item in items" :key="item.message">
    <span v-for="childItem in item.person" :key="childItem">
      {{ item.message }}{{ childItem }}
    </span>
  </li>
  <hr />
  <ul>
    <li v-for="(value, key, index) in myObject" :key="index">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>
  <hr />
  <span v-for="n in 10" :key="n">{{ n }}</span>
</template>
