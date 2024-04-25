//引入mitt
import mitt from 'mitt'

//创建emitter实例
const emitter = mitt()

// 绑定事件
emitter.on('abc',(value)=>{
  console.log('abc事件被触发',value)
})
emitter.on('xyz',(value)=>{
  console.log('xyz事件被触发',value)
})

setInterval(()=>{
  //触发事件
  emitter.emit('abc',666)
  emitter.emit('xyz',777)
} ,1000)

setTimeout(()=>{
  //取消事件
  emitter.off('abc')
  emitter.off('xyz')
} ,5000)

export default emitter