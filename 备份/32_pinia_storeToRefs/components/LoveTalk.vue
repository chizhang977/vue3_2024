<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
        <li v-for="talk in talkList" :key = "talk.id">{{ talk.title }}</li>
    </ul>
    <!-- Your Vue 3 component content goes here -->
  </div>
</template>
<script setup lang='ts' name="LoveTalk">
    import { useTalkStore } from '@/store/talk.ts'

    import { storeToRefs} from 'pinia'
    import {reactive} from 'vue'
    import axios from 'axios';
    import {nanoid} from 'nanoid';

    const talkStore = useTalkStore()
    const { talkList } = storeToRefs(talkStore)
    console.log('@',talkStore)

     function getLoveTalk(){
        // let {data:{content:title}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json")
        // let obj = {id:nanoid(),title}
        // talkList.unshift(obj)
        talkStore.getTalk()
    }
</script>
<style scoped>
/* Your styles go here */
    .talk{
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>