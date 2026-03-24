// // import React, { useState } from 'react'

import { useState } from "react"

// import { useState } from "react"

// // const App = () => {
// // const [formData, setFormData] = useState("")
// // const [ageData, setageData] = useState("")
// // const [emailData, setemailData] = useState("")

// // const [saevData,setSaveData] = useState([])
// //  const handleChange =(e)=>{

  
// //   setFormData(e.target.value)
  

// //  }

// //  const handleageChange = (e)=>{
// // setageData(e.target.value)
// //  }

// // const handleemailChange = (e)=>{
// //   setemailData(e.target.value)
// // }




// // const handleClick = ()=>{
// //   const userData = {name:formData,age:ageData,email:emailData}

// //   //console.log(userData)
// //   setSaveData(userData)


// // }

// //   return (
// //     <>
// //     <input type="text" placeholder='Enter your name' onChange={handleChange} />
// //     <input type="number" placeholder='Enter your age' onChange={handleageChange} />
// //     <input type="email" placeholder='Enter your email' onChange={handleemailChange} />

// //    <button onClick={handleClick}>Register</button>
// // <h1>{formData}-{ageData}-{emailData}</h1>

// // <p>{saevData.name}</p>
// // <p>{saevData.age}</p>
// // <p>{saevData.email}</p>
// //     </>
// //   )
// // }

// // export default App







// const App = () => {

//   const [fromData,setFormData] = useState({username:"",userage:"",useremail:""})
//    const [saveData,setSaveData] = useState([])



//   const handleChange = (e) =>{
// // console.log(e);

//    setFormData({...fromData, [e.target.name]:e.target.value})

//   //  fromData = [useremail]:ythgsds

// //  useremail:dssad,age:29,sadgfds:sfsdf


//   }

//   const handelSubmit = (e)=>{
//   e.preventDefault()
// //console.log(fromData);
//    setSaveData(fromData)
//   }

//   return (
//    <>

//    <form onSubmit={handelSubmit}>
  
//     <input type="text" placeholder='Enter your name' name="username" value={fromData.name} onChange={handleChange} required />
//     <input type="number" placeholder='Enter your age' name="userage" value={fromData.age} onChange={handleChange} required />
//     <input type="email" placeholder='Enter your email' name="useremail" value={fromData.email} onChange={handleChange} required />
//     <input type="submit" value={"Register"} />
//    </form>
     

//      <h1>{saveData.name}</h1>
//      <h1>{saveData.age}</h1>
//      <h1>{saveData.email}</h1>
//    </>
//   )
// }

// export default App







const App = () => {

const [formData,setFromData] = useState({username:"",age:""})
const [showData,setShowData] = useState({})
const [error,setError] = useState(null)
  const handleChange = (e)=>{

     
    const inputname = e.target.name           
    const inputvalue = e.target.value

  //  console.log(inputname,inputvalue);
   
//  const datasave = {...formData, [inputname]:inputvalue}
  // console.log(datasave);
  
setFromData({...formData, [inputname]:inputvalue})

  }


  const handleSubmit = (e)=>{

   //console.log(e);

   e.preventDefault()
   
 
//console.log(formData);

if(!formData.username || formData.age){
  return setError("Need To fill the Name")
}

if(formData.username || !formData.age){
  return setError("Need To fill the Age")
}

setShowData(formData)



  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleChange}  />
      <p style={{color:"red"}}>{error}</p>
      <input type="number" name="age" onChange={handleChange}  />
       <p style={{color:"red"}}>{error}</p>
      <input type="submit"  />
    </form>

    <h1>{showData.username}</h1>
    <h1>{showData.age}</h1>
    
    </>
  )
}

export default App