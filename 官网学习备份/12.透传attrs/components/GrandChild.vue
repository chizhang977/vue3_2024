<template>
  <div>
    <h1>子组件的儿子</h1>
    <label for="car">爷爷给我的数据:{{ car }}</label>
    <label for="a">爷爷给我的数据:{{ a }}</label>
  </div>
</template>
<script setup lang="ts">
//因为有透传属性，所以爷爷可以通过$attrs给我数据，相当于遗产
//但是如果我不想要这么解决？
defineOptions({
  inheritAttrs: false
})
//进行消费后，就不会向子组件传递了
defineProps(['car', 'a'])
</script>
<style scoped>
/* Your styles go here */
</style>
