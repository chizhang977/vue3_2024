//引入defineStore用户创建store
import { defineStore } from "pinia";

//定义一个store
export const useCountStore = defineStore('count',{
    //动作
    actions:{},
    //状态
    state(){
        return{
            sum:1
        }
    },
    //计算
    getters:{}
})
