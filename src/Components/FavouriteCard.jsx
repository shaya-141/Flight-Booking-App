import React from 'react'
import blackheart from '../assets/logo-icon/blackheart.png'
import { Link } from 'react-router-dom'

function FavouriteCard({value,handleViewDetails}) {
  return (
    <div id='ticketCard'  className='w-full bg-white text-[#112211] flex gap-2 px-6 py-6 rounded-xl  min-h-72'>
          <div className='pt-6'>
            <img src={value?.image} alt="" className='h-22 w-40' />
          </div>
          <div className='w-[90%] flex flex-col gap-5 items-center justify-center '>
            <div className='min-h-11 w-[95%] flex items-center justify-between gap-8 flex-wrap bg-white'>
              <div className='flex items-center gap-3'>
    
              <button className='border-[#8DD3BB]  w-[40px] h-10 border flex items-center justify-center font-medium rounded-[4px]'>{value?.review}</button>
              <span className='font-bold'>Very Good <span className='font-medium'>54 reviews</span></span>
              </div>
              <div className=' flex flex-col justify-center items-end gap-0 h-[11]'>
                <p className='text-[12px] font-medium'>starting from</p>
                <h1 className='text-[24px] font-bold text-[#FF8682] '>{value?.price}<span className='text-[12px] '>Rs</span> </h1>
              </div>
            </div>
            <div className='min-h-11 w-[95%] flex  gap-10 bg-white'>
              <div className='font-semibold'>
                <span >{value?.departure_time}</span> <span>-</span> <span>{value?.arrival_time}</span>
                <p className='font-normal opacity-[40%] mt-2'>{value?.airline}</p>
              </div>
                <div>
                  <span className='font-semibold  opacity-[78%]'>non stop</span>
                </div>
                <div>
                  <span className='font-semibold'>1 hrs</span>
                </div>
            </div>
                <hr className='w-[95%] opacity-[10%] border-[#112211]' />
            <div className='h-14 w-[95%] flex items-center  gap-4  bg-white'>
              <button className='h-12 w-12 border-[#8DD3BB] border flex items-center justify-center rounded'><img src={blackheart} alt="" /></button>
              <Link to={'/FlightDetails'} className='w-[90%]' >
             
              <button onClick={()=>{
                handleViewDetails(value)
              }}  className='h-12 w-[100%] bg-[#8DD3BB] font-semibold rounded' >View Deals</button>
         
              </Link>
            </div>
          </div>
        </div>
  )
}

export default FavouriteCard