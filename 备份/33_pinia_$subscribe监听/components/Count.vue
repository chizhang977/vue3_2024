<template>
  <div class="count">
    <h2>当前求和为:{{ sum }}</h2>
    <h2>学校的名称：{{ school }}</h2>
    <h2>数据放大十倍:{{ bigSum }}</h2>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add">加加</button>
    <button @click="minus">减减</button>
    <button @click="update">修改</button>
</div>
</template>
<script setup lang='ts' name="Count">
    import {ref} from 'vue'
    //引入storeToRefs
    import { storeToRefs } from 'pinia'
    import { useCountStore } from '@/store/count.ts'
    const countStore = useCountStore()

    const {sum,school,bigSum} = storeToRefs(countStore)
    const {increment,decrement} = countStore

    const n = ref(1)

    //方法
    function add() {
        increment(n.value)
    }
    function minus(){
        decrement(n.value)
    }

    //修改数据 第一种写法直接修改
    // function update(){
    //     countStore.sum = 999
    // }

    // 第二种写法：批量修改
    function update(){
        countStore.$patch({
            sum: 999,
            school: '北京邮电大学'
        
        })
    }

    // 第三种写法：借助action修改（action中可以编写一些业务逻辑）

    // 监听
    countStore.$subscribe((mutate,state)=>{
        console.log('监听到数据变化了')
    })
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