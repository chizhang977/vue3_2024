// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="person">
    <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>
<script lang="ts" setup name = "person">
  import {watch, reactive } from 'vue'
  
  let person = reactive({
    name:'zs',
    age:23,
    car:{
        c1:'奔驰',
        c2:'宝马'
    }
  })

   // 方法
   function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changeC1(){
    person.car.c1 = '奥迪'
  }
  function changeC2(){
    person.car.c2 = '大众'
  }
  function changeCar(){
    // person.car = {c1:'雅迪',c2:'爱玛'}
    Object.assign(person.car,{c1:'雅迪',c2:'爱玛'})
  }
  // 监视，监视响应式对象中的某个属性，且该属性是接本雷响的要写成函数
  watch(()=>person.name,(newVal,OldVal)=>{
    console.log('person.name变化了',newVal,OldVal)
  })

  // 监视，监视响应式对象中的某个属性，属性是对象类型的，可以直接写，也能写成函数，更推荐写成函数

  watch(()=>person.car,(newVal,OldVal)=>{
    console.log('person.car变化了',newVal,OldVal)
  },{deep:true})
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