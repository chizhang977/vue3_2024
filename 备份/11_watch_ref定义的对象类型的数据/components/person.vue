// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="person">
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
  </div>
</template>
<script lang="ts" setup name = "person">
  import { ref, computed, watch } from 'vue'
  
  let person = ref({
    name:'zs',
    age:23
  })

   // 方法
   function changeName(){
    person.value.name += '~'
  }
  function changeAge(){
    person.value.age += 1
  }
  function changePerson(){
    person.value = {name:'李四',age:90}
  }
  /*
  监视：监视【ref】定义的对象类型的数据，监视的是对象的地址值，若想监视对象
      内部属性的变化，需要手动开启深度监视
      watch的第一个参数是，被监视的数据
      watch的第二个参数是，监视的回掉
      watch的第三个参数是，监视的配置对象
  */
  watch(person,(newVal,OldVal)=>{
    console.log('person',newVal,OldVal)
  },{deep:true,immediate:true})

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