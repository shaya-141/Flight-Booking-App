import React from 'react'
import Navbar from './Navbar'

function Landingbanner() {
  return (
    <>
        
        <div id='Landinbanner'  className='h-[600px] w-[95%] m-auto  mt-8 rounded-[24px]'>

        <div id='landingchild' className='h-full w-full rounded-[24px]'>
            <Navbar></Navbar>
            <div className='text-white text-center mt-10'>
              <h1 className='text-[45px] font-bold'>Helping Others</h1>
              <h1 className='text-[80px] font-bold'>Live & Travel</h1>
              <h2 className='text-[20px] font-semibold'>Special offers to suit your plan</h2>
            </div>
        </div>
        </div>
        
    
    
    </>
  )
}

export default Landingbanner