<template>
  <div>
    <h3>文本</h3>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
    <h3>多行文本</h3>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <h3>复选框</h3>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" ref="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <h3>单选按钮</h3>
    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <h3>选择器</h3>
    <div>Selected: {{ selected }}</div>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <select v-model="selected">
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
    <h3>复选框的值绑定</h3>
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" />
    <select v-model="selected">
      <!-- 内联对象字面量 -->
      <option :value="{ number: 123 }">123</option>
      <option :value="{ number: 456 }">123</option>
    </select>
    <input v-model.number="age" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(true)
const checkedNames = ref([])
const message = ref('Hello World!')
const picked = ref('One')
const selected = ref('A')
const toggle = ref('yes')
const options = ref([
  { text: 'Java', value: 'A' },
  { text: 'python', value: 'B' },
  { text: 'c++', value: 'C' }
])
const pick = ref('One')
const first = ref('One')
const second = ref('Two')
const age = ref(0)
</script>
<style scoped>
/* Your styles go here */
</style>
