import React from 'react'
import tour1 from '../assets/banner/tour1.jpg'
import tour2 from '../assets/banner/tour2.jpg'
import tour3 from '../assets/banner/tour3.jpg'
import tour4 from '../assets/banner/tour4.jpg'
import tour5 from '../assets/banner/tour5.jpg'
import tour6 from '../assets/banner/tour6.jpg'
import tour7 from '../assets/banner/tour7.jpg'
import tour8 from '../assets/banner/tour8.jpg'

function FeatureTripImage() {
  return (
    <div className='w-[90%] min-h-[120px] flex flex-wrap justify-center  gap-8 m-auto mt-6'>
    {/* <div className='flex gap-6'> */}
        <div>
            <img src={ tour8} alt="" className='h-[120px] rounded w-[160px]' />
        </div>
        <div>
            <img src={tour2} alt="" className='h-[120px] rounded w-[160px]' />
        </div>
        <div>
            <img src={tour3} alt="" className='h-[120px] rounded w-[160px]' />
        </div>
        <div>
            <img src={tour6} alt="" className='h-[120px] rounded w-[160px]' />
        </div>
    {/* </div> */}
    {/* <div className='flex gap-6'> */}
        <div>
            <img src={tour5} alt="" className='h-[120px] rounded w-[160px]' />
        </div>
        
        <div>
            <img src={tour4} alt="" className='h-[120px] rounded w-[160px]' />
        </div>
       
    {/* </div> */}
</div>
  )
}

export default FeatureTripImage