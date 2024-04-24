<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
        <li v-for="news in newList" :key="news.id">
          <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->
          <button @click="showNewsDetail(news)">查看新闻replace</button>
          <button @click="showNewsDetailForPush(news)">查看新闻push</button>
          <RouterLink replace
           :to="{
            name:'detail',
            params:{
                id:news.id,
                title:news.title,
                content:news.content
            }
          }">{{ news.title }}</RouterLink>
        </li>
    </ul>
    <RouterView></RouterView>
    <!-- 展示区 -->
</div>
</template>
<script setup lang='ts'>
    import {reactive} from 'vue'
    import {RouterLink,RouterView,useRouter} from 'vue-router'

    const newList = reactive([
        {id:'1',title:'很好的抗癌药物',content:'西兰花'},
        {id:'2',title:'如何一夜暴富',content:'xue it'},
        {id:'3',title:'震惊，万万没有想到',content:'明天是周一'},
        {id:'4',title:'好消息好消息',content:'快过年了'}
])
         const router = useRouter()
        console.log('@',router)

        function showNewsDetail(news){
            router.replace({
                name:'detail',
                params:{
                    id:news.id,
                    title:news.title,
                    content:news.content
                }
            })
        }

        function showNewsDetailForPush(news){
            router.push({
                name:'detail',
                params:{
                    id:news.id,
                    title:news.title,
                    content:news.content
                }
            })
        }
</script>
<style scoped>
    .news{
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        height: 100%;

    }
    .new ul{
        margin-top: 30px;
        list-style: none;
        padding-left: 10px;

    }
    .news li>a{
        font-size: 18px;
        line-height: 40px;
        text-decoration: none;
        color: #64967e;
        text-shadow:  0 0 1px rgb(0 , 84, 0);
    }
    .new-content{
        widows: 70%;
        height: 90%;
        border: 1px solid;
        margin-top: 20px;
        border-radius: 10px;
    }
</style>