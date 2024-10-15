import React from 'react'
import feature1 from '../assets/banner/feature1.png'
import feature2 from '../assets/banner/feature2.png'
import feature3 from '../assets/banner/feature3.png'
import feature4 from '../assets/banner/feature4.png'
import feature5 from '../assets/banner/feature5.png'
import feature6 from '../assets/banner/feature6.png'
function Featureimg({page}) {
    return (
        <div className='w-[90%] min-h-[120px] flex flex-wrap  gap-6 m-auto mt-6'>
            {/* <div className='flex gap-6'> */}
                <div>
                    <img src={ feature1} alt="" className='h-[120px] min-w-[120px]' />
                </div>
                <div>
                    <img src={feature4} alt="" className='h-[120px] min-w-[120px]' />
                </div>
                <div>
                    <img src={feature2} alt="" className='h-[120px] min-w-[120px]' />
                </div>
                <div>
                    <img src={feature3} alt="" className='h-[120px] min-w-[120px]' />
                </div>
            {/* </div> */}
            {/* <div className='flex gap-6'> */}
                <div>
                    <img src={feature5} alt="" className='h-[120px] min-w-[120px]' />
                </div>
                <div>
                    <img src={feature4} alt="" className='h-[120px] min-w-[120px]' />
                </div>

                <div>
                    <img src={feature5} alt="" className='h-[120px] min-w-[120px]' />
                </div>
                <div>
                    <img src={feature6} alt="" className='h-[120px] min-w-[120px]' />
                </div>
            {/* </div> */}
        </div>
    )
}

export default Featureimg