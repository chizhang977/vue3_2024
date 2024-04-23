// eslint-disable-next-line vue/multi-word-component-names
<template>
   <div class="person">
     <h1>情况1:监视【ref】定义的基本类型的数据</h1>
     <h2>当前求和为：{{ sum }}</h2>
     <button @click="changeSum">点击我 sum + 1</button>
  </div>
</template>
<script lang="ts" setup name = "person">
  import { ref, computed, watch } from 'vue'
  
  let sum = ref(0)

  function changeSum(){
    sum.value += 1
  }

  const stopWatch = watch(sum,(newVal,OldVal)=>{
    console.log('sum值改变',newVal,OldVal)
    if(newVal > 5){
        stopWatch()//解除监视
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