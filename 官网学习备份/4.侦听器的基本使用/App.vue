<script setup>
import { reactive, ref, watch } from 'vue'
let sum = ref('0')
let person = ref({
  name: 'zs',
  age: 23
})
let car = reactive({
  brand: '奔驰',
  price: 100,
  address: {
    id: 123,
    youbian: 7445
  }
})
let obj = reactive({ count: 0, age: 23 })
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

//methods
function updateRefObject() {
  // person.value = { name: 'justin', age: 23 }
  person.value.age = 34
}
function updateReactiveObject() {
  car.address = Object.assign({
    id: 234,
    youbian: 789
  })
}

//监视ref定义基本类型数据
watch(sum, (newValue) => {
  console.log(newValue)
})
//监视ref定义的对象类型
watch(
  person,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  },
  { deep: true }
)
watch(
  () => person.value.age,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  }
)
//监视reactive定义的数据
watch(
  () => car.brand,
  (newValue) => {
    console.log(newValue)
  }
)
watch(
  () => car.address,
  (newVal) => {
    console.log(newVal)
  }
)
// 错误，因为 watch() 得到的参数是一个 number
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  },
  { once: true, immediate: true }
)
// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading" />
  </p>

  <p>{{ answer }}</p>
  <button @click="obj.count++">count</button>

  <h3>监视ref定义基本类型数据</h3>
  <button @click="sum++">ref</button>
  <h3>监视ref定义的对象类型</h3>
  <button @click="updateRefObject">ref</button>
  <h3>监视reactive定义的数据</h3>
  <button @click="updateReactiveObject">ref</button>
</template>
