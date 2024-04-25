<template>
  <div class="person">
    <h1>{{ title }}</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>姓名：{{ age }}</h2>
    <h2>姓名：{{ tel }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script lang="ts">

  export default {
    name:'App', //组件名
    data(){
      return {
        title:'Vue3可以向下兼容Vue2，且Vue的模版中可以没有根标签',
        name:'张三',
        age: 18,
        tel: '18888888888'
      }
    },
    methods:{
      changeName(){
        this.name = 'Justin'
      },
      changeAge(){
        this.age += 1
      },
      showTel(){
        alert(this.tel)
      
      }

    }
  }
</script>

<style>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin-top: 20px;
  
  }
</style>