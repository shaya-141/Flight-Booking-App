import React from 'react'
import heart from '../assets/logo-icon/heart.png'
import { Link } from 'react-router-dom'

function TripDetailName({value}) {


  return (
    <section id="airlinename2" className='text-[#112211] flex  justify-between items-center w-[90%] m-auto mt-10  gap-2'>
        <div className='min-w-[380px] h-[140px] flex flex-col gap-4 '>
            <h1 className='text-[24px] font-bold'>{value?.destination}</h1>
            <div >
            <p className='text-[14px] w-full font-medium flex  items-center gap-4'>Accomadation <span className='font-semibold'>{value?.accommodation_type}</span></p>
            <p className='text-[14px] font-medium flex items-center mt-1 gap-12'>Best Time <span className='font-semibold'> {value?.best_time_to_visit}</span></p>
            </div>
            <div className='flex items-start gap-2 '>
                <button className='w-10 h-8 border rounded text-[12px] border-[#8DD3BB] text-center'>{value?.review}</button>
                <p className='font-semibold flex items-center mt-1'>Very Good <span className='font-normal pl-1'> 54 reviews</span></p>
            </div>
        </div>

        <div id="btnsec" className='w-[280px] h-[120px] flex flex-col gap-4 '>
            <div className='w-full flex justify-end'>
                <h1 className='text-[32px] font-bold text-[#FF8682]'>{value?.cost_per_person} rs</h1>
            </div>
            <div className='w-full flex justify-end gap-6'>
                <button className='w-12 h-12 border border-[#8DD3BB] flex justify-center items-center rounded'><img src={heart} alt="" /></button>
                <Link to={'/BookingDetails/Trip'}>
                <button id='main2btnsec' className='w-[150px] h-12 bg-[#8DD3BB] text-[14px] font-semibold rounded' >Book now</button>
                </Link>
            </div>
        </div>

    </section> 
  )
}

export default TripDetailName