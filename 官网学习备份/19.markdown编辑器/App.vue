<template>
  <div class="editor">
    <textarea class="input" :value="input" @input="update"></textarea>
    <div class="output" v-html="output"></div>
  </div>
</template>
<script setup>
// 导入marked库来将Markdown文本转换为HTML
import { marked } from 'marked'
//导入debounce函数用于防抖处理，防止用户输入时频繁触发处理函数
import { debounce } from 'lodash-es'
import { ref, computed } from 'vue'

const input = ref('# Markdown编辑器')

const output = computed(() => marked(input.value))

const update = debounce((e) => {
  input.value = e.target.value
}, 100)
</script>
<style>
body {
  margin: 0;
}

.editor {
  height: 100vh;
  display: flex;
}

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
