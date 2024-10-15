import React from 'react'

function TextBar({h1,p,mt}) {
  return (
    <div className={`w-full ${mt}`} >
        <div className=' w-[88%] m-h-24 m-auto text-[#000000]'>
            <h1 className='text-[36px] font-semibold'>{h1}</h1>
            <p className='font-normal w-[80%] text-[16px] mt-1'>{p}</p>
        </div>
    </div>
  )
}

export default TextBar