<template>
  <div class="person">
    <h1 ref="title1">尚硅谷</h1>
    <h2 ref="title2">前端</h2>
    <h3 ref="title3">Vue</h3>
    <input type="text" ref="inpt"> <br><br>
    <button @click="showLog">点我打印内容</button>
  </div>
</template>
<script lang="ts" setup name = "person">
    import {ref} from 'vue'
	
    let title1 = ref()
    let title2 = ref()
    let title3 = ref()

    let name = ref('zs')
    let age = ref(19)
  
    function showLog(){
      // 通过id获取元素
      const t1 = document.getElementById('title1')
        // console.log((t1 as HTMLElement).innerText)
        // console.log((<HTMLElement>t1).innerText)
        // console.log(t1?.innerText)
          
      // 通过ref获取元素
      console.log(title1.value)
      console.log(title2.value)
      console.log(title3.value)
      }
      //使用defineExpose将组件中的数据交个外部
      defineExpose({name,age})
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