<script setup>
import { ref,reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
let fisrtName = ref('张')
let lastName = ref('三')

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const fullName = computed({
  get(){
    return fisrtName.value +"-"+lastName.value
  },
  set(value){
     [fisrtName.value, lastName.value] = value.split('-')
  }
})
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <ol>
    <li v-for="book in author.books" :key="book">{{ book }}</li>
  </ol>
  <input v-model="fullName"></input>
  myName:{{ fullName }}
</template>