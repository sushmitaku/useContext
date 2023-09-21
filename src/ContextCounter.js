import React,{createContext,useState} from 'react'
export const createCounter=createContext()
export const ContextCounter=({children})=>{
//createCounter.provider
const[count,setCount]=useState(0)
return(
<createCounter.Provider value={{count,setCount}}>
{children}
</createCounter.Provider>
)
}
export default ContextCounter
