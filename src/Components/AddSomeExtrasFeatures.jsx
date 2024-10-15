import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function AddSomeExtrasFeatures() {




  return (
    <div className='w-[90%] text-[#112211] mb-10 flex justify-between flex-wrap gap-4 items-end m-auto mt-6  '>
        <div className='w-[450px]'>
        <h1 className='text-[20px]  font-semibold'>Choose Seats</h1>
        <p className='mt-2 text-[14px] '>Do you prefer to sit in the front row? Aisle or Window? or simply want to be seated together with friends and family. Select your preferred seat and ensure it is reserved for you.</p>
        </div>
        <Link to={'/SelectSeat'}>
        <button  className='bg-[#8DD3BB]  h-[48px] w-[200px] rounded font-semibold text-[16px]'>Select</button>
        </Link>

    </div>
  )
}

export default AddSomeExtrasFeatures