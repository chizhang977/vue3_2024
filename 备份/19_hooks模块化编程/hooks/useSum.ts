import {ref,onMounted} from 'vue'

export default function(){

    const sum = ref(0)

    const increment = ()=>{
        sum.value += 1
    }
    const decrement = ()=>{
        sum.value -= 1
    }

    onMounted(()=>{
        console.log('useDog')
    })

    //向外部暴漏数据
    return {sum,increment,decrement}

}