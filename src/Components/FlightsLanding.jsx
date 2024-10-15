import React from 'react'
import show from '../assets/logo-icon/show.png'
import { Link } from 'react-router-dom'
function FlightsLanding() {
    return (
        <>
            <div id='FlightLanding' className='w-[85%] bg-black relative text-center text-white h-[550px] rounded-2xl'>
                <div id='flightlandinggradient' className='h-full w-full rounded-2xl'>

                <div className='absolute bottom-10 flex flex-col items-center justify-center w-full gap-2'>

                    <h1 className='text-4xl font-bold '>Flights</h1>
                    <h3 className='text-base p-4'>Search Flights & Places Hire to our most popular destinations</h3>
                    <Link to={'/FlightListing'}>
                    <button className='w-[150px] h-12 border-none text-sm flex items-center justify-center gap-2 text-[#112211] bg-[#8DD3BB] font-medium rounded   '>
                        <img src={show} alt="" />
                        Show Results
                    </button>
                    </Link>
                </div>
                </div>
            </div>
        </>
    )
}

export default FlightsLanding