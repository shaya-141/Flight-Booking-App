import React, { useEffect } from 'react'
import airplane from '../assets/logo-icon/airplaneblack.png'
import wifi from '../assets/logo-icon/Wifi.png'
import meal from '../assets/logo-icon/meal.png'
import sit from '../assets/logo-icon/sit.png'
import timer from '../assets/logo-icon/timer.png'
import line from '../assets/logo-icon/line.png'
import line2 from '../assets/logo-icon/line2.png'
import { useState } from 'react'
function FlightDetailTicket({ value , type }) {
  const [day, setday] = useState(null)
  const [dayreturn, setdayreturn] = useState(null)
  const [month, setmonth] = useState(null)
  const [firstword, setfirstword] = useState('')
  const [secoundword, setsecoundword] = useState('')
  const fromto = value?.from_to; // Optional chaining to safely access from_to

  // Safely handle the case where fromto might be undefined or empty
  const words = fromto ? fromto.split(" - ") : []
  
  
  const datestr = value.departure_date
  // console.log('currentajajg',datestr);
  
  useEffect(()=>{
    if (type === 'returntrip') {
      const returnstr = value.return.return_departure_date
      const dater = new Date(returnstr)
      let  dayreturnnum = +dater.getDate();
      
      setdayreturn(dayreturnnum)
    }
     const date = new Date(datestr)
     
     let  day = +date.getDate();
    
     let month = date.toLocaleString('default', { month: 'long' });
      // console.log(returnstr);
      
     setday(day)
     setmonth(month)
     let firstWord = words[0];  
     let secondWord = words[1]; 

     setfirstword(firstWord)
     setsecoundword(secondWord)

  },[])


  return (
    <div id='FlightDetailTicket' className='w-[90%] min-h-[280px] text-[#112211] rounded-xl mt-8 m-auto  py-8 px-6  '>
      <div className='w-full flex items-center justify-between '>
        <h1 className='text-[20px] font-semibold'>{ type === 'returntrip' ? 'Return' 
        :
        'Dept'
        } {month} {type === 'returntrip' ? dayreturn : day} </h1>
        <span className='text-[20px] font-medium opacity-[75%]'>{value.flight_duration_hours} hrs</span>
      </div>

      <div id='tick' className='w-full min-h-[100px]  flex items-center flex-wrap gap-5 justify-between mt-6 '>
        <div className='w-[280px]  h-[80px] flex items-center justify-center gap-6 border border-[#8DD3BB]  rounded-lg'>
          <img src={value.image} alt="" className={` ${value.airline ===
            "Pakistan International Airlines"
            ?
            'h-10'
            :
            'h-5'
          }  `} />
          <div className='flex flex-col gap-1 '>
            <h1 className='text-[20px]  font-semibold'>{value.airline === 'Pakistan International Airlines'
              ?
              'PIA'
              :
              value.airline
            }
            </h1>
            <span className='text-[14px] font-medium opacity-[60%]'>Airbus {value.flight_number}</span>
          </div>
        </div>

        <div id='tickimg' className='w-[320px] flex py-4 px-6 items-center h-[80px] '>

          <div>
            <img src={airplane} alt="" className='h-5' />
          </div>
          <hr className='border w-12 rotate-90 opacity-[75%] border-[#D7E2EE]' />
          <div>
            <img src={wifi} alt="" className='h-5' />
          </div>
          <hr className='border w-12 rotate-90 opacity-[75%] border-[#D7E2EE]' />
          <div>
            <img src={timer} alt="" className='h-5' />
          </div>
          <hr className='border w-12 rotate-90 opacity-[75%] border-[#D7E2EE]' />
          <div>
            <img src={meal} alt="" className='h-5' />
          </div>
          <hr className='border w-12 rotate-90 opacity-[75%] border-[#D7E2EE]' />
          <div>
            <img src={sit} alt="" className='h-5' />
          </div>
        </div>

      </div>




      <div id='timing' className='w-full min-h-[48px] mt-8  flex justify-center gap-10 flex-wrap items-center'>
        <div className='flex items-center gap-4'>
          <h2 className='text-[22px] font-semibold'>{type === 'returntrip' ? value.return.return_departure_time : value.departure_time}</h2>
          <p className='text-[16px] font-medium opacity-[60%]'>{type === 'returntrip' ? secoundword :firstword}</p>
        </div>

        <div className='flex items-center gap-4'>
          <img src={line} alt="" />
          <img src={airplane} alt="" className='h-10' />
          <img src={line2} alt="" />
        </div>

        <div className='flex items-center gap-4'>
          <h2 className='text-[22px] font-semibold'>{type === 'returntrip' ? value.return.return_arrival_time : value.arrival_time}</h2>
          <p className='text-[16px] font-medium opacity-[60%]'>{type === 'returntrip' ? firstword :secoundword}</p>
        </div>
      </div>

    </div>
  )
}

export default FlightDetailTicket