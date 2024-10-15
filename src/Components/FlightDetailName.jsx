import React from 'react'
import locate from '../assets/logo-icon/location.png'
import heart from '../assets/logo-icon/heart.png'
import { Link } from 'react-router-dom'
import { addItemToLocalStorage } from '../utils/LocalFunctions'
function FlightDetainName({ value, fun }) {



    return (
        <section id="airlinename" className='text-[#112211] flex  justify-between items-center w-[90%] m-auto mt-10  gap-2'>
            <div className='min-w-[380px] h-[120px] flex flex-col gap-4 '>
                <h1 className='text-[24px] font-bold'>{value.airline === 'Pakistan International Airlines'
                    ?
                    'PIA'
                    :
                    value.airline
                } {value.flight_number} Airbus</h1>
                <p className='text-[14px] font-normal flex items-center gap-2'><img src={locate} alt="" className='h-4' />{value.departure_airport}.</p>
                <div className='flex items-start gap-2 '>
                    <button className='w-10 h-8 border rounded text-[12px] border-[#8DD3BB] text-center'>{value.review}</button>
                    <p className='font-semibold flex items-center mt-1'>Very Good <span className='font-normal pl-1'> 54 reviews</span></p>
                </div>
            </div>

            <div id="btn" className='w-[280px] h-[120px] flex flex-col gap-4 '>
                <div className='w-full flex justify-end'>
                    <h1 className='text-[32px] font-bold text-[#FF8682]'>{value.price} rs</h1>
                </div>
                <div className='w-full  flex justify-end gap-6'>

                    <button onClick={()=>{addItemToLocalStorage('favourites',value)}} className='w-12 h-12 border border-[#8DD3BB] flex justify-center items-center rounded'><img src={heart} alt="" /></button>
                    <Link to={'/BookingDetails'}>
                        <button id='btnchild' className='w-[155px] h-12 bg-[#8DD3BB] text-[14px] font-semibold rounded' onClick={fun}>Book now</button>
                    </Link>
                </div>
            </div>

        </section>)
}

export default FlightDetainName