import React, { useEffect, useState } from 'react'
import { useFlightContext } from '../Context/SearchFlightContext'
import { Link } from 'react-router-dom'

function SeatPriceCard({ value, fun }) {
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
        <div className='w-[300px] '>
            <div className='mt-5  rounded-2xl'>
                <div className='w-full rounded-tr rounded-tl bg-[#8DD3BB] p-4'>
                    <h1 className='text-[20px] font-semibold flex items-center justify-between'>Charges <span>{AirplaneSeatNumberPrice}</span></h1>

                </div>
                <div className='h-100px w-full rounded-br rounded-bl bg-[#8DD3BB]  p-4'>
                    <p className='flex justify-between items-center text-[14px] font-semibold opacity-[75%]'>{firstWord} to {secondWord} <span>{AirplaneSeatNumberPrice}</span></p>

                </div>
            </div>
            <Link to={'/BookingDetails'}>
            <button className='w-full h-[48px] mt-4 border-none bg-[#112211] text-white rounded-md' onClick={fun}>Confirm Selection</button>
            </Link>
        </div>
    )
}

export default SeatPriceCard