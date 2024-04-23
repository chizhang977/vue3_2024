<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button><br/>
        <button @click="changeAge">年龄+1</button><br/>
        <button @click="showTel">点我查看联系方式</button>
    </div>
</template>
<script setup name="person" lang="ts">
    import {ref} from 'vue'

    let name = ref('张三')
    let age = ref(23)
    let tel = '123456789'
    console.log(name.value,age.value)
    console.log(tel)

    function changeName(){
        name.value = '李四'
    }
    function changeAge(){
        age.value += 1
    }
    function showTel(){
        alert('联系方式：123456789')
    }
</script>
<style scope>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
 
</style>