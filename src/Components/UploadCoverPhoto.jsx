import React from 'react'
import uploadCover from '../assets/banner/uploadCover.png'
import Upload from '../assets/logo-icon/Upload.png'
import profilepic from '../assets/banner/profilepic.png'
function UploadCoverPhoto({value}) {
  return (
    <div className='h-[480px] '>

    <div className='w-[90%] relative text-[#112211] h-[350px]   justify-center bg-gray-400  rounded-xl m-auto mt-[40px]'>

      <img src={uploadCover} className='w-full h-full z-0' alt="" />

      <button className='flex absolute bottom-6 right-7 h-[48px] w-[180px] text-[14px] justify-center rounded gap-1 bg-[#8DD3BB] items-center font-medium z-10'><img src={Upload} alt="" />Upload new cover</button>

    <div className='w-[100%] flex justify-center relative top-[-60px] '>

      <div className='w-[185px] flex flex-col left-[40%] items-center '>

        <img src={profilepic} className='h-[120px]  rounded-[50%]' alt="" />
        <h1 className='text-[18px] font-semibold '>{value?.firstName + '' + value?.lastName}</h1>
        <p className='text-[16px] font-medium opacity-[45%]'>{value?.Email}shayan</p>
      </div>
    </div>

    </div>
    </div>
  )
}

export default UploadCoverPhoto