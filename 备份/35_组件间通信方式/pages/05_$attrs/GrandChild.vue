<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>Father组件的数据</h4>
		<h4>a:{{ a }}</h4>
		<h4>flag:{{ flag }}</h4>
		<h4>person:name:{{ person.name }},age:{{ person.age }}</h4>
		<button @click="updateA">updateA</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
//接受Father组件传递过来的数据，通过$attrs
defineProps(['a','flag','person','updateA'])	
</script>

<style scoped>
	.grand-child{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>