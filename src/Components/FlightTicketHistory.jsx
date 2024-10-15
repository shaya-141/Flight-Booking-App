import React from 'react'
import line from '../assets/logo-icon/line1.png'
import date from '../assets/logo-icon/date.png'
import forward from '../assets/logo-icon/forward.png'
import Ticket from './Ticket'
function FlightTicketHistory({data,fun,index,download,ticketRef}) {
  return (
    <div ref={ticketRef} id='FlightTicketHistory' className='w-[100%] flex-wrap mt-4  flex items-center justify-start gap-10 text-[#112211] min-h-[100px] relative py-8 px-6 rounded-[16px]'>
        <div className='h-[80px] p-3 w-[100px] flex items-center justify-center border-[#8DD3BB] border rounded-lg'>

            <img src={data?.image} alt="" className='h-[30px]' />
        </div>

          
                <div className='w-[270px] h-[52px] gap-4 text-[20px] font-semibold flex items-center'>
                <h1 className='flex  justify-center  flex-col gap-0'><span className='text-[12px] mt-1 opacity-[60%]'>Newark(EWR)</span>{data?.departure_time}</h1>
                    <h1>━</h1>
                <h1 className='flex  justify-center flex-col gap-0'><span className='text-[12px] mt-1 opacity-[60%]'>Newark(EWR)</span>{data?.arrival_time}</h1>
                    
                </div>
          

           <img src={line} alt="" className='' />

            <div className=' h-20 '>

                <div className='w-[260px] h-[50px] mt-3 gap-8 text-[20px] font-semibold  flex items-center flex-wrap'>
                    <div className='flex items-center  gap-3'>
                        <img src={date} alt="" />
                        <h1 className='flex text-[14px] justify-center flex-col gap-0'><span className='text-[12px] mt-1 opacity-[60%]'>Date</span>{data?.departure_date}</h1>
                    </div>
                    <div className='flex items-center  gap-3'>
                        <img src={date} alt="" />
                        <h1 className='flex text-[14px] justify-center  flex-col gap-0'><span className='text-[12px] mt-1 opacity-[60%]'>Seat no.</span>{data?.AirplaneSeatNumber}</h1>
                    </div>
                   
                </div>
            
                {/* <div className='w-[270px] h-[50px] gap-4 text-[20px] font-semibold flex items-center flex-wrap'>
                <div className='flex items-center  gap-2'>
                        <img src={date} alt="" />
                        <h1 className='flex text-[14px] justify-center flex-col gap-0'><span className='text-[12px] mt-1 opacity-[60%]'>Flight time.</span>Newark(EWR)</h1>
                    </div>
                   
            
                </div> */}
         
            </div>

            <div className=' gap-4 flex  h-12'>
                    <button onClick={()=>{download(index)}} className='h-12  w-[155px] rounded bg-[#8DD3BB] font-semibold text-[14px]'>Download Ticket</button>
                    <button onClick={(e)=>{fun(index)}
                        
                    } className='h-12 w-[48px] rounded border border-[#8DD3BB] font-semibold text-[14px] py-2 px-4'><img src={forward} alt="" /></button>

            </div>  

            

    </div>
  )
}

export default FlightTicketHistory