import React, { lazy, Suspense } from 'react'
import NavBar from './components/NavBar'

const Dashboard = lazy(()=> import ("./components/Dashboard"))
const About = lazy(()=> import ("./components/About"))

import Home from './components/Home'


const App = () => {
  return (
    <>
    <NavBar/>
    
    <Suspense fallback={<h1>Loading........</h1>} >
    <Home/>
    <Dashboard/>
    <About/>
    </Suspense>
    </>
  )
}

export default App
