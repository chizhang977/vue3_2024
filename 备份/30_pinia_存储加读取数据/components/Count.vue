<template>
  <div class="count">
    <h2>当前求和为:{{ countStore.sum }}</h2>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add">加加</button>
    <button @click="minus">减减</button>
</div>
</template>
<script setup lang='ts' name="Count">
    import {ref} from 'vue'
    import { useCountStore } from '@/store/count.ts'
    const countStore = useCountStore()
    // console.log('@',countStore.sum)
    // console.log('@@',countStore.$state.sum)
    
    const n = ref(1)

    //方法
    function add() {
        countStore.sum += n.value
    }
    function minus(){
        countStore.sum -= n.value
    }
</script>
<style scoped>
/* Your styles go here */
    .count{
        background-color: skyblue;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    select,botton{
        margin: 0 5px;
        height: 25px;
    }
</style>