import React, { useState } from 'react'
import './index.css'

const Haseeb = () => {
  const [Count, setCount] = useState(1)
  return (
    <div className='flex flex-col gap-8'>
      <h1 className='text-7xl font-bold text-center'>Counter</h1>
      <button onClick={()=>setCount(Count+1)} className='border-2 border-sky-500 pl-5 pr-5 pt-3 pb-3 bg-black text-white '>click</button>
      <div className='conterdiv'>{Count}</div>
    </div>
  )
}

export default Haseeb