<template>
  <div class="child">
    <h3>子组件</h3>
	<h3>我的玩具：{{ toy }}</h3>	
	<h3>爸爸的汽车：{{ car }} 已经是我的了</h3>
	<button @click="getToy(toy)"> 送玩具给我的父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import {defineProps,ref} from 'vue'

	let toy = ref('奥特曼')

	//接受父亲的汽车
	defineProps(['car','getToy'])
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
