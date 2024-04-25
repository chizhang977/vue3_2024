<template>
  <div class="person">
    <ul>
        <li v-for="item in list" :key="item.id">{{ item.name }}-{{ item.age }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup name = "person">
   import {defineProps,withDefaults} from 'vue'
    import {type Persons } from '../types'

   //第一种写法：只接受父组件传递过来的数据
   //defineProps(['list'])

   //第二种写法：接受+限制类型
   //defineProps<{list:Persons}>()

   //第三种写法：接受+限制类型+指定默认值+限制必要性
   // 第三种写法：接收+限制类型+指定默认值+限制必要性
let props = withDefaults(defineProps<{list?:Persons}>(),{
  list:()=>[{id:'asdasg01',name:'小猪佩奇',age:18}]
})
   console.log(props)
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