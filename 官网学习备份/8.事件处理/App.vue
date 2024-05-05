<template>
  <!-- 
    stop:阻止冒泡行为
    self:是自己才会出发回调
    caputer:改变默认的行为为捕获，即从外向内
    passive：滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成
    once:事件只执行一次
    prevent:阻止默认行为，表单提交刷新，a标签跳转等
   -->
  <div>
    <!-- 使用特殊的 $event 变量 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>

    <!-- 使用内联箭头函数 -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button>

    <div @click.capture="doSome">
      <!-- 单击事件将停止传递 -->
      <a @click="doThis"> 我要去百度</a>
    </div>
    <!-- 单击事件将停止传递，上面这个例子中我们div点击事件，子标签也有点击事件，
      点击子标签会进行冒泡，触发父标签的点击事件，我们可以使用stop修饰符来进行阻止
    -->

    <!-- 提交事件将不再重新加载页面 -->
    <form @submit.prevent="onSubmit"></form>

    <!-- 修饰语可以使用链式书写 -->
    <a @click.stop.prevent="doThat"></a>

    <!-- 也可以只有修饰符 -->
    <form @submit.prevent></form>

    <!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
    <!-- 例如：事件处理器不来自子元素 -->
    <div @click.self="doThat">...</div>
  </div>
</template>
<script setup lang="ts">
function doSome() {
  alert('我是父亲啊')
}
function doThis() {
  // window.location.href = `http://www.baidu.com`
  alert('我是儿子啊')
}
function warn(message: string, event: any) {
  // 这里可以访问原生事件
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
</script>
<style scoped>
/* Your styles go here */
</style>
