import  { useState } from 'react'

const useInput = (typevlaue) => {

const [valuetype,setValueType] = useState(typevlaue)
  
  
const handleChange = (e)=>{

    
    setValueType(e.target.value)
   


}  
  
    return {valuetype,handleChange}
}

export default useInput