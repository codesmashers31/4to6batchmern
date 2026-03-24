import React, { useState } from 'react'

const Primitive = () => {
 console.log('this is running...');
 
  const [heading,setHeading] = useState(0)

  const clicktochange = ()=>{

    setHeading(heading+1)

  }


  return (
    <>
    <div className='bg-blue-700 text-white p-10 flex flex-col gap-3 justify-center items-center'>
        <h1>{heading}</h1>
        <button className='bg-black rounded text-white p-1' onClick={clicktochange}>Click to change</button>
    </div>

    
    </>
  )
}

export default Primitive




