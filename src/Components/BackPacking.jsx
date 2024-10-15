import React from 'react'

function BackPacking() {
  return (
    <div id='backpackingchild' className='w-[500px] h-[420px] text-[#112211] flex flex-col gap-[50px] p-6 rounded-[20px] bg-[#8DD3BB]'>
        <div className='flex flex-col gap-6 m-auto w-[90%]'>
          <div className=' h-[110px] flex justify-between '>
            <h1 className='text-[40px] font-bold'>Backpacking <br /> Sri Lanka</h1>
            <div className='w-[68px] h-[62px] bg-white p-2 text-center rounded-lg'>
                <p>From</p>
                <h4 className='text-[20px] font-semibold'>$700</h4>
            </div>
           </div>
            <div>
                <p className='text-[14px]'>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
            </div>
        </div>

        <button className='text-[14px] font-medium w-[90%] h-[50px]  rounded-lg bg-white m-auto'>Book Flight</button>
    </div>
  )
}

export default BackPacking