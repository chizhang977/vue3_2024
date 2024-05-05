<template>
  <div class="templateClass">
    <h3>ref具有深层响应性</h3>
    <br />
    <button @click="mutateDeeply">深层响应性</button><br />
    <span>count:{{ obj.nested.count }}</span>
    <ul>
      <li v-for="item in obj.arr" :key="item">{{ item }}</li>
    </ul>
    <h3>
      reactive 具有局限性
      <ul>
        <li>有限的值类型</li>
        <li>
          不能替换整个对象，失去响应性，使用Object.assign来替换
          <button @click="updatePerson">测试</button>
        </li>
        <li>对解构不太友好，失去响应性</li>
      </ul>
      {{ person.age }}--{{ person.name }}
    </h3>
    <h3>顶级的ref属性才可以被解包</h3>
    {{ count + 1 }}<br />
    <h4>不是顶级的ref属性：{{ object + 1 }} 解构后:{{ id + 1 }}</h4>
    {{ object.id }}
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'
const count = ref(0)
const object = { id: ref(1) }
const mymax = ref<number | string>('2002')
let person = reactive({
  name: 'zs',
  age: 32
})
//类型推断
const year: Ref<string | number> = ref('2002')
console.log(year.value)
console.log(mymax.value)
let obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})
function updatePerson() {
  person = Object.assign({ name: 'justin', age: 33 })
  // person.name = 'justin'
  // person.age = 23
}
function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}

//解构
const { id } = object
</script>

<style scoped>
/* Your styles go here */

.templateClass {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
