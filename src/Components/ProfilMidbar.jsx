import React from 'react'
import line from '../assets/logo-icon/line1.png'
function ProfilMidbar({fun,fun2,displayundeline1,displayundeline2}) {
  
  return (
    <div id='midBar' className='w-[90%] m-auto flex items-center justify-start text-[#112211] py-4 px-6 rounded-xl h-20 '>
        <div  className='w-[50%]   relative'>
            <h1 onClick={fun}   className='text-[16px] cursor-pointer  absolute top-[-10px] font-semibold'>Account</h1>
            <hr className={`w-[30%] border ${displayundeline1} border-[#8DD3BB] absolute bottom-[-40px]`} />
        </div>
        <img src={line} alt="" />

        <div  className=' w-[50%] relative '>
        <h1  onClick={fun2}  className='text-[16px] ml-6  cursor-pointer w-[70px] font-semibold'>History</h1>
          <hr className={`w-[30%] ${displayundeline2} border border-[#8DD3BB] absolute left-5 bottom-[-30px]`} />
            
        </div>
    </div>
  )
}

export default ProfilMidbar