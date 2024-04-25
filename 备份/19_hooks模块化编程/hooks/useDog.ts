import { reactive,onMounted } from "vue"
import axios,{AxiosError} from 'axios'

export default function(){
    const dogList = reactive<string[]>([])

    async function getDog(){
        try{
            const {data} = await axios.get('https://dog.ceo/api/breeds/image/random')
            dogList.push(data.message) 
        }catch(error){
            // 处理错误
            const err = <AxiosError>error
            console.log(err.message)
        }
    
    }
    onMounted(()=>{
        getDog()
    })

    return {
        dogList,
        getDog
    }
}