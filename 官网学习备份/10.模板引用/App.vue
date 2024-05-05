<template>
  <div class="person">
    <h1 ref="title1">Justin</h1>
    <h2 ref="title2">前端</h2>
    <h3 ref="title3">Vue</h3>
    <label for="me" ref="titel4">我是Vite</label>
    <input type="text" ref="input" /> <br /><br />
    <button @click="showLog">点我打印内容</button><br />
    <ul>
      <li v-for="item in list" ref="itemRefs" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watchEffect } from 'vue'

const list = ref(['java', 'python', 'c++', 'c#', 'go'])

const itemRefs = ref([])

onMounted(() => console.log(itemRefs.value.map((item) => item.innerHTML)))

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

// onMounted(() => {
//   input.value.focus()
// })
watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    console.log('input.value', input.value)
  }
})
let title1 = ref()
let title2 = ref()
let title3 = ref()
let titel4 = ref()

function showLog() {
  // 通过id获取元素
  const t1 = document.getElementById('title1')
  // 打印内容
  // console.log((t1 as HTMLElement).innerText)
  // console.log((<HTMLElement>t1).innerText)
  // console.log(t1?.innerText)

  /************************************/

  // 通过ref获取元素
  console.log(title1.value)
  console.log(title2.value)
  console.log(title3.value)
  console.log(titel4.value)
}
</script>
