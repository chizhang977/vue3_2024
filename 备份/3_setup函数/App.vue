<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button><br/>
    <button @click="modify">vue2中是否可以访问setup中的属性和方法？</button>
  </div>
</template>
<!-- 
  1、setup中无法访问vue2中配置的属性和方法
  2、vue2中的可以访问setup中的数据
  3、setup中的this是undefined
  4、setup函数是优先于beforeCreate执行


 -->
<script lang="ts">
  export default {
    name: 'App',
    data(){
      return {
        Myage: 23,
        MyName: '张三'
      
      }
    },
    methods:{
      modify(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.tel)
      }
    
    },
    beforeCreate(){
      console.log('beforeCreate是不是在setup之后执行的？')
    },
    setup(){
      console.log(this)
      console.log('setup优先执行？')
      // 数据,原来写在data中，但是此时数据不是响应式的
      let name = 'Justin'
      let age = 19
      let tel = '123456789'
      //方法，原来写在methods中，但是此时方法不是响应式的
      function changeName(){
        name = 'zhangsan'
        console.log(name)
      }
      function changeAge(){
        age += 1 //注意：此时这么修改age页面是不变化的
        console.log(age)
      }
      function showTel(){
        alert(tel)
       
      }
      return {name,age,tel,changeName,changeAge,showTel}
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