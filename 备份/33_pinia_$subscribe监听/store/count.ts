//引入defineStore用户创建store
import { defineStore } from "pinia";

//定义一个store
export const useCountStore = defineStore('count',{
    //动作
    actions:{
        increment(value:number){
            if(this.sum < 10){
                this.sum += value
            }
        },
        decrement(value:number){
            if(this.sum > 1){
                this.sum -= value
            }
        }
    },
    //状态
    state(){
        return{
            sum:1,
            school:'Justin School for Java'
        }
    },
    //计算
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
})
