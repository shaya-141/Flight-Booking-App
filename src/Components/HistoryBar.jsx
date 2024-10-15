import React from 'react'
import line from '../assets/logo-icon/line1.png'
import airplaneblack from '../assets/logo-icon/airplaneblack.png'
import locatation from '../assets/logo-icon/location.png'

function HistoryBar() {
    return (
        
        <div id='midBar' className='w-[100%] mt-4  m-auto flex items-center justify-start text-[#112211] py-4 px-6 rounded-xl h-20 '>
            <div className='w-[50%]   relative'>
                <h1 className='text-[16px] flex items-center gap-2 cursor-pointer relative  font-semibold'><img src={airplaneblack} alt="" className='h-5' /> Flights</h1>
                <hr className={`w-[30%] border absolute bottom-[-28px] border-[#8DD3BB] `} />
            </div>
            <img src={line} alt="" />

            <div className=' w-[50%] relative '>
                <h1 className='text-[16px] ml-6  flex items-center gap-2 cursor-pointer w-[70px] font-semibold'><img src={locatation} alt="" className='h-5' /> Trips</h1>
                {/* <hr className={`w-[30%]  border absolute bottom-[-28px] left-4 border-[#8DD3BB] `} /> */}

            </div>
        </div>
    )
}

export default HistoryBar