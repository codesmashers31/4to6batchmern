import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [formData,setFormData] = useState({email:"",password:""})
    const navigate = useNavigate()
  const handlechange = (e)=>{

    const names = e.target.name
    const values = e.target.value

    setFormData({...formData,[names]:values})
   

  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const getData = localStorage.getItem("authData")
   const changeData = JSON.parse(getData)

    //console.log(changeData);
    
    if(changeData.email === formData.email && changeData.password === formData.password){
       
        setFormData({email:"",password:""})
        navigate("/")
        

    }else{
        alert('Invalid Data')
    }

    
    
  }



  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        
        <input type="email" name="email"  value={formData.email} onChange={handlechange}  />
        <input type="password" name="password"  value={formData.password} onChange={handlechange}  />
        <input type="submit"  />
    </form>
    </>
  )
}

export default Login