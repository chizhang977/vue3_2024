<template>
  <div class="father">
    <h3>父组件</h3>
	<h2>a:{{ a }}</h2>
	<h2>flag:{{ flag }}</h2>
	<h2>person:name:{{ person.name }},age:{{ person.age }}</h2>
	<Child :a="a" :flag="flag" :person="person" :updateA="updateA"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref,reactive } from 'vue'
	import Child from './Child.vue'
	//数据
	let a = ref(1)
	let flag = ref(true)
	let person = reactive({
		name:'justin',
		age:24
	})

	//函数
	function updateA(){
		a.value += 1
	}
</script>

<style scoped>
	.father{
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
