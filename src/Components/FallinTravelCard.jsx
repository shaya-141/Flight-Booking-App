import React from 'react'
import img from '../assets/banner/fallin.png'
function FallinTravelCard() {
    return (
        <div id='fall' className='w-[270px] h-[420px] rounded-xl text-white relative bg-blue-700'>
            <img src={img} alt="" className='h-full w-full' />
            <div className='w-[90%]   absolute bottom-7 left-4 '>
                <div>
                    <h1 className='font-semibold text-[24px]'>Melbourne</h1>
                    <p className='flex items-center justify-between text-[14px] mt-[-5px]'>An amazing journey <span className='font-semibold mt-[-5px] text-[24px]'>$ 700</span></p>
                </div>
                <button className='bg-[#8DD3BB] text-[#112211] font-semibold h-12 w-full mt-2 text-[14px] rounded'>Book Flight</button>
            </div>
        </div>
    )
}

export default FallinTravelCard