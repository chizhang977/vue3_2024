// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="person">
    <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>
    <h2 id="demo">水温：{{temp}}</h2>
    <h2>水位：{{height}}</h2>
    <button @click="changePrice">水温+1</button>
    <button @click="changeSum">水位+10</button>
  </div>
</template>
<script lang="ts" setup name = "person">
import { ref,watch, watchEffect } from 'vue';

    let temp = ref(10);
    let height = ref(0)

    function changePrice(){
        temp.value += 10
    }

    function changeSum(){
        height.value +=1
    }

    //如果要使用watch实现，需要制定temp，height
   /* watch([temp,height],(value)=>{
        //从value中获取最新的temp，height
        let [temp,height] = value
        if(temp >= 50 || height >= 20){
            console.log("联系服务器")
        }
    })*/

    //如果要使用watchEffect实现，不需要指定temp，height
    const stopWtach = watchEffect(()=>{
        if(temp.value >= 50 || height.value >=20){
            console.log(document.getElementById('demo')?.innerText)
            console.log('联系服务器')
        }
        if(temp.value === 100 || height.value === 50){
            console.log('清理了')
            stopWtach()
        }
    })
  
  



  
</script>
<style scoped>
    .person{
        /* 设置背景颜色 */
        background-color: green;
        /* 添加阴影效果，增强立体感 */
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        /* 圆角设计 */
        border-radius: 8px;
        /* 设置内边距，让内容有足够的空间 */
        padding: 20px;
        /* 设置外边距，使盒子与其他元素保持距离 */
        margin: 1rem auto;
        /* 最大宽度，确保响应式布局 */
        max-width: 800px;

      
    }
</style>