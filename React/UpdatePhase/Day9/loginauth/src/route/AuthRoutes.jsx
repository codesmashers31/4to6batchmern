import React from 'react'
import { Routes,Route } from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProductedRoute from '../auth/ProductedRoute'



const AuthRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<ProductedRoute><DashBoard/></ProductedRoute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
    </>
  )
}

export default AuthRoutes