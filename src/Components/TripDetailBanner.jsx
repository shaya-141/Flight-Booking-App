import React from 'react'

function TripDetailBanner({value}) {
  return (
    <div style={{
        backgroundImage: `url(${value?.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
    }} className='w-[90%] rounded-xl   h-[370px] m-auto mt-8'>
        
    </div>
  )
}

export default TripDetailBanner