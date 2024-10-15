import React, { useEffect, useState } from 'react'
import airplane from '../assets/logo-icon/airplaneblack.png'
import wifi from '../assets/logo-icon/wifi.png'
import meal from '../assets/logo-icon/meal.png'
import sit from '../assets/logo-icon/sit.png'
import timer from '../assets/logo-icon/timer.png'
import line from '../assets/logo-icon/line.png'
import line2 from '../assets/logo-icon/line2.png'
import PriceCard from './PriceCard'
function BookingDetailTicket({ value }) {
    const [Data, setData] = useState('')
    const [day, setday] = useState(null)
    const [month, setmonth] = useState(null)
    const [firstword, setfirstword] = useState('')
    const [secoundword, setsecoundword] = useState('')
    const fromto = value?.from_to; // Optional chaining to safely access from_to

    // Safely handle the case where fromto might be undefined or empty
    const words = fromto ? fromto.split(" - ") : []
    const datestr = value.departure_date


    useEffect(() => {
        setData(value)
        // console.log('value', value);
        const date = new Date(datestr)
        let day = +date.getDate();
        let month = date.toLocaleString('default', { month: 'long' });

        setday(day)
        setmonth(month)
        let firstWord = words[0];
        let secondWord = words[1];

        setfirstword(firstWord)
        setsecoundword(secondWord)
    }, [value])

    return (
        <>
            <div id='BookingDetailTicket' className='w-[90%] text-[#112211] mt-8 mx-auto flex justify-between gap-4 flex-wrap  '>
                <div id='bookingchild' className='w-[58%] h-[400px]  text-[#112211] rounded-xl     py-8 px-6  '>

                    <div id='name' className='w-full  flex items-center justify-between'>
                        <h1 className='text-[24px] font-bold'>{Data.airline === 'Pakistan International Airlines'
                            ?
                            'PIA'
                            :
                            value.airline
                        } {Data?.flight_number} Airbus</h1>
                        <h1 className='text-[32px] font-bold text-[#FF8682]'></h1>
                    </div>
                    {/* btn */}
                    <div className='w-full mt-3 flex items-center justify-between '>
                        <h1 className='text-[16px] font-bold'>Dept {month} {day} </h1>
                        <span className='text-[20px] font-medium opacity-[75%]'>{value.flight_duration_hours}hrs</span>
                    </div>
                    {/* tick */}
                    <div id='tick2' className='w-full min-h-[100px]  flex items-center flex-wrap gap-5 justify-between mt-6 '>
                        <div id='tick2' className='w-[280px] h-[80px] flex items-center justify-center gap-6 border border-[#8DD3BB]  rounded-lg'>
                            <img id='log' src={Data?.image} className={` ${Data.airline ===
                                "Pakistan International Airlines"
                                ?
                                'h-10'
                                :
                                'h-5'
                                }  `} />
                            <div className='flex flex-col gap-1 '>
                                <h1 className='text-[20px] font-semibold'>{value.airline === 'Pakistan International Airlines'
                                    ?
                                    'PIA'
                                    :
                                    value.airline
                                }</h1>
                                <span className='text-[14px] font-medium opacity-[60%]'>Airbus </span>
                            </div>
                        </div>

                        <div id='tickimgsec' className='w-[320px] flex py-4 px-6 items-center h-[80px] '>

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

                    {/* //Timing */}
                    <div id='timing2' className='w-full min-h-[48px] mt-6  flex justify-center gap-10 flex-wrap items-center'>
                        <div className='flex items-center gap-3'>
                            <h2 className='text-[22px] font-semibold'>{value?.departure_time}</h2>
                            <p className='text-[16px] font-medium opacity-[60%]'>{firstword}</p>
                        </div>

                        <div className='flex items-center gap-4'>
                            <img src={line} alt="" />
                            <img src={airplane} alt="" className='h-10 ' id='air' />
                            <img src={line2} alt="" />
                        </div>

                        <div className='flex items-center gap-4'>
                            <h2 className='text-[22px] font-semibold'>{value?.arrival_time}</h2>
                            <p className='text-[16px] font-medium opacity-[60%]'>{secoundword}</p>
                        </div>
                    </div>
                </div>

                <PriceCard value={value}></PriceCard>

            </div>
        </>
    )
}

export default BookingDetailTicket