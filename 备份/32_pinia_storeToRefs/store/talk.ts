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
            talkList:[
                {id:'1',title:'今天你有点怪，哪里怪？，怪好看的'},
                {id:'2',title:'草莓，蓝莓，蔓越莓，今天想我了没？'},
                {id:'3',title:'心里给你留了一块地，我的死心塌地'},
            ]
        }
    },
    getters:{}
})