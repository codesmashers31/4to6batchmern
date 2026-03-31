// import React, { useCallback, useMemo, useState } from 'react'

import { useState } from "react"

// const App = () => {
// console.log('Component Running...');

//   const [theme,setTheme] = useState(false)

//   const [number,setNumber] = useState(0)
 
// const handletheme = ()=>{
// setTheme(!theme)
// }

// const handleChange = (e)=>{

// setNumber(Number(e.target.value))

// }


// const arr = [1,2,3,4,5,6]

// const search = (data)=>{

//   for (let index = 0; index < 10000; index++) {
//     console.log(index);
    
    
//   }

//   const fileter = arr.filter((e)=>e).includes(data)

//   console.log('data',fileter);
  

//   return fileter
 
// }

// const datasfileter = useMemo(()=>{
//    return  search(number)
// },[number])



// const datanew = useCallback(()=>{

//   return search(number)

// },[number])


//   return (
//    <>
   
//     <div className={theme?"bg-amber-300 text-black p-3":"bg-black text-white p-3"}>
//       <button className='bg-black text-white p-1 w-30' onClick={handletheme}>Change Theme</button>
//     </div>


//     <div className='p-10'>
//       <p>{arr}</p>
//        <h1>{datasfileter?"Is it there":"No Its not there"}</h1>
//       <input type="text" className='bg-black text-white p-2 w-50' onChange={handleChange} />
//       <button className='bg-black text-white p-1 w-40 m-10' onClick={datanew}>Submit</button>
//     </div>
//    </>



//   )
// }

// export default App




import { useEffect } from "react"

const App = () => {


  const [datas,setdatas] = useState([])
  const [search,setSearch] = useState("")

   useEffect(()=>{
     const fetchdata = async()=>{
  try{
    const fetcgdatas = await fetch("https://dummyjson.com/products?limit=4")
    const res =await fetcgdatas.json()
     setdatas(res.products)

  }catch(err){

   console.log(err);
   
    

  }
 }
   
fetchdata()
}
   
   ,[])


 const handlechange = (e)=>{

   
setSearch(e.target.value)
 }



 const filter = datas.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))

console.log(filter);

  return (
   <>
   
   <div className="bg-amber-300 p-10">
      <input type="text" className="bg-white border-2 p-1 w-50" onChange={handlechange} placeholder="Enter the Title" />
    </div>

    <div className="bg-amber-300 p-10 h-100 flex justify-center items-center gap-10">
     

    

     {filter.map((e)=>(

      <div key={e.id} className="bg-white text-black p-2 w-50 h-90 rounded">
        <img src={e.images} alt="" className="w-100  rounded-2xl" />
         <h1 className="my-2">{e.title}</h1>
         <p className="my-2">{e.price}</p>
         <button className="bg-black text-white p-1 w-40 rounded">Buy Now</button>
      </div>

     ))}


      
    </div>
   </>
  )
}

export default App
