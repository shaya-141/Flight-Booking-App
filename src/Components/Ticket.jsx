import React, { useEffect } from 'react'
import travel from '../assets/logo-icon/travel.png'
import date from '../assets/logo-icon/date.png'
import seat from '../assets/logo-icon/seat.png'
import clock from '../assets/logo-icon/clock.png'
import barcode from '../assets/logo-icon/barcode.png'
import profilepic from '../assets/banner/profilepic.png'
import { useFlightContext } from '../Context/SearchFlightContext'
import { useAuthContext } from '../Context/Auth'
function Ticket({value,display,ticketRef}) {
    const {GetUser} = useAuthContext()

   

    return (
        <div ref={ticketRef} className={`min-h-[300px] bg-[#EBF6F2] flex  border border-[#EAEAEA]  rounded-2xl text-[#112211] w-full`}>
            <div className='w-[240px]  flex flex-col justify-center  gap-4 p-6 rounded-tl-2xl rounded-bl-2xl h-full  bg-[#EBF6F2]'>
                <div>
                    <h1 className='text-[26px] font-semibold'>{value?.departure_time}</h1>
                    <span className='text-[12px] font-medium opacity-[50%] mt-2'>Newark(EWR)</span>
                </div>
                <img src={travel} alt="" className='h-20 w-[36px]' />
                <div>
                    <h1 className='text-[26px] font-semibold'>{value?.arrival_time}</h1>
                    <span className='text-[12px] font-medium opacity-[50%] mt-2'>Newark(EWR)</span>
                </div>
            </div>

            <div className='h-full  w-full  bg-white rounded-br-2xl'>
                <div className='w-full min-h-[96px] p-6 bg-[#8DD3BB] rounded-tr-2xl'>
                    <div className='flex items-center gap-3 flex-wrap justify-between'>
                        <div className='flex gap-4 '>

                            <img src={profilepic} className='h-12' alt="" />
                            <div>
                                <h1 className='text-[18px] font-bold'>{GetUser?.firstName + ' ' +GetUser?.lastName  }</h1>
                                <p className='text-[14px] font-normal mt-[-5px]'>Boarding Pass N’123</p>
                            </div>
                        </div>
                        <h2 className='text-[14px] capitalize font-semibold'>{value?.ticket_class}</h2>
                    </div>
                </div>


                 <div className='min-h-[80px] flex items-center justify-between flex-wrap w-full p-6  '>
                    <div className='flex items-center   gap-3'>
                        <img src={date} alt="" />
                        <h1 className='flex text-[14px] font-medium justify-center flex-col gap-0'><span className='text-[12px] mt-1 opacity-[60%]'>Date</span>{value?.departure_date}</h1>
                    </div>   
                    <div className='flex items-center  gap-3'>
                        <img src={clock} alt="" />
                        <h1 className='flex text-[14px] font-medium justify-center flex-col gap-0'><span className='text-[12px] mt-1 opacity-[60%]'>Flight time</span>{value?.departure_time}</h1>
                    </div>  
                    <div className='flex items-center  gap-3'>
                        <img src={seat} alt="" />
                        <h1 className='flex text-[14px] justify-center  flex-col gap-0'><span className='text-[12px] mt-1 opacity-[60%]'>Seat no.</span>{value?.AirplaneSeatNumber}</h1>
                    </div> 
                </div>
                
            <div className='flex justify-between  flex-wrap items-center p-6 '>

                <div>
                   <h1 className='text-[30px] font-semibold'>EK</h1>
                   <p className='text-[12px]  font-medium opacity-[60%]'>ABC12345</p>
                </div>
                <img src={barcode} alt="" className='h-[50px] max-w-[300px]' />
            </div>

            </div>

        </div>
    )
}

export default Ticket