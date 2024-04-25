<template>
    <div class="person">
        <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <h2>测试：{{obj.a.b.c.d}}</h2>
        <button @click="changeCarPrice">修改汽车价格</button>
        <button @click="changeFirstGame">修改第一游戏</button>
        <button @click="changeCar">修改汽车</button>
        <button @click="test">测试</button>
    </div>
</template>
<script setup name="person" lang="ts">
    import {ref,reactive} from 'vue'
    //通过reactive创建响应式数据
    let car = ref({ brand: '奔驰', price: 100 })
    
    let games = reactive([
        { id: 'ahsgdyfa01', name: '英雄联盟' },
        { id: 'ahsgdyfa02', name: '王者荣耀' },
        { id: 'ahsgdyfa03', name: '原神' }
    ])
    console.log(car)

    //reactive 默认深度监视
    let obj = reactive({
        a:{
            b:{
            c:{
                d:666
            }
            }
        }
    })

    function changeCarPrice() {
        car.value.price = 200
    }
    function changeFirstGame() {
        games[0].name = '和平精英'
    }
    function test(){
        obj.a.b.c.d = 999
    }
    function changeCar(){
        // Object.assign(car,{brand:'劳斯莱斯',price:3000})
        car.value = {brand:'宝马',price:3000}
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