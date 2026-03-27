import { useEffect, useState } from "react"

const useFetchapi = (url) => { 
const [datasave,setDataSave] = useState([])




useEffect(()=>{
    const fecthapi = async()=>{
  
    

   try{

    const res = await fetch(url)
    const datas = await res.json()
   //console.log(datas);
   
    setDataSave(datas)
    
   }catch(error){

    console.log(error);
    alert('error',error.message)
   }


}
  fecthapi()

  
  
},[])

//console.log(datasave);


 return {datasave}



}

export default useFetchapi