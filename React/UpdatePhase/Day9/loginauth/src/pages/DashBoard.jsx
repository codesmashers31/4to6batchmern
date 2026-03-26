import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const DashBoard = () => {

  const [getdatasnew,setDatasNew] = useState("")
 
  useEffect(()=>{
    const getdata = ()=>{
      const getData = localStorage.getItem("authData")
      const changeData = JSON.parse(getData)
      setDatasNew(changeData)
    
    
    }
getdata()
  },[])

  return (
    <>
    <Navbar/>
    <h1>Welcome! {getdatasnew.username}</h1>
    </>
  )
}

export default DashBoard