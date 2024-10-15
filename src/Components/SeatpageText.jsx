import React, { useEffect, useState } from 'react'
import airplaneblack from '../assets/logo-icon/airplaneblack.png'
import { useFlightContext } from '../Context/SearchFlightContext'
function SeatpageText({ value }) {

  const { AirplaneSeatNumber, setAirplaneSeatNumber, AirplaneSeatNumberPrice, setAirplaneSeatNumberPrice } = useFlightContext()
  const [firstWord, setfirstWord] = useState('')
  const [secondWord, setsecondWord] = useState('')

  useEffect(() => {

    const destination = value.from_to
    const fromTo = destination ? destination.split('-') : []
    let first = fromTo[0]
    let second = fromTo[1]
    setfirstWord(first)
    setsecondWord(second)

  }, [value?.from_to])

  return (
    <div className='mt-5 flex flex-col gap-5'>

      <h1 className='text-[22px] font-semibold'>Select seats for your trip</h1>
      <h2 className='flex items-center gap-2 text-[20px] font-medium'>{firstWord} to {secondWord} <img src={airplaneblack} alt="" className='h-6' /></h2>
      <p className='font-bold text-[#8DD3BB]'>Flight {value.flight_number}</p>
      <h1 className='text-[20px] p-4 rounded  font-medium flex justify-between w-full bg-[#8DD3BB]'>Seat Number <span className='text-[24px] font-semibold'>{AirplaneSeatNumber}</span></h1>
      <div className='flex flex-col gap-5 rounded p-4 bg-[#8dd3ba36]'>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold'>AVAILABLE</h1>
          <button className='w-[30px] h-[45px] rounded  bg-[#C2C1C1]' ></button>
        </div>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold'>SELECTED</h1>
          <button className='w-[30px] h-[45px] rounded  bg-[#8DD3BB]' ></button>
        </div>
      </div>

    </div>
  )
}

export default SeatpageText