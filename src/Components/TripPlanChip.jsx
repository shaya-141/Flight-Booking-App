import React from 'react'
import { Link } from 'react-router-dom'

function TripPlanChip({value,fun}) {
  return (
    <Link to={'/TripsDetail'}>
    <div id='tripchip' onClick={(e)=>{
      fun(value)
    }} className='w-[340px] h-32 p-4  cursor-pointer rounded-2xl flex gap-4 items-center'>
            <div className='bg-black w-[90px] h-[90px] rounded-2xl '>
              <img src={value.image} alt="" className='h-full w-full rounded-2xl' />
            </div>

            <div className='text-[#112211]'>
                <h3 className='font-semibold '>{value.destination}</h3>
                <p className='mt-2 font-medium'>Flights</p>
            </div>
    </div>
      </Link>
  )
}

export default TripPlanChip