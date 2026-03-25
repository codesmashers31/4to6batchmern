// import { useEffect, useRef, useState } from "react"

import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import DashBoard from "./components/DashBoard"

// import { useRef } from "react"

// const App = () => {
//   console.log('Running....');
  
//   const inputRef = useRef(null)
//   const showRef  = useRef(null)

//   const [showData,setShowData] = useState("")

//   useEffect(()=>{
//     const data = localStorage.getItem("Data")
//    setShowData(data)
//   },[showData])

//   const handleCLick = () => {
//     //alert(inputRef.current.value);
//     const data = inputRef.current.value
//     localStorage.setItem("Data",data)

    
//     showRef.current.innerHTML = "Successfully Saved"
//     // setShowData(inputRef.current.value)
//   }

//   return (
//     <>
//      <div>
//       UseRef

//       <input type="text" ref={inputRef}  value={showData} onChange={handleCLick} />
     

//       <p ref={showRef}></p>
//      </div>
//     </>
//   )
// }

// export default App







// import React, { useRef } from 'react'

// const App = () => {

// const type = useRef(null)

// // const handleClick = ()=>{

// //   type.current.innerHTML = "This is My Ref"

// // }

// const boxRef = useRef(true)


// const handlehide = ()=>{

// //console.log(boxRef.current);


//   if(boxRef.current.style.display=="none"){

//     boxRef.current.style.display = "block"

//   }else{
//     boxRef.current.style.display = "none"
//   }

// }


//   return (
//     <>
//     <p ref={type}></p>
//     <div ref={boxRef} style={{backgroundColor:"red",display:"none",justifyContent:"center",alignItems:"center",width:"120px",height:"120px",color:"white"}}>
//       UseRef Hide
//     </div>
//     <button onClick={handlehide}>Click to Hide</button>
//     </>
//   )
// }

// export default App







// const App = () => {
//   const data = 10

//   const handle = ()=>{

//     const heading = document.getElementById("heading")
//     heading.innerHTML = data+1

     

//   }
//   return (
    
//     <>
//     <h1 id="heading">{data}</h1>
//     <button onClick={handle}>Click Now</button>
//     </>

//   )
// }

// export default App




// const App = () => {

//  const inputRef = useRef(null)
//  const shwoRef = useRef(null)

//  const handleClick = ()=>{

//   const saveData = inputRef.current.value
//   // shwoRef.current.innerHTML = Number(saveData) + 2

//   if(Number(saveData)%2==0){
//     shwoRef.current.innerHTML = "Even Number"
//   }else{
//     shwoRef.current.innerHTML = "Odd Number"
//   }
   

//  }
//   return (
//     <>
//     <input onChange={handleClick} ref={inputRef} type="text" />
//     <button >Click Now</button>
//     <p ref={shwoRef}></p>
//     </>
//   )
// }

// export default App





const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  )
}

export default App