import React from 'react'
import star from '../assets/logo-icon/star.png'
import google from '../assets/logo-icon/googleicon.png'


function ReviewCard({img}) {
  return (
    

    <div id='reviewcard' className='w-[320px] h-[500px] border rounded-[20px] flex flex-col gap-[20px] p-5'>
        <div>

        <h1 className='text-base text-[#112211] font-bold'>“A real sense of community, nurtured”</h1>
        <p className='text-sm mt-4'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for .</p>
        </div>

        <div className='flex flex-col gap-4'>
            <div className='flex gap-3' >
                <span><img src={star} alt="" /></span>
                <span><img src={star} alt="" /></span>
                <span><img src={star} alt="" /></span>
                <span><img src={star} alt="" /></span>
                <span><img src={star} alt="" /></span>
            </div>
            <span>
            <h1 className='text-[#112211] font-bold'>Olga</h1>
            <p className='text-[12px] text-[#112211] font-medium'>Weave Studios – Kai Tak</p>
            </span> 
            <span className='flex gap-2'>
                <img src={google} alt="" />
                <p>Google</p>
            </span>
        </div>
            <div className='w-[95%] h-[150px]'>
                <img src={img} alt="" />
            </div>

    </div>
    
  )
}

export default ReviewCard