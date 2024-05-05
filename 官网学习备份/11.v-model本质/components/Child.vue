<template>
  <div>I am input: <input type="text" v-model="model" /></div>
</template>
<script setup lang="ts">
// const model = defineModel({ default: '张弛默认' })
const [model, modifiers] = defineModel({
  set(value: string) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})
console.log(model, modifiers)
console.log(model, model.value)
</script>
<style scoped>
/* Your styles go here */
</style>
