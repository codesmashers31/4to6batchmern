import React, { useState } from 'react'

const Register = () => {

    const [formData,setFormData] = useState({username:"",email:"",password:""})
    
  const handlechange = (e)=>{

    const names = e.target.name
    const values = e.target.value

    setFormData({...formData,[names]:values})
   

  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const chnageData = JSON.stringify(formData)

    localStorage.setItem("authData",chnageData)
    
    alert('Succfully Added')

    setFormData({username:"",email:"",password:""})
    
  }



  return (
    <>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handlechange} />
        <input type="email" name="email"  value={formData.email} onChange={handlechange}  />
        <input type="password" name="password"  value={formData.password} onChange={handlechange}  />
        <input type="submit"  />
    </form>
    </>
  )
}

export default Register