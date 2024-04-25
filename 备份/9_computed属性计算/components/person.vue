// eslint-disable-next-line vue/multi-word-component-names
<template>
   <div class="person">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    全名：<span>{{fullName}}</span> <br>
    <button @click="changeFullName">全名改为：li-si</button>
  </div>


</template>
<script lang="ts" setup name = "person">
  import { ref, computed } from 'vue'
  let firstName = ref('张')
  let lastName = ref('三')

//   let fullName = computed(()=>{
//     return firstName.value + lastName.value
//   })
    let fullName = computed({
        get(){
            return firstName.value +" -  "+ lastName.value
        },
        set(value){
            let [first,last] = value.split('-')
            firstName.value = first
            lastName.value = last
        }
    })

  function changeFullName(){
    fullName.value = '李-四'
  }
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