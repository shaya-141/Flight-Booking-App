import React from 'react'
import timer from '../assets/logo-icon/timer.png'
function Policy() {
    return (
        <div className='bg-[#8DD3BB99] rounded-lg text-[#112211] flex flex-col gap-4 p-4 w-[90%] m-auto mt-10 min-h-[105px] flex-wrap'>
            <div>
                <h1 className='text-[24px] font-bold'>Emirates Airlines Policies</h1>
            </div>
            <div className='flex items-center flex-wrap gap-10'>
                <div className='flex items-center gap-4'>
                    <img src={timer} alt="" />
                    <p className='text-[16px] font-medium opacity-[75%]'>Pre-flight cleaning, installation of cabin HEPA filters.</p>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={timer} alt="" />
                    <p className='text-[16px] font-medium opacity-[75%]'>Pre-flight health screening questions.</p>
                </div>
            </div>
        </div>
    )
}

export default Policy