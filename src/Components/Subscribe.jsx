import React from 'react'
import subimg from '../assets/banner/subscribeimg.png'
function Subscribe() {
  return (
    <div className='w-full flex flex-wrap justify-center  relative top-40'>
        <div id='subscribe' className='w-[85%] min-h-80 rounded-[20px] px-6 pb-4 bg-[#CDEAE1] flex  justify-between'>
            <div id='subtext' className='flex flex-col w-[590px] justify-center gap-4 text-[#112211]'>
              <span>

              <h1 className='text-4xl font-semibold mt-10 text-[#112211]'>Subscribe </h1>
              <h1 className='text-4xl font-semibold mt-3 text-[#112211]'>Newsletter </h1>
              </span>
              <span>

              <h2 className='text-xl font-semibold'>The Travel</h2>
              <p className='mt-2'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
              </span>
              <div className='flex items-center gap-4 flex-wrap '>
                <input  className='max-w-[400px] min-w-[340px] placeholder-black h-14 px-4 rounded' type="email" name="" id="" placeholder='Your Email Address' />
                <button className='py-2 px-4 bg-[#112211] text-white h-14 rounded text-sm '>Subscribe</button>
              </div>
            </div>
            <div className='w-[350px] h-[300px]'>
              <img src={subimg} alt="" className='w-[350px] h-[300px] ' />
            </div>
        </div>
    </div>
  )
}

export default Subscribe