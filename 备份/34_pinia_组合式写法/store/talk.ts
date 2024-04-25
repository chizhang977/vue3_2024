//引入
import { defineStore  } from "pinia"
import axios from "axios"
import { nanoid } from "nanoid"
import { reactive} from 'vue'

// export const useTalkStore  =   defineStore('talk',{

//     actions:{
//         async getTalk(){
//             const {data:{content:title}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json")
//             const obj = {id:nanoid(),title}
//             this.talkList.unshift(obj)
//         }
//     },
//     state(){
//         return {
//             talkList:JSON.parse(localStorage.getItem("talkList")as string) || []
//         }
//     },
//     getters:{}
// })


export const useTalkStore = defineStore('talk',()=>{
    //talkList就是state
    const talkList = reactive(JSON.parse(localStorage.getItem("talkList")as string) || [])
    //getTalk就是action

    async function getTalk() {
        const {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //把请求回来的字符串，包装一个对象
        const obj = {id:nanoid(),title}
        //放到数据
        talkList.unshift(obj)
    }
    return {talkList,getTalk}
})