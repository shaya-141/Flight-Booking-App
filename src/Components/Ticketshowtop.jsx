import React from 'react'

function Ticketshowtop() {
  return (
    <>
      <div id="top" className='w-[99%] m-auto px-6 py-6 h-20 gap-6  flex items-center justify-center bg-white   rounded-xl'>
            <div className=' w-[25%]  cursor-pointer'>
              <h1 className='font-semibold'>Cheapest</h1>
              <p className='opacity-[40%] '>$99</p>
            </div>
            
            <hr className='w-9 border rotate-90' />
            

            <div className='w-[25%]  cursor-pointer'>
              <h1 className='font-semibold'>Best</h1>
              <p className='opacity-[40%] '>$99</p>
            </div>
            <hr className='w-9 border rotate-90' />

            <div className='w-[25%]  cursor-pointer'>
              <h1 className='font-semibold'>Quickest</h1>
              <p className='opacity-[40%] '>$99</p>
            </div>
            
          </div>
    </>
  )
}

export default Ticketshowtop