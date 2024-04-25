//引入
import { defineStore  } from "pinia"
import axios from "axios"
import { nanoid } from "nanoid"

export const useTalkStore  =   defineStore('talk',{

    actions:{
        async getTalk(){
            const {data:{content:title}} = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json")
            const obj = {id:nanoid(),title}
            this.talkList.unshift(obj)
        }
    },
    state(){
        return {
            talkList:JSON.parse(localStorage.getItem("talkList")as string) || []
        }
    },
    getters:{}
})