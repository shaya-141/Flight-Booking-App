import React, { useState } from 'react'
import AirplaneSeat from './AirplaneSeat'

function AirplaneSeatChoose() {
    const [selectedSeat, setselectedSeat] = useState(null)
    const SeatNumberGet = (seatNumber, price) => {
       
        // console.log(seatNumber, price);
        setselectedSeat(seatNumber)
    }

    return (
        <div id='SeatsContainer'  className='w-[320px] mt-10  border-l border-r border-[#112211] flex items-center justify-center  min-h-[600px] '>
            <div className=' flex w-[90%] items-center  justify-between h-[95%]  p-4'>
                <div className='flex flex-col gap-3'>

                    <div id='seatalpha1' className='flex gap-6 justify-center'>

                        <h2 className='text-[22px] font-bold'>A</h2>
                        <h2 className='text-[22px] font-bold'>B</h2>
                        <h2 className='text-[22px] font-bold'>C</h2>


                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'1A'} price={2000}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'1B'} price={2000}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'1C'} price={2000}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'2A'} price={1950}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'2B'} price={1950}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'2C'} price={1950}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'3A'} price={1900}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'3B'} price={1900}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'3C'} price={1900}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'4A'} price={1850}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'4B'} price={1850}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'4C'} price={1850}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'5A'} price={1800}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'5B'} price={1800}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'5C'} price={1800}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'6A'} price={1750}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'6B'} price={1750}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'6C'} price={1750}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'7A'} price={1700}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'7B'} price={1700}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'7C'} price={1700}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'8A'} price={1650}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'8B'} price={1650}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'8C'} price={1650}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'9A'} price={1600}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'9B'} price={1600}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'9C'} price={1600}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'10A'} price={1550}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'10B'} price={1550}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'10C'} price={1550}></AirplaneSeat>

                    </div>

                </div>

                {/* right seats */}
                <div className='flex flex-col gap-3'>
                    <div id='seatalpha2' className='flex gap-6 justify-center'>

                        <h2 className='text-[22px] font-bold'>D</h2>
                        <h2 className='text-[22px] font-bold'>E</h2>
                        <h2 className='text-[22px] font-bold'>F</h2>


                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'1D'} price={2000}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'1E'} price={2000}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'1F'} price={2000}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'2D'} price={1950}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'2E'} price={1950}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'2F'} price={1950}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'3D'} price={1900}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'3E'} price={1900}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'3F'} price={1900}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'4D'} price={1850}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'4E'} price={1850}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'4F'} price={1850}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'5D'} price={1800}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'5E'} price={1800}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'5F'} price={1800}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'6D'} price={1750}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'6E'} price={1750}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'6F'} price={1750}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'7D'} price={1700}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'7E'} price={1700}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'7F'} price={1700}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'8D'} price={1650}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'8E'} price={1650}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'8F'} price={1650}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'9D'} price={1600}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'9E'} price={1600}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'9F'} price={1600}></AirplaneSeat>

                    </div>
                    <div className='flex gap-2'>

                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'10D'} price={1550}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'10E'} price={1550}></AirplaneSeat>
                        <AirplaneSeat selectedSeat={selectedSeat} fun={SeatNumberGet} seatnumber={'10F'} price={1550}></AirplaneSeat>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default AirplaneSeatChoose